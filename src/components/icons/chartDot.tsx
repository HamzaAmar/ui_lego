import type { SVGProps } from 'react';

const chartDot = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M3 3v18h18" />
    <path d="M9 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-3.8-6.4 2.3 2.9m2.5-.2 3-4.6" />
  </svg>
);

export default chartDot;
