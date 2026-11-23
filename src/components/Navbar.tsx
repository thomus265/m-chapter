export default function Navbar() {
  return (
    <header className="top-nav">
      <div className="page-container flex h-14 items-center justify-between gap-6">
        <a
          href="#top"
          aria-label="The M Chapter — Top"
          className="font-heading text-2xl tracking-[0.04em] text-[var(--ink)] no-underline whitespace-nowrap shrink-0"
        >
          M
        </a>

        <nav
          aria-label="Primary navigation"
          className="flex items-center gap-6 sm:gap-8 text-[11px] font-normal uppercase tracking-[0.26em] text-[var(--muted)]"
        >
          <a
            href="#details"
            className="hidden sm:inline-block transition-colors duration-150 hover:text-[var(--ink)] whitespace-nowrap shrink-0"
          >
            Details
          </a>
          <a
            href="#dress-code"
            className="transition-colors duration-150 hover:text-[var(--ink)] whitespace-nowrap shrink-0"
          >
            Dress code
          </a>
          <a
            href="#look-book"
            className="hidden sm:inline-block transition-colors duration-150 hover:text-[var(--ink)] whitespace-nowrap shrink-0"
          >
            Look book
          </a>
          <a
            href="#hair"
            className="hidden sm:inline-block transition-colors duration-150 hover:text-[var(--ink)] whitespace-nowrap shrink-0"
          >
            Hair
          </a>
          <a
            href="#rsvp"
            className="transition-colors duration-150 hover:text-[var(--ink)] whitespace-nowrap shrink-0"
          >
            RSVP
          </a>
        </nav>
      </div>
    </header>
  );
}
