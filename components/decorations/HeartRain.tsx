
"use client";

import { useState, useEffect } from 'react';
import type { CSSProperties } from 'react';
import { HeartDoodleIcon } from '@/components/icons/HeartDoodleIcon';

type HeartStyle = {
  id: string;
  style: CSSProperties;
};

const NUM_HEARTS = 20;

export function HeartRain() {
  const [heartStyles, setHeartStyles] = useState<HeartStyle[]>([]);

  useEffect(() => {
    const generateStyles = () => {
      const newStyles: HeartStyle[] = [];
      for (let i = 0; i < NUM_HEARTS; i++) {
        newStyles.push({
          id: `bg-heart-${i}`,
          style: {
            width: `${Math.random() * 2.5 + 1}rem`, // Range 1rem to 3.5rem
            height: `${Math.random() * 2.5 + 1}rem`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.3 + 0.2, // Range 0.2 to 0.5
            transform: `rotate(${Math.random() * 360}deg)`,
            animationDelay: `${Math.random() * 2}s`,
          },
        });
      }
      return newStyles;
    };
    setHeartStyles(generateStyles());
  }, []); // Empty dependency array ensures this runs once on mount (client-side)

  if (heartStyles.length === 0) {
    // Don't render on server or before styles are generated client-side
    return null;
  }

  return (
    <div className="absolute inset-0 z-[1] overflow-hidden" aria-hidden="true"> {/* Changed z-index from -z-10 to z-[1] */}
      {heartStyles.map((item) => (
        <HeartDoodleIcon
          key={item.id}
          className="absolute text-pink-300 animate-pulse"
          style={item.style}
        />
      ))}
    </div>
  );
}
