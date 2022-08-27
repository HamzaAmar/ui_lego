import type { SVGProps } from 'react';

const view360 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
    <path d="M12 21c2.2 0 4-4 4-9s-1.8-9-4-9-4 4-4 9 1.8 9 4 9Z" />
    <path d="M3 12c0 2.2 4 4 9 4s9-1.8 9-4-4-4-9-4-9 1.8-9 4Z" />
  </svg>
);

export default view360;
