import { useEffect, useState } from 'react';
import { EVENT_INFO } from '../data/eventData';

interface CountdownParts {
  days: number;
  hours: number;
  minutes: number;
}

function getCountdown(): CountdownParts {
  const target = new Date('2026-12-13T18:00:00').getTime();
  const diff = Math.max(0, target - Date.now());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  return { days, hours, minutes };
}

export default function HeroSection() {
  const [countdown, setCountdown] = useState<CountdownParts>(() => getCountdown());
  const [portraitError, setPortraitError] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdown(getCountdown());
    }, 30000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pt-20 pb-14 sm:pt-24 sm:pb-16"
    >
      {/* Scattered CSS pearls in hero corners */}
      <span className="pearl-dot top-20 left-6 h-3.5 w-3.5 sm:top-24 sm:left-14 sm:h-4 sm:w-4" aria-hidden="true" />
      <span className="pearl-dot top-28 left-14 h-2 w-2 sm:top-36 sm:left-28 sm:h-2.5 sm:w-2.5" aria-hidden="true" />
      <span className="pearl-dot top-18 right-8 h-3 w-3 sm:top-24 sm:right-16 sm:h-4 sm:w-4" aria-hidden="true" />
      <span className="pearl-dot top-32 right-16 h-2 w-2 sm:top-40 sm:right-28 sm:h-2.5 sm:w-2.5" aria-hidden="true" />
      <span className="pearl-dot bottom-14 left-8 h-2.5 w-2.5 sm:bottom-20 sm:left-18 sm:h-3.5 sm:w-3.5" aria-hidden="true" />
      <span className="pearl-dot bottom-24 left-16 h-1.5 w-1.5 sm:bottom-32 sm:left-32 sm:h-2 sm:w-2" aria-hidden="true" />
      <span className="pearl-dot bottom-16 right-8 h-3 w-3 sm:bottom-24 sm:right-20 sm:h-4 sm:w-4" aria-hidden="true" />
      <span className="pearl-dot bottom-28 right-18 h-2 w-2 sm:bottom-36 sm:right-32 sm:h-2.5 sm:w-2.5" aria-hidden="true" />

      <div className="page-container relative z-10 w-full text-center">
        <p className="eyebrow">{EVENT_INFO.eyebrow}</p>

        <h1 className="hero-title mt-4 text-[var(--ink)]">{EVENT_INFO.title}</h1>

        {/* Arched portrait of Mpho with thin caramel outline */}
        <div className="mx-auto mt-7 w-[220px] sm:mt-8 sm:w-[260px]">
          <div className="arch-portrait">
            {!portraitError ? (
              <img
                src={EVENT_INFO.portraitSrc}
                alt="Portrait of Mpho celebrating The M Chapter"
                referrerPolicy="no-referrer"
                onError={() => setPortraitError(true)}
                className="aspect-[3/4] w-full object-cover object-top"
              />
            ) : (
              <div className="flex aspect-[3/4] w-full items-center justify-center rounded-t-full bg-[var(--bg2)]">
                <span className="font-heading text-3xl text-[var(--ink)]">M</span>
              </div>
            )}
          </div>
        </div>

        <p className="font-script mt-6 text-[28px] leading-tight sm:text-[34px]">
          {EVENT_INFO.scriptLine}
        </p>

        <p className="mt-2 text-sm tracking-[0.14em] uppercase text-[var(--muted)]">
          {EVENT_INFO.date} · {EVENT_INFO.time}
        </p>

        {/* Live countdown: days, hours, minutes */}
        <div
          aria-label="Countdown to celebration"
          className="mx-auto mt-7 inline-grid grid-cols-3 border border-[var(--hairline)] bg-[var(--card)]"
        >
          <div className="border-r border-[var(--hairline)] px-5 py-3 sm:px-7">
            <span className="font-heading block text-2xl text-[var(--ink)] tabular-nums sm:text-3xl">
              {String(countdown.days).padStart(2, '0')}
            </span>
            <span className="block text-[10px] uppercase tracking-[0.26em] text-[var(--muted)]">
              Days
            </span>
          </div>
          <div className="border-r border-[var(--hairline)] px-5 py-3 sm:px-7">
            <span className="font-heading block text-2xl text-[var(--ink)] tabular-nums sm:text-3xl">
              {String(countdown.hours).padStart(2, '0')}
            </span>
            <span className="block text-[10px] uppercase tracking-[0.26em] text-[var(--muted)]">
              Hours
            </span>
          </div>
          <div className="px-5 py-3 sm:px-7">
            <span className="font-heading block text-2xl text-[var(--ink)] tabular-nums sm:text-3xl">
              {String(countdown.minutes).padStart(2, '0')}
            </span>
            <span className="block text-[10px] uppercase tracking-[0.26em] text-[var(--muted)]">
              Minutes
            </span>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <a href="#rsvp" className="spec-btn spec-btn-filled mobile-full-btn">
            RSVP Now
          </a>
        </div>
      </div>
    </section>
  );
}
