
"use client";

import type { SVGProps } from 'react';

export function HeartDoodleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20.42 4.58a5.4 5.4 0 0 0-7.64 0L12 5.38l-.78-.79a5.4 5.4 0 0 0-7.64 0C2.29 5.87 2 7.58 2 9.05c0 2.85 2.15 5.05 5.28 7.46L12 21l4.72-4.5c3.13-2.4 5.28-4.6 5.28-7.45 0-1.47-.29-3.18-1.58-4.47z" 
        style={{
          strokeDasharray: '100',
          strokeDashoffset: '100',
          animation: 'draw 1s ease-out forwards 0.5s',
        }}
      />
      <style jsx>{`
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </svg>
  );
}
