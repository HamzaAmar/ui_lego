import React, { type SVGProps } from 'react';

const octagonOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="m7.6 3.7.4-.4c.2-.2.4-.3.7-.3h6.6c.3 0 .5.1.7.3L20.7 8c.2.2.3.4.3.7v6.6c0 .3-.1.5-.3.7l-.3.4m-2 2L16 20.6a1 1 0 0 1-.7.3H8.7a1 1 0 0 1-.7-.3L3.3 16a1 1 0 0 1-.3-.7V8.7c0-.3.1-.5.3-.7l2.4-2.3M3 3l18 18" />
  </svg>
);

export default octagonOff;
