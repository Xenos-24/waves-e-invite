
import Image from 'next/image';
import { EasterEgg } from '@/components/EasterEgg';
import { HeartDoodleIcon } from '@/components/icons/HeartDoodleIcon';

const memories = [
  { src: "/personal-memories/us-with-beer.jpg", alt: "Us enjoying a drink together", caption: "We clink, we drink, we pinky-swear and never sink.", dataAiHint: "couple beer" },
  { src: "/personal-memories/us-dancing.jpg", alt: "Us dancing together", caption: "When, in the moment, time slowed and, nothing mattered.", dataAiHint: "couple dance" },
  { src: "/personal-memories/twirling-her.jpg", alt: "Twirling her around", caption: "You twirl, I fall — over and over.", dataAiHint: "couple twirl" },
];

export function MemoryLaneSection() {
  return (
    <section 
      id="memory-lane" 
      className="section-min-height relative py-16 px-4"
    >
      {/* Scattered Flowers - Memory Lane Section */}
      <Image
        src="/bunch-white-big.png"
        alt="A large bunch of white flowers"
        width={200}
        height={220}
        className="absolute top-[5%] left-[2%] w-28 h-32 md:w-40 md:h-44 transform -rotate-[8deg] opacity-75 -z-10"
      />
      <Image
        src="/white.png"
        alt="A small white flower"
        width={80}
        height={80}
        className="absolute bottom-[20%] right-[3%] w-12 h-12 md:w-14 md:h-14 transform rotate-[15deg] opacity-80 -z-10"
      />
       <Image
        src="/blue.png"
        alt="A small blue flower"
        width={100}
        height={100}
        className="absolute top-[50%] right-[5%] w-16 h-16 md:w-20 md:h-20 transform -rotate-[25deg] opacity-70 -z-10"
      />

      <div className="relative z-10">
        <h2 className="text-4xl md:text-6xl font-handwriting-header text-center mb-12 text-primary-foreground">
          A Few of Our Sweet Moments
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center justify-center">
          {memories.map((memory, index) => (
            <div 
              key={index} 
              className="polaroid" 
              style={{ transform: `rotate(${index % 2 === 0 ? (index+1)*2 : (index+1)*-2}deg)` }}
            >
              <Image 
                src={memory.src} 
                alt={memory.alt} 
                // Adjust width/height based on your new images' aspect ratios
                // For now, keeping a generic size, assuming portrait/landscape variation
                width={index === 1 ? 400 : 300} 
                height={index === 1 ? 300 : 400}
                className="w-full h-auto object-cover"
                data-ai-hint={memory.dataAiHint} // Updated hints
              />
              <p className="caption">{memory.caption}</p>
            </div>
          ))}
        </div>
        <div className="absolute bottom-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 opacity-50">
          <HeartDoodleIcon className="w-12 h-12 text-pink-400 transform rotate-12" />
        </div>
        <div className="absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2 opacity-50">
           <HeartDoodleIcon className="w-16 h-16 text-pink-300 transform -rotate-6" /> {/* Changed color slightly for variety */}
        </div>
        <div className="mt-16 text-center">
          <EasterEgg />
        </div>
      </div>
    </section>
  );
}
