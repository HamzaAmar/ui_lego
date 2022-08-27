import type { SVGProps } from 'react';

const device = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M7 20h10m-8-4v4m6-4v4m-6-8V8m3 4v-1m3 1v-2M4 4h16c.6 0 1 .4 1 1v10c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V5c0-.6.4-1 1-1Z" />
  </svg>
);

export default device;
