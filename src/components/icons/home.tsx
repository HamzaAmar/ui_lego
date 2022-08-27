import type { SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6M5 12H3l9-9 9 9h-2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7Z" />
  </svg>
);

export default SvgComponent;
