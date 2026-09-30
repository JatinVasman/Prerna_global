'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, ArrowRight, BookOpen, Clock, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import type { BlogArticle, BlogCategory } from '@/types/seo';
import styles from './BlogKnowledgeHub.module.css';

interface Props {
  articles: BlogArticle[];
  categories: BlogCategory[];
  initialCategory?: string | null;
  categoryObj?: BlogCategory | null;
}

const ITEMS_PER_PAGE = 12;

export default function BlogKnowledgeHub({
  articles,
  categories,
  initialCategory = null,
  categoryObj = null,
}: Props) {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Filter articles by search query
  const filteredArticles = useMemo(() => {
    let list = articles;

    if (search.trim()) {
      const q = search.toLowerCase().trim();
      list = list.filter((a) => {
        const full = `${a.title} ${a.excerpt || ''} ${a.category_name || ''} ${a.country || ''}`.toLowerCase();
        return full.includes(q);
      });
    }

    return list;
  }, [articles, search]);

  // Featured article (only shown on page 1, when no search filter and on all-guides view)
  const featuredArticle = useMemo(() => {
    if (initialCategory || search.trim() || currentPage !== 1) return null;
    return (
      articles.find((a) => a.slug === 'how-to-apply-uk-universities-from-india') ||
      articles[0] ||
      null
    );
  }, [articles, initialCategory, search, currentPage]);

  // Display grid articles (exclude featured article from grid if shown on top)
  const gridArticles = useMemo(() => {
    if (featuredArticle && !search.trim() && !initialCategory && currentPage === 1) {
      return filteredArticles.filter((a) => a.slug !== featuredArticle.slug);
    }
    return filteredArticles;
  }, [filteredArticles, featuredArticle, search, initialCategory, currentPage]);

  const totalPages = Math.max(1, Math.ceil(gridArticles.length / ITEMS_PER_PAGE));
  const pageSafe = Math.min(currentPage, totalPages);
  const paginatedArticles = useMemo(() => {
    const offset = (pageSafe - 1) * ITEMS_PER_PAGE;
    return gridArticles.slice(offset, offset + ITEMS_PER_PAGE);
  }, [gridArticles, pageSafe]);

  const totalCountAll = articles.length;

  const handlePageChange = (p: number) => {
    setCurrentPage(p);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  return (
    <div className={styles.wrapper}>
      {/* BREADCRUMBS */}
      <div className={styles.breadcrumbBar}>
        <div className="container">
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className={styles.sep}>/</span>
            <Link href="/blog/">Blogs</Link>
            {categoryObj && (
              <>
                <span className={styles.sep}>/</span>
                <span className={styles.current}>{categoryObj.name}</span>
              </>
            )}
          </nav>
        </div>
      </div>

      {/* HERO BANNER */}
      <header className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span>KNOWLEDGE HUB &amp; ADMISSIONS INSIGHTS</span>
            </div>
            <h1 className={styles.heroTitle}>
              {categoryObj ? (
                <>
                  {categoryObj.name} <span className={styles.goldText}>Guides</span>
                </>
              ) : (
                <>
                  Study Abroad <span className={styles.goldText}>Knowledge Hub</span>
                </>
              )}
            </h1>
            <p className={styles.heroSubtitle}>
              {categoryObj
                ? categoryObj.description
                : 'Explore comprehensive guides, admission guidelines, intake timelines, and student visa tips curated by certified overseas education counselors.'}
            </p>

            {/* LIVE SEARCH BAR */}
            <div className={styles.searchBox}>
              <Search className={styles.searchIcon} size={20} />
              <input
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Search 500+ guides by topic, country, visa, or keyword..."
                className={styles.searchInput}
                aria-label="Search study abroad guides"
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch('')}
                  className={styles.clearBtn}
                  aria-label="Clear search"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* TAXONOMY FILTER BAR (Scrollable 26 categories pills) */}
      <nav className={styles.taxonomySection} aria-label="Blog categories">
        <div className="container">
          <div className={styles.categoryScroll}>
            <Link
              href="/blog/"
              className={`${styles.catPill} ${!initialCategory ? styles.activeCatPill : ''}`}
            >
              All Guides ({totalCountAll})
            </Link>
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/blog/category/${c.slug}/`}
                className={`${styles.catPill} ${initialCategory === c.slug ? styles.activeCatPill : ''}`}
              >
                {c.name} {c.count ? `(${c.count})` : ''}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT AREA */}
      <main className={styles.contentSection}>
        <div className="container">
          {/* FEATURED ARTICLE BANNER */}
          {featuredArticle && (
            <div className={styles.featuredCard}>
              <div className={styles.featuredImgCol}>
                <Link href={`/blog/${featuredArticle.slug}/`} className={styles.featuredImgLink}>
                  <Image
                    src={featuredArticle.featured_image || '/images/brand/logo-tight.png'}
                    alt={featuredArticle.featured_image_alt || featuredArticle.title}
                    width={560}
                    height={340}
                    className={styles.featuredImg}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    priority
                    unoptimized
                  />
                </Link>
                <span className={styles.featuredTag}>Featured Guide</span>
              </div>
              <div className={styles.featuredContentCol}>
                <div className={styles.metaRow}>
                  <span className={styles.categoryBadge}>{featuredArticle.category_name}</span>
                  <span className={styles.readTime}>
                    <Clock size={13} /> {featuredArticle.read_time}
                  </span>
                  <span className={styles.postDate}>
                    <Calendar size={13} /> {featuredArticle.date}
                  </span>
                </div>
                <h2 className={styles.featuredTitle}>
                  <Link href={`/blog/${featuredArticle.slug}/`}>{featuredArticle.title}</Link>
                </h2>
                <p className={styles.featuredExcerpt}>{featuredArticle.excerpt}</p>
                <div className={styles.featuredFooter}>
                  <div className={styles.authorBar}>
                    <span className={styles.authorAvatar}>PG</span>
                    <div>
                      <strong className={styles.authorName}>{featuredArticle.author}</strong>
                      <span className={styles.authorRole}>{featuredArticle.author_role}</span>
                    </div>
                  </div>
                  <Link href={`/blog/${featuredArticle.slug}/`} className={styles.readFullBtn}>
                    <span>Read Complete Guide</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* GRID RESULTS HEADER */}
          <div className={styles.resultsBar}>
            <p className={styles.resultsCount}>
              Showing <strong>{filteredArticles.length}</strong> study-abroad guides
              {initialCategory && categoryObj ? ` in ${categoryObj.name}` : ''}
              {search ? ` matching "${search}"` : ''}
            </p>
            {search && (
              <button
                type="button"
                onClick={() => setSearch('')}
                className={styles.resetFilterBtn}
              >
                Reset Search
              </button>
            )}
          </div>

          {/* ARTICLE GRID */}
          {paginatedArticles.length === 0 ? (
            <div className={styles.emptyWrap}>
              <BookOpen size={48} className={styles.emptyIcon} />
              <h3>No guides found matching your search</h3>
              <p>Try searching with different keywords or explore our category taxonomy.</p>
              <button
                type="button"
                onClick={() => setSearch('')}
                className={styles.primaryBtn}
              >
                View All Guides
              </button>
            </div>
          ) : (
            <div className={styles.articleGrid}>
              {paginatedArticles.map((article) => (
                <article key={article.slug} className={styles.articleCard}>
                  <div className={styles.cardThumbWrap}>
                    <Link href={`/blog/${article.slug}/`} className={styles.cardThumbLink}>
                      <Image
                        src={article.featured_image || '/images/brand/logo-tight.png'}
                        alt={article.featured_image_alt || article.title}
                        width={380}
                        height={200}
                        className={styles.cardThumb}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        unoptimized
                      />
                    </Link>
                    <span className={styles.cardCatBadge}>{article.category_name}</span>
                  </div>

                  <div className={styles.cardBody}>
                    <div className={styles.cardMeta}>
                      <span className={styles.cardReadTime}>
                        <Clock size={12} /> {article.read_time}
                      </span>
                      <span className={styles.cardDot}>•</span>
                      <span className={styles.cardDate}>{article.date}</span>
                    </div>

                    <h3 className={styles.cardTitle}>
                      <Link href={`/blog/${article.slug}/`}>{article.title}</Link>
                    </h3>

                    <p className={styles.cardExcerpt}>
                      {article.excerpt.substring(0, 115)}...
                    </p>

                    <div className={styles.cardFooter}>
                      <Link href={`/blog/${article.slug}/`} className={styles.cardReadLink}>
                        <span>Read Complete Guide</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* PAGINATION */}
          {totalPages > 1 && (
            <nav className={styles.paginationRow} aria-label="Blog pages">
              <button
                type="button"
                onClick={() => handlePageChange(Math.max(1, pageSafe - 1))}
                disabled={pageSafe === 1}
                className={styles.pageBtn}
                aria-label="Previous page"
              >
                <ChevronLeft size={16} />
                <span>Prev</span>
              </button>

              <div className={styles.pageNumbers}>
                {Array.from({ length: totalPages }, (_, i) => i + 1)
                  .filter((p) => p === 1 || p === totalPages || Math.abs(p - pageSafe) <= 2)
                  .map((p, idx, arr) => {
                    const prev = arr[idx - 1];
                    const showEllipsis = prev && p - prev > 1;
                    return (
                      <span key={p} style={{ display: 'inline-flex', alignItems: 'center' }}>
                        {showEllipsis && <span className={styles.ellipsis}>...</span>}
                        <button
                          type="button"
                          onClick={() => handlePageChange(p)}
                          className={`${styles.pageNumberBtn} ${pageSafe === p ? styles.activePage : ''}`}
                          aria-current={pageSafe === p ? 'page' : undefined}
                        >
                          {p}
                        </button>
                      </span>
                    );
                  })}
              </div>

              <button
                type="button"
                onClick={() => handlePageChange(Math.min(totalPages, pageSafe + 1))}
                disabled={pageSafe === totalPages}
                className={styles.pageBtn}
                aria-label="Next page"
              >
                <span>Next</span>
                <ChevronRight size={16} />
              </button>
            </nav>
          )}
        </div>
      </main>
    </div>
  );
}
