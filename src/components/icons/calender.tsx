import type { SVGProps } from 'react';

const calender = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M18 5H6a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm-2-2v4M8 3v4m-4 4h16" />
    <path d="M10 15H8v2h2v-2Z" />
  </svg>
);

export default calender;
