
"use client";

import { useState, useEffect, useRef } from 'react';
import { Music2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function MusicToggleButton() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Ensure this only runs on the client
    audioRef.current = new Audio('/Xxv-Broke.mp3');
    audioRef.current.loop = true;

    // Cleanup function
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = ''; 
        audioRef.current.load();
        audioRef.current = null;
      }
    };
  }, []); // Empty dependency array ensures this runs once on mount

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.error("Error attempting to play audio:", error);
          // Optionally, update UI to show error or disable button
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleMusic}
      className="fixed top-4 right-4 z-50 rounded-full bg-card/70 p-2 text-primary-foreground shadow-md hover:bg-card focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 backdrop-blur-sm"
      aria-label={isPlaying ? "Pause music" : "Play music"}
    >
      {isPlaying ? (
        <Music2 className="h-5 w-5" /> 
      ) : (
        <VolumeX className="h-5 w-5" />
      )}
    </Button>
  );
}
