import type { SVGProps } from 'react';

const target = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0-18v2m0 16v2m8-10h2M2 12h2" />
  </svg>
);

export default target;
