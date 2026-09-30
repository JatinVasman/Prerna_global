'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, MapPin, Building2, ArrowRight, Phone, CheckCircle2 } from 'lucide-react';
import type { LocationEntity, StateEntity } from '@/types/seo';
import styles from './LocationsDirectory.module.css';

interface Props {
  cities: Record<string, LocationEntity>;
  states: StateEntity[];
}

export default function LocationsDirectory({ cities, states }: Props) {
  const [search, setSearch] = useState('');
  const [selectedState, setSelectedState] = useState<string>('all');

  const cityList = useMemo(() => Object.entries(cities), [cities]);
  const popularCities = useMemo(
    () => cityList.filter(([, c]) => c.is_popular),
    [cityList]
  );

  const filteredCities = useMemo(() => {
    return cityList.filter(([slug, c]) => {
      const matchesSearch =
        search === '' ||
        c.city_name.toLowerCase().includes(search.toLowerCase()) ||
        c.state.toLowerCase().includes(search.toLowerCase()) ||
        slug.includes(search.toLowerCase());

      const matchesState =
        selectedState === 'all' ||
        c.state.toLowerCase() === selectedState.toLowerCase() ||
        c.state_slug === selectedState;

      return matchesSearch && matchesState;
    });
  }, [cityList, search, selectedState]);

  return (
    <div className={styles.wrapper}>
      {/* BREADCRUMBS */}
      <div className={styles.breadcrumbBar}>
        <div className="container">
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className={styles.sep}>/</span>
            <span className={styles.current}>Locations</span>
          </nav>
        </div>
      </div>

      {/* HERO SECTION */}
      <header className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span className={styles.heroBadgeDot} />
              <span>PAN-INDIA STUDY ABROAD ADMISSIONS NETWORK</span>
            </div>
            <h1 className={styles.heroTitle}>
              Overseas Education Consultants <span className={styles.goldText}>Near You</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Connect with certified study abroad counselling desks across 700+ Indian cities. 
              Visit our Pune Head Office desk or schedule a dedicated 1-on-1 virtual counselling session.
            </p>

            {/* SEARCH BAR */}
            <div className={styles.searchBox}>
              <Search className={styles.searchIcon} size={20} />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by city (e.g. Pune, Mumbai, Delhi, Jaipur, Nagpur)..."
                className={styles.searchInput}
                aria-label="Search study abroad desks by city"
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

            {/* QUICK STATS STRIP */}
            <div className={styles.trustStrip}>
              <div className={styles.trustItem}>
                <CheckCircle2 size={16} className={styles.trustIcon} />
                <span><strong>700+</strong> Verified Indian Desks</span>
              </div>
              <div className={styles.trustItem}>
                <CheckCircle2 size={16} className={styles.trustIcon} />
                <span><strong>100%</strong> Free 1-on-1 Profile Assessment</span>
              </div>
              <div className={styles.trustItem}>
                <CheckCircle2 size={16} className={styles.trustIcon} />
                <span><strong>99%+</strong> Visa Approval Track Record</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* FEATURED METRO HUBS */}
      {!search && selectedState === 'all' && (
        <section className={styles.popularSection} aria-labelledby="featured-hubs-heading">
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionPre}>FLAGSHIP DESKS</span>
              <h2 id="featured-hubs-heading" className={styles.sectionH2}>
                Major Admissions &amp; Walk-in Desks
              </h2>
              <p className={styles.sectionDesc}>
                Direct walk-in facilities, Pune head office oversight, and specialized overseas education counseling.
              </p>
            </div>

            <div className={styles.popularGrid}>
              {popularCities.map(([slug, city]) => (
                <article key={slug} className={styles.popularCard}>
                  <div className={styles.popCardTop}>
                    <span className={styles.popBadge}>{city.tier_label}</span>
                    <span className={styles.regionBadge}>{city.region}</span>
                  </div>
                  <h3 className={styles.popCityName}>{city.city_name}</h3>
                  <p className={styles.popState}>
                    <MapPin size={14} className={styles.pinIcon} />
                    <span>{city.state}</span>
                  </p>
                  <p className={styles.popNote}>{city.consultation_note}</p>
                  <div className={styles.popFooter}>
                    <Link href={`/locations/${slug}/`} className={styles.popCta}>
                      <span>Consult in {city.city_name}</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* STATE DIRECTORY CLUSTERS */}
      <section className={styles.statesSection} aria-labelledby="states-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionPre}>REGIONAL CLUSTERS</span>
            <h2 id="states-heading" className={styles.sectionH2}>
              Browse Desks by Indian State
            </h2>
            <p className={styles.sectionDesc}>
              Select a state to filter cities or view state-level admission aggregators:
            </p>
          </div>

          <div className={styles.stateFilterRow}>
            <button
              type="button"
              onClick={() => setSelectedState('all')}
              className={`${styles.statePill} ${selectedState === 'all' ? styles.activeStatePill : ''}`}
            >
              All States ({states.length})
            </button>
            {states.map((st) => (
              <button
                key={st.slug}
                type="button"
                onClick={() => setSelectedState(selectedState === st.name ? 'all' : st.name)}
                className={`${styles.statePill} ${selectedState === st.name ? styles.activeStatePill : ''}`}
              >
                {st.name} ({st.total_cities})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* COMPLETE CITIES DIRECTORY GRID */}
      <section className={styles.directorySection} aria-labelledby="cities-directory-heading">
        <div className="container">
          <div className={styles.dirResultsHeader}>
            <h2 id="cities-directory-heading" className={styles.dirCount}>
              Showing <strong>{filteredCities.length}</strong> Study Abroad Counseling Desks
              {selectedState !== 'all' ? ` in ${selectedState}` : ''}
              {search ? ` matching "${search}"` : ''}
            </h2>
            {(search || selectedState !== 'all') && (
              <button
                type="button"
                onClick={() => {
                  setSearch('');
                  setSelectedState('all');
                }}
                className={styles.resetBtn}
              >
                Reset Filters
              </button>
            )}
          </div>

          {filteredCities.length === 0 ? (
            <div className={styles.emptyState}>
              <Building2 size={48} className={styles.emptyIcon} />
              <h3>No locations found matching your criteria</h3>
              <p>Try searching for a different city or browse by state.</p>
              <button
                type="button"
                onClick={() => {
                  setSearch('');
                  setSelectedState('all');
                }}
                className={styles.primaryBtn}
              >
                Show All 700+ Desks
              </button>
            </div>
          ) : (
            <div className={styles.citiesGrid}>
              {filteredCities.map(([slug, city]) => (
                <article key={slug} className={styles.cityCard}>
                  <div className={styles.cityCardTop}>
                    <span className={styles.stateTag}>{city.state}</span>
                    <span className={styles.tierTag}>{city.tier_label || 'Educational Hub'}</span>
                  </div>
                  <h3 className={styles.cityName}>{city.city_name}</h3>
                  <p className={styles.officeProximity}>
                    <MapPin size={13} className={styles.pinIcon} />
                    <span>{city.office_proximity}</span>
                  </p>
                  <p className={styles.cityExcerpt}>{city.consultation_note}</p>
                  <div className={styles.cityCardFooter}>
                    <Link href={`/locations/${slug}/`} className={styles.cityLink}>
                      <span>View {city.city_name} Desk</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* HIGH CONVERSION STRIP */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaCard}>
            <div className={styles.ctaContent}>
              <span className={styles.ctaBadge}>PERSONALIZED OVERSEAS ADVISORY</span>
              <h2 className={styles.ctaTitle}>
                Can&apos;t Find Your City? Get Virtual 1-on-1 Guidance
              </h2>
              <p className={styles.ctaDesc}>
                Regardless of where you are located in India, our senior counselors provide complete 
                end-to-end support for university selection, SOP review, financial loans, and visa filing.
              </p>
              <div className={styles.ctaActions}>
                <Link href="/contact-us/" className={styles.goldBtn}>
                  <span>Book Free Consultation</span>
                  <ArrowRight size={16} />
                </Link>
                <a href="tel:+919082900188" className={styles.phoneLink}>
                  <Phone size={16} />
                  <span>Call: +91 90829 00188</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
