import type { SVGProps } from 'react';

const play = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M10 14 21 3m0 0-6.5 18a.6.6 0 0 1-1 0L10 14l-7-3.5a.6.6 0 0 1 0-1L21 3Z" />
  </svg>
);

export default play;
