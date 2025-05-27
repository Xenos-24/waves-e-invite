
import type { SVGProps } from 'react';

export function SparkleDoodleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2L14.09 7.91L20 10L14.09 12.09L12 18L9.91 12.09L4 10L9.91 7.91L12 2Z" />
      <path d="M20 12L22 14.09L18 20L16.09 14.09L10 22L12.09 16.09L6 14L12.09 9.91" opacity="0.6" />
    </svg>
  );
}

    