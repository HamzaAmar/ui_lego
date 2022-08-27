import type { SVGProps } from 'react';

const gift = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M20 8H4a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h16c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1Zm-8 0v13" />
    <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7m2.5-4a2.5 2.5 0 1 1 0-5c1 0 2 .5 2.7 1.3.8 1 1.4 2.2 1.8 3.7.4-1.5 1-2.8 1.8-3.7.8-.8 1.7-1.3 2.7-1.3a2.5 2.5 0 0 1 0 5" />
  </svg>
);

export default gift;
