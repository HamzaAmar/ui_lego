import type { SVGProps } from 'react';

const search = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm11 4-6-6" />
  </svg>
);

export default search;
