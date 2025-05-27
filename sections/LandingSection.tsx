
import { HeartRain } from '@/components/decorations/HeartRain';
import { HeartDoodleIcon } from '@/components/icons/HeartDoodleIcon';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

export function LandingSection() {
  return (
    <section 
      id="landing" 
      className="section-min-height text-center relative py-10"
    >
      <HeartRain />

      {/* Scattered Flowers - Landing Section */}
      <Image
        src="/pink-big.png"
        alt="A large pink flower"
        width={150}
        height={200}
        className="absolute top-[5%] left-[5%] w-20 h-28 md:w-28 md:h-40 transform -rotate-[15deg] opacity-70 -z-10"
      />
      <Image
        src="/purple-small.png"
        alt="A small purple flower"
        width={80}
        height={80}
        className="absolute bottom-[15%] right-[8%] w-12 h-12 md:w-16 md:h-16 transform rotate-[10deg] opacity-80 -z-10"
      />
      <Image
        src="/bunch-yellow.png"
        alt="A bunch of yellow flowers"
        width={120}
        height={100}
        className="absolute top-[10%] right-[12%] w-16 h-14 md:w-24 md:h-20 transform rotate-[5deg] opacity-75 -z-10"
      />
      
      <div className="relative z-10 inline-block mt-4 md:mt-0">
        
        <HeartDoodleIcon 
          className="absolute top-1/2 -translate-y-1/2 -left-8 sm:-left-10 md:-left-14 w-14 h-14 md:w-20 md:h-20 text-pink-400 transform -rotate-[25deg] opacity-70"
        />

        <HeartDoodleIcon
          className="absolute bottom-[-1.75rem] right-[-1.75rem] sm:bottom-[-2.25rem] sm:right-[-2.25rem] md:bottom-[-3rem] md:right-[-3rem] w-20 h-20 md:w-32 md:h-32 text-pink-500 transform rotate-[20deg] opacity-80"
        />
        
        <div 
          className="scrapbook-element bg-card/90 backdrop-blur-sm p-6 rounded-xl shadow-2xl relative" 
          style={{ transform: 'rotate(-2deg)' }}
        >
          <h1 className="text-5xl md:text-7xl font-handwriting-header text-primary-foreground mb-4">
            My Dearest Love,
          </h1>
          <p className="text-xl md:text-2xl font-handwriting-body text-foreground/80">
            Prepare for a little adventure I've crafted just for you...
          </p>
        </div>
      </div>

      <div className="mt-12 md:mt-16 flex flex-col items-center z-10 relative">
        <p className="font-handwriting-body text-lg text-foreground/70 mb-2 animate-pulse">
          Scroll down to uncover the magic...
        </p>
        <a
          href="#event-details"
          aria-label="Scroll to event details"
          className="p-2 rounded-full hover:bg-primary/10 transition-colors"
        >
          <ChevronDown className="w-10 h-10 md:w-12 md:h-12 text-primary-foreground animate-bounce" />
        </a>
      </div>
    </section>
  );
}
