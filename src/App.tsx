import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DetailsSection from './components/DetailsSection';
import DressCodeSection from './components/DressCodeSection';
import LookBookSection from './components/LookBookSection';
import HairSection from './components/HairSection';
import RsvpSection from './components/RsvpSection';
import { EVENT_INFO } from './data/eventData';

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
      <Navbar />

      <main>
        <HeroSection />
        <DetailsSection />
        <DressCodeSection />
        <LookBookSection />
        <HairSection />
        <RsvpSection />
      </main>

      <footer className="border-t border-[var(--hairline)] py-8">
        <div className="page-container text-center">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--muted)]">
            {EVENT_INFO.title} · {EVENT_INFO.date} · Hosted by {EVENT_INFO.host}
          </p>
        </div>
      </footer>
    </div>
  );
}
