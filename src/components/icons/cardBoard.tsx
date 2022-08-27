import type { SVGProps } from 'react';

const cardBoard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M3 7v8.5A2.5 2.5 0 0 0 5.5 18h1A3 3 0 0 0 9 16.9l1.5-2a2 2 0 0 1 3.2 0l1.5 2a3 3 0 0 0 2.3 1.1h1.1a2.5 2.5 0 0 0 2.5-2.5V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v0Z" />
    <path d="M8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
  </svg>
);

export default cardBoard;
