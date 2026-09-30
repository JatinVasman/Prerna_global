import type { Metadata } from 'next';
import { getAllLocations, getAllStatesList } from '@/lib/seo-data';
import { getSEOMetadata, getStructuredData } from '@/lib/seo-helpers';
import LocationsDirectory from '@/components/locations/LocationsDirectory';

export const metadata: Metadata = getSEOMetadata('directory');

export default function LocationsPage() {
  const cities = getAllLocations();
  const states = getAllStatesList();
  const schemas = getStructuredData('directory');

  return (
    <>
      {schemas.map((s, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
      <LocationsDirectory cities={cities} states={states} />
    </>
  );
}
