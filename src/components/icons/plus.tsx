import type { SVGProps } from 'react';

const plus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1}
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M12 5v14m-7-7h14" />
  </svg>
);

export default plus;
