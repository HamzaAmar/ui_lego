import { SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="'0 0 24 24'"
    {...props}
  >
    <path d="M21 12c0 5-4 9-9 9m9-9c0-5-4-9-9-9m9 9h-2m-7 9c-5 0-9-4-9-9m9 9v-2m-9-7c0-5 4-9 9-9m-9 9h2m7-9v2M8 16l2-6 6-2-2 6-6 2Z" />
  </svg>
);

export default SvgComponent;
