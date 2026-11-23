import { PALETTE_SWATCHES } from '../data/eventData';

export default function DressCodeSection() {
  return (
    <section id="dress-code" className="section-band">
      <div className="page-container">
        <div className="text-center">
          <p className="eyebrow">Palette &amp; Attire</p>
          <h2 className="section-title mt-3 text-[var(--ink)]">Dress Code</h2>
        </div>

        {/* Five round palette swatches with names and hex values */}
        <div className="mt-10 flex flex-wrap items-start justify-center gap-5 sm:gap-7">
          {PALETTE_SWATCHES.map((swatch) => (
            <div key={swatch.key} className="flex flex-col items-center text-center">
              <div
                className="palette-swatch"
                style={{ backgroundColor: swatch.hex }}
                aria-label={`${swatch.name} ${swatch.hex}`}
              />
              <span className="font-heading mt-3 text-xl text-[var(--ink)]">
                {swatch.name}
              </span>
              <span className="mt-0.5 text-[11px] uppercase tracking-[0.2em] text-[var(--muted)] tabular-nums">
                {swatch.hex}
              </span>
            </div>
          ))}
        </div>

        {/* Ladies and Men panels */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="spec-card p-7 sm:p-8">
            <p className="eyebrow">Ladies</p>
            <h3 className="font-heading mt-2 text-3xl text-[var(--ink)]">
              Dresses &amp; Heels
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
              Sleek evening dresses—midi or floor-length in satin, silk, or structured
              crepe—styled across the five palette tones and paired with elegant heels.
            </p>
          </div>

          <div className="spec-card p-7 sm:p-8">
            <p className="eyebrow">Men</p>
            <h3 className="font-heading mt-2 text-3xl text-[var(--ink)]">
              Tailored Suits
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
              Sharp, well-tailored suiting in Espresso, Caramel, Sand, Ivory, or Noir,
              completed with a crisp dress shirt or knitwear and polished dress shoes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
