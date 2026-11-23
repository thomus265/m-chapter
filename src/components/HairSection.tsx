import { HAIR_CARDS } from '../data/eventData';

export default function HairSection() {
  return (
    <section id="hair" className="section-band">
      <div className="page-container">
        <div className="text-center">
          <p className="eyebrow">Ladies’ Styling</p>
          <h2 className="section-title mt-3 text-[var(--ink)]">Hair</h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {HAIR_CARDS.map((card) => (
            <article key={card.numeral} className="spec-card p-7">
              <span
                className="font-heading block text-3xl leading-none tabular-nums"
                style={{ color: 'var(--caramel)' }}
              >
                {card.numeral}
              </span>
              <h3 className="font-heading mt-4 text-2xl text-[var(--ink)]">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
