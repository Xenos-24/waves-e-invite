
import { LandingSection } from '@/components/sections/LandingSection';
import { EventDetailsSection } from '@/components/sections/EventDetailsSection';
import { MemoryLaneSection } from '@/components/sections/MemoryLaneSection';
import { RsvpSection } from '@/components/sections/RsvpSection';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center w-full">
      <LandingSection />
      <EventDetailsSection />
      <MemoryLaneSection />
      <RsvpSection />
      {/* Footer has been moved to RsvpSection.tsx */}
    </main>
  );
}
    