import type { SVGProps } from 'react';

const award = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
    <path d="m12 15 3.4 5.9 1.6-3.2 3.6.2-3.4-5.9M6.8 12l-3.4 5.9 3.6-.2 1.6 3.2L12 15" />
  </svg>
);

export default award;
