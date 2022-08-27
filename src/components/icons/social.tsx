import type { SVGProps } from 'react';

const social = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M12 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM5 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm14 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-7-4a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-10v4m-5.3 6.8 2.8-2m7.8 2-2.8-2" />
  </svg>
);

export default social;
