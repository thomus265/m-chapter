import { EVENT_INFO } from '../data/eventData';

export default function RsvpSection() {
  return (
    <section id="rsvp" className="rsvp-band py-20 sm:py-24">
      <div className="page-container text-center">
        <p className="text-[11px] font-normal uppercase tracking-[0.34em] text-[#EBD5B8]">
          Kindly Reply
        </p>
        <h2 className="section-title mt-3 text-[#FBF6EC]">RSVP</h2>

        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-[#EBD5B8]">
          {EVENT_INFO.note}
        </p>

        <p className="font-heading mt-5 text-2xl text-[#FBF6EC] tabular-nums">
          {EVENT_INFO.host} · {EVENT_INFO.phoneDisplay}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href={EVENT_INFO.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="spec-btn spec-btn-espresso-filled mobile-full-btn"
          >
            Confirm on WhatsApp
          </a>
          <a
            href={EVENT_INFO.phoneHref}
            className="spec-btn spec-btn-espresso-outline mobile-full-btn"
          >
            Call {EVENT_INFO.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
