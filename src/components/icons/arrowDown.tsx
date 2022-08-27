import type { SVGProps } from 'react';

const arrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 5v14m6-6-6 6m-6-6 6 6" />
  </svg>
);

export default arrowDown;
