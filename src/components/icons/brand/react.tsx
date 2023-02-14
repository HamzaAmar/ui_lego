import React, { type SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M6.4 9C3.7 9.7 2 10.8 2 12.2c0 2 4.4 3.8 9.8 3.8l2-.1m-4 0c-.4-.6-.8-1.1-1.1-1.8C5.9 9.2 5.2 4.3 7 3.2c1.2-.7 3 .3 5 2.3m-5.6 9.9C5.7 18 6 20 7 20.8c1.8 1 5.4-2 8-6.8l1-2m-4 6.5c2 2 3.8 3 5 2.3 1.8-1.1 1.1-6-1.7-10.9-.3-.7-.7-1.2-1.1-1.8m3.5 6.9c2.6-.7 4.3-1.8 4.3-3.2 0-2-4.4-3.8-9.8-3.8h-2M8 12l1-2c2.6-4.8 6.2-7.9 8-6.8 1.1.7 1.3 2.7.6 5.4M12.3 12h0l-.3.3a.3.3 0 0 1-.3-.3l.3-.3h0l.2.3" />
  </svg>
);

export default SvgComponent;