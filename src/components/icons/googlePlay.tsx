import { SVGProps } from 'react';

const googlePlay = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 9 4.5 20.5m0-17L15 15M4 3.71v16.58a.7.7 0 0 0 1.05.6l14.62-8.41a.55.55 0 0 0 0-.96L5.05 3.1A.7.7 0 0 0 4 3.71Z" />
  </svg>
);

export default googlePlay;
