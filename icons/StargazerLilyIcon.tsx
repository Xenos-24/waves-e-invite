
import type { SVGProps } from 'react';

export function StargazerLilyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Petals */}
      <path d="M50 10 C 30 30, 30 70, 50 90" fill="#F8BBD0" stroke="#E91E63" strokeWidth="1.5" transform="rotate(0 50 50)" />
      <path d="M50 10 C 70 30, 70 70, 50 90" fill="#F8BBD0" stroke="#E91E63" strokeWidth="1.5" transform="rotate(0 50 50)" />
      
      <path d="M50 10 C 30 30, 30 70, 50 90" fill="#F8BBD0" stroke="#E91E63" strokeWidth="1.5" transform="rotate(60 50 50)" />
      <path d="M50 10 C 70 30, 70 70, 50 90" fill="#F8BBD0" stroke="#E91E63" strokeWidth="1.5" transform="rotate(60 50 50)" />

      <path d="M50 10 C 30 30, 30 70, 50 90" fill="#F8BBD0" stroke="#E91E63" strokeWidth="1.5" transform="rotate(120 50 50)" />
      <path d="M50 10 C 70 30, 70 70, 50 90" fill="#F8BBD0" stroke="#E91E63" strokeWidth="1.5" transform="rotate(120 50 50)" />

      <path d="M50 10 C 30 30, 30 70, 50 90" fill="#F48FB1" stroke="#C2185B" strokeWidth="1.5" transform="rotate(30 50 50) scale(0.9)" />
      <path d="M50 10 C 70 30, 70 70, 50 90" fill="#F48FB1" stroke="#C2185B" strokeWidth="1.5" transform="rotate(30 50 50) scale(0.9)" />
      
      <path d="M50 10 C 30 30, 30 70, 50 90" fill="#F48FB1" stroke="#C2185B" strokeWidth="1.5" transform="rotate(90 50 50) scale(0.9)" />
      <path d="M50 10 C 70 30, 70 70, 50 90" fill="#F48FB1" stroke="#C2185B" strokeWidth="1.5" transform="rotate(90 50 50) scale(0.9)" />

      <path d="M50 10 C 30 30, 30 70, 50 90" fill="#F48FB1" stroke="#C2185B" strokeWidth="1.5" transform="rotate(150 50 50) scale(0.9)" />
      <path d="M50 10 C 70 30, 70 70, 50 90" fill="#F48FB1" stroke="#C2185B" strokeWidth="1.5" transform="rotate(150 50 50) scale(0.9)" />

      {/* Center */}
      <circle cx="50" cy="50" r="10" fill="#FFEB3B" stroke="#FBC02D" strokeWidth="1.5" />
      
      {/* Stamens */}
      <line x1="50" y1="50" x2="50" y2="30" stroke="#AD1457" strokeWidth="1.5" />
      <circle cx="50" cy="30" r="3" fill="#AD1457" />
      <line x1="50" y1="50" x2="65" y2="38" stroke="#AD1457" strokeWidth="1.5" />
      <circle cx="65" cy="38" r="3" fill="#AD1457" />
      <line x1="50" y1="50" x2="35" y2="38" stroke="#AD1457" strokeWidth="1.5" />
      <circle cx="35" cy="38" r="3" fill="#AD1457" />
    </svg>
  );
}

    