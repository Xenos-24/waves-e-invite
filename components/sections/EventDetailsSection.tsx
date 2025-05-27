
import { SparkleDoodleIcon } from '@/components/icons/SparkleDoodleIcon';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';

export function EventDetailsSection() {
  return (
    <section 
      id="event-details" 
      className="section-min-height relative" 
    >
      {/* Scattered Flowers - Event Details Section */}
      <Image
        src="/red.png"
        alt="A small red flower"
        width={90}
        height={90}
        className="absolute bottom-[10%] left-[10%] w-14 h-14 md:w-18 md:h-18 transform -rotate-[5deg] opacity-80 z-20"
      />
      <Image
        src="/bunch-yellow.png"
        alt="A bunch of yellow flowers"
        width={120}
        height={100}
        className="absolute top-[-1rem] right-[3%] w-20 h-18 md:w-24 md:h-20 transform rotate-[8deg] opacity-70 -z-10"
      />
      <Image
        src="/bunch-pink.png"
        alt="A bunch of pink flowers"
        width={100}
        height={130}
        className="absolute top-[-0.5rem] right-[10%] w-16 h-20 md:w-20 md:h-26 transform rotate-[-6deg] opacity-70 -z-10"
      />
      <Image
        src="/purple-small.png"
        alt="A small purple flower"
        width={80}
        height={80}
        className="absolute top-[80%] right-[10%] w-12 h-12 md:w-16 md:h-16 transform rotate-[20deg] opacity-75 z-20"
      />
      <Image
        src="/pink-small.png"
        alt="A small pink flower"
        width={70}
        height={70}
        className="absolute bottom-[15%] right-[5%] w-10 h-10 md:w-12 md:h-12 transform rotate-[8deg] opacity-60 z-20"
      />

      <Card 
        className="w-full max-w-2xl scrapbook-element washi-tape relative z-10 bg-card/90 backdrop-blur-sm" 
        style={{ transform: 'rotate(1deg)' }}
      >
        <CardHeader className="text-center">
          <div className="flex justify-center mb-2">
            <SparkleDoodleIcon className="w-8 h-8 text-accent-foreground animate-ping" />
            <SparkleDoodleIcon className="w-12 h-12 text-primary" />
            <SparkleDoodleIcon className="w-8 h-8 text-accent-foreground animate-ping animation-delay-300" />
          </div>
          <CardTitle className="text-4xl md:text-5xl font-handwriting-header text-primary-foreground">You're Invited!</CardTitle>
          <CardDescription className="font-handwriting-body text-lg text-foreground/80 pt-2">
            To something special, just for us...
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-2xl font-handwriting-body text-foreground">
            A cozy evening filled with laughter, good memories to keep, and even better company (that's you!).
          </p>
          <div className="font-handwriting-body text-xl text-foreground/90 border-t border-b border-dashed border-primary/50 py-4 my-6">
            <p><strong className="text-primary-foreground">Date:</strong> Today! *Gasp*</p>
            <p><strong className="text-primary-foreground">Time:</strong> When the stars align (around 6 PM?)</p>
            <p><strong className="text-primary-foreground">Place:</strong> Our favorite spot</p>
            <p><strong className="text-primary-foreground">Attire:</strong> Whatever makes you smile! (You look beautiful regardless!)</p>
          </div>
          <p className="font-handwriting-body text-lg italic text-foreground/70">
            (More precise details will be whispered to you soon...)
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
