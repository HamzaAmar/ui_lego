import type { SVGProps } from 'react';

const lock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M17 11H7a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2Z" />
    <path d="M12 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-4-6V7a4 4 0 0 1 8 0v4" />
  </svg>
);

export default lock;
