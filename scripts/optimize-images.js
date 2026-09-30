const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images');
const MAX_WIDTH = 1600;
const JPEG_QUALITY = 82;

async function getFiles(dir) {
  const dirents = await fs.promises.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    dirents.map((dirent) => {
      const res = path.resolve(dir, dirent.name);
      return dirent.isDirectory() ? getFiles(res) : res;
    })
  );
  return files.flat();
}

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) {
    return null;
  }

  try {
    // Read entirely into memory buffer so Windows file lock is never held on filePath
    const inputBuffer = await fs.promises.readFile(filePath);
    const origSize = inputBuffer.length;

    const metadata = await sharp(inputBuffer).metadata();
    let transform = sharp(inputBuffer);

    if (metadata.width && metadata.width > MAX_WIDTH) {
      transform = transform.resize({
        width: MAX_WIDTH,
        withoutEnlargement: true,
        fit: 'inside',
      });
    }

    let buffer;
    if (ext === '.jpg' || ext === '.jpeg') {
      buffer = await transform
        .jpeg({
          quality: JPEG_QUALITY,
          progressive: true,
          mozjpeg: true,
        })
        .toBuffer();
    } else if (ext === '.png') {
      buffer = await transform
        .png({
          compressionLevel: 9,
          effort: 7,
          palette: metadata.channels === 4 ? false : true,
        })
        .toBuffer();
    }

    if (buffer && buffer.length < origSize) {
      await fs.promises.writeFile(filePath, buffer);
      return {
        path: path.relative(path.join(__dirname, '..'), filePath),
        origSize,
        newSize: buffer.length,
        saved: origSize - buffer.length,
      };
    }
  } catch (err) {
    console.error(`Error optimizing ${filePath}:`, err.message);
  }

  return null;
}

async function main() {
  console.log('Scanning public/images for optimization...');
  const files = await getFiles(IMAGES_DIR);
  let totalOrig = 0;
  let totalNew = 0;
  let optimizedCount = 0;

  for (const file of files) {
    const res = await optimizeImage(file);
    if (res) {
      optimizedCount++;
      totalOrig += res.origSize;
      totalNew += res.newSize;
      const pct = (((res.origSize - res.newSize) / res.origSize) * 100).toFixed(1);
      console.log(
        `✓ ${res.path}: ${(res.origSize / 1024).toFixed(0)}KB → ${(res.newSize / 1024).toFixed(0)}KB (-${pct}%)`
      );
    }
  }

  console.log('\n--- Optimization Summary ---');
  console.log(`Files optimized: ${optimizedCount}`);
  console.log(`Original size: ${(totalOrig / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`Optimized size: ${(totalNew / (1024 * 1024)).toFixed(2)} MB`);
  console.log(
    `Total bandwidth saved: ${((totalOrig - totalNew) / (1024 * 1024)).toFixed(2)} MB (-${(
      ((totalOrig - totalNew) / totalOrig) *
      100
    ).toFixed(1)}%)`
  );
}

main();
