import type { SVGProps } from 'react';

const circleSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M9.5 16a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z" />
    <path d="M19 10h-7a2 2 0 0 0-2 2v7c0 1.1.9 2 2 2h7a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2Z" />
  </svg>
);

export default circleSquare;
