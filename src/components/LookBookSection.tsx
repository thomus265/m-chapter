import { useEffect, useState } from 'react';
import {
  ColourKey,
  GenderKey,
  LOOKBOOK_ITEMS,
  LookbookItem,
  PALETTE_SWATCHES,
} from '../data/eventData';

type GenderFilter = 'all' | GenderKey;
type ColourFilter = 'all' | ColourKey;

export default function LookBookSection() {
  const [genderFilter, setGenderFilter] = useState<GenderFilter>('all');
  const [colourFilter, setColourFilter] = useState<ColourFilter>('all');
  const [activePhoto, setActivePhoto] = useState<LookbookItem | null>(null);

  const filteredItems = LOOKBOOK_ITEMS.filter((item) => {
    const matchesGender = genderFilter === 'all' || item.g === genderFilter;
    const matchesColour = colourFilter === 'all' || item.c.includes(colourFilter);
    return matchesGender && matchesColour;
  });

  useEffect(() => {
    if (!activePhoto) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActivePhoto(null);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [activePhoto]);

  const filterKey = `${genderFilter}-${colourFilter}`;

  return (
    <section id="look-book" className="section-band">
      <div className="page-container">
        <div className="text-center">
          <p className="eyebrow">Style Inspiration</p>
          <h2 className="section-title mt-3 text-[var(--ink)]">Look Book</h2>
        </div>

        {/* Filters: Gender + Colour + Live count */}
        <div className="mt-10 flex flex-col gap-4 border-b border-[var(--hairline)] pb-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div role="group" aria-label="Filter by gender" className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setGenderFilter('all')}
                className={`filter-chip ${genderFilter === 'all' ? 'is-active' : ''}`}
              >
                All
              </button>
              <button
                type="button"
                onClick={() => setGenderFilter('w')}
                className={`filter-chip ${genderFilter === 'w' ? 'is-active' : ''}`}
              >
                Women
              </button>
              <button
                type="button"
                onClick={() => setGenderFilter('m')}
                className={`filter-chip ${genderFilter === 'm' ? 'is-active' : ''}`}
              >
                Men
              </button>
            </div>

            <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)] tabular-nums">
              {filteredItems.length} of {LOOKBOOK_ITEMS.length} looks
            </p>
          </div>

          {/* Colour filters: horizontal scroll on phones */}
          <div
            role="group"
            aria-label="Filter by colour"
            className="colour-filter-scroll flex flex-wrap gap-2"
          >
            <button
              type="button"
              onClick={() => setColourFilter('all')}
              className={`filter-chip ${colourFilter === 'all' ? 'is-active' : ''}`}
            >
              All Colours
            </button>
            {PALETTE_SWATCHES.map((swatch) => (
              <button
                key={swatch.key}
                type="button"
                onClick={() => setColourFilter(swatch.key)}
                className={`filter-chip ${colourFilter === swatch.key ? 'is-active' : ''}`}
              >
                <span
                  aria-hidden="true"
                  className="inline-block h-2.5 w-2.5 rounded-full border border-black/25"
                  style={{ backgroundColor: swatch.hex }}
                />
                <span>{swatch.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Gallery or Empty State */}
        {filteredItems.length > 0 ? (
          <div key={filterKey} className="lookbook-masonry mt-8">
            {filteredItems.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                data-g={item.g}
                data-c={item.c.join(' ')}
                onClick={() => setActivePhoto(item)}
                aria-label={`View look: ${item.caption}`}
                className={`lookbook-tile block w-full text-left p-0 ${
                  idx % 2 === 1 ? 'is-staggered' : ''
                }`}
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <span className="lookbook-caption block">{item.caption}</span>
              </button>
            ))}
          </div>
        ) : (
          <div className="spec-card mt-8 px-6 py-12 text-center">
            <p className="font-heading text-2xl text-[var(--ink)]">
              No looks match those filters
            </p>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Try another colour or reset the filters to view all {LOOKBOOK_ITEMS.length}{' '}
              looks.
            </p>
            <button
              type="button"
              onClick={() => {
                setGenderFilter('all');
                setColourFilter('all');
              }}
              className="spec-btn spec-btn-outline mobile-full-btn mt-6"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Full-screen Lightbox — tap anywhere or press Esc to close */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.caption}
          onClick={() => setActivePhoto(null)}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0E0C0B]/92 p-4 backdrop-blur-xs cursor-pointer"
        >
          <figure className="relative flex max-h-[88vh] max-w-3xl flex-col items-center">
            <img
              src={activePhoto.src}
              alt={activePhoto.caption}
              referrerPolicy="no-referrer"
              className="max-h-[78vh] w-auto border border-[var(--caramel)]/45 object-contain"
            />
            <figcaption className="mt-4 text-center text-sm tracking-[0.06em] text-[#FBF6EC]">
              {activePhoto.caption}
            </figcaption>
            <span className="mt-2 text-[10px] uppercase tracking-[0.3em] text-[#B9A48F]">
              Tap anywhere or press Esc to close
            </span>
          </figure>
        </div>
      )}
    </section>
  );
}
