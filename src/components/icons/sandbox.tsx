import { SVGProps } from 'react';

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
    <path d="M20 7.5v9l-4 2.3m4-11.3-4-2.3m4 2.3L12 12m4 6.8L12 21m4-2.3V14l4-2m-8 9-4-2.3m4 2.3v-9m-4 6.8-4-2.3v-9m4 11.3V14l-4-2m0-4.5 4-2.3M4 7.5l8 4.5M8 5.2 12 3l4 2.3m-8 0 4 2.2 4-2.3" />
  </svg>
);

export default SvgComponent;
