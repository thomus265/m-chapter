import { EVENT_INFO } from '../data/eventData';

export default function DetailsSection() {
  return (
    <section id="details" className="section-band">
      <div className="page-container">
        <div className="text-center">
          <p className="eyebrow">The Evening</p>
          <h2 className="section-title mt-3 text-[var(--ink)]">Details</h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="spec-card px-6 py-7 text-center">
            <p className="eyebrow">Date</p>
            <p className="font-heading mt-3 text-2xl text-[var(--ink)] tabular-nums">
              {EVENT_INFO.date}
            </p>
          </div>

          <div className="spec-card px-6 py-7 text-center">
            <p className="eyebrow">Time</p>
            <p className="font-heading mt-3 text-2xl text-[var(--ink)]">
              {EVENT_INFO.time}
            </p>
          </div>

          <div className="spec-card px-6 py-7 text-center">
            <p className="eyebrow">Venue</p>
            <p className="font-heading mt-3 text-2xl text-[var(--ink)]">
              {EVENT_INFO.venue}
            </p>
          </div>
        </div>

        <p className="font-script mt-8 text-center text-xl sm:text-2xl">
          “{EVENT_INFO.note}”
        </p>
      </div>
    </section>
  );
}
