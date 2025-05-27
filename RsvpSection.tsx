
import { HeartDoodleIcon } from '@/components/icons/HeartDoodleIcon';
import Image from 'next/image';
// Removed Button import as it's not used here if no actual RSVP button

export function RsvpSection() {
  return (
    <section 
      id="rsvp" 
      className="min-h-screen flex flex-col items-center p-4 md:p-8 text-center relative"
    >
      {/* Scattered Flowers - RSVP Section */}
      <Image
        src="/purple-big.png"
        alt="A large purple flower"
        width={160}
        height={180}
        className="absolute top-[10%] right-[8%] w-16 h-20 md:w-28 md:h-32 transform rotate-[12deg] opacity-70 z-20"
      />
      <Image
        src="/bunch-pink.png"
        alt="A small bunch of pink flowers"
        width={100}
        height={130}
        className="absolute bottom-[5%] left-[5%] w-16 h-20 md:w-20 md:h-26 transform -rotate-[10deg] opacity-75 -z-10"
      />

      <div className="absolute top-16 left-1/4 opacity-20 z-[1]">
        <HeartDoodleIcon className="w-20 h-20 text-primary transform -rotate-45" />
      </div>
      <div className="absolute bottom-16 right-1/4 opacity-20 z-[1]">
        <HeartDoodleIcon className="w-28 h-28 text-pink-400 transform rotate-30" />
      </div>
      
      <div className="flex-grow flex flex-col items-center justify-center w-full">
        <div className="scrapbook-element p-8 md:p-12 bg-card/90 backdrop-blur-sm relative z-10" style={{ transform: 'rotate(2deg)' }}>
          <h2 className="text-4xl md:text-6xl font-handwriting-header text-primary-foreground mb-8">
            Can't Wait To See You!
          </h2>
          <p className="text-2xl md:text-3xl font-handwriting-body text-foreground/80 mb-10">
            My heart already does a little happy dance thinking about it.
          </p>
          <div className="flex justify-center items-center space-x-4">
            <HeartDoodleIcon className="w-10 h-10 text-pink-500 animate-pulse" />
            <HeartDoodleIcon className="w-14 h-14 text-red-500 animate-bounce" />
            <HeartDoodleIcon className="w-10 h-10 text-pink-500 animate-pulse" />
          </div>
          <p className="mt-10 text-lg font-handwriting-body text-foreground/70">
              P.S. You don't really need to RSVP, this is just me being extra!
          </p>
        </div>
      </div>

      <footer className="w-full pt-4 text-center font-handwriting-body text-sm text-foreground/60 relative z-10">
        <p>Made with all love, just for you. &hearts;</p>
        <p>&copy; {new Date().getFullYear()} Your, Not So Secret Admirer </p>
        <p>~Skittles</p>
        <p>27.05.25</p>
      </footer>
    </section>
  );
}
