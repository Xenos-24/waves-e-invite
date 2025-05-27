
"use client";

import { useState, useEffect } from 'react';
import { TrendingUp } from 'lucide-react'; // Changed from ArrowUpRight
import { cn } from '@/lib/utils';

export function MusicHintArrow() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000); // Arrow disappears after 5 seconds

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={cn(
        "fixed top-16 right-5 z-50", // Positioned below the music button and centered
        "animate-bounce" 
      )}
      aria-hidden="true"
    >
      <TrendingUp className="h-8 w-8 text-primary-foreground" /> {/* Changed icon type */}
    </div>
  );
}
