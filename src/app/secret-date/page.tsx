
import { SparkleDoodleIcon } from '@/components/icons/SparkleDoodleIcon';
import { HeartDoodleIcon } from '@/components/icons/HeartDoodleIcon';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function SecretDatePage() {

  // Choose one idea, or list them as options as in the prompt.
  // For simplicity, using the prompt's slash-separated string.
  const nextDateSpoiler = `a… 
  *drum roll pleaseee*...... 
  movie date / get-to-know-you date / and a cuddle session!!!💕`;


  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background p-4 text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <SparkleDoodleIcon
            key={`bg-sparkle-${i}`}
            className="absolute text-primary animate-pulse"
            style={{
              width: `${Math.random() * 3 + 1}rem`,
              height: `${Math.random() * 3 + 1}rem`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
         {[...Array(15)].map((_, i) => (
          <HeartDoodleIcon
            key={`bg-heart-${i}`}
            className="absolute text-pink-300"
            style={{
              width: `${Math.random() * 4 + 2}rem`,
              height: `${Math.random() * 4 + 2}rem`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.1,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          />
        ))}
      </div>

      <div className="scrapbook-element z-10 p-8 md:p-16 bg-card/90 backdrop-blur-md max-w-2xl w-full" style={{transform: 'rotate(1deg)'}}>
        <div className="flex justify-center mb-6">
          <SparkleDoodleIcon className="w-16 h-16 text-yellow-400 transform -rotate-12" />
          <h1 className="text-5xl md:text-7xl font-handwriting-header text-primary-foreground mx-4">
            Congratulations, Love!
          </h1>
          <SparkleDoodleIcon className="w-16 h-16 text-yellow-400 transform rotate-12" />
        </div>
        
        <p className="font-handwriting-body text-3xl md:text-4xl text-foreground/90 my-8">
          I am so proud of you!! *head kiss* 
        </p>
       

        <div className="my-10 p-6 border-2 border-dashed border-accent rounded-lg bg-accent/20 transform rotate-[-2deg]">
            <h2 className="font-handwriting-header text-2xl md:text-3xl text-accent-foreground mb-3">
                Little Spoiler Alert!
            </h2>
            <p className="font-handwriting-body text-xl md:text-2xl text-foreground/80">
                Our next date will be <strong className="text-primary-foreground">{nextDateSpoiler}</strong>
            </p>
        </div>
        
        <p className="font-handwriting-body text-xl text-foreground/70 mt-8">
          I'm already counting down the moments!
        </p>

        <Link href="/" passHref>
          <Button variant="link" className="mt-12 font-handwriting-header text-lg text-primary-foreground hover:text-pink-700">
            &larr; Back to the invitation
          </Button>
        </Link>
      </div>
    </main>
  );
}

    