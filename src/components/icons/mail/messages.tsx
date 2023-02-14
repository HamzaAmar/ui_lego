import React, { type SVGProps } from 'react';

interface MessagesProps extends SVGProps<SVGSVGElement> {
  status: 'off' | 'on';
}
const Messages = ({ status, ...rest }: MessagesProps) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...rest}
  >
    {status === 'off' ? (
      <path d="M14 15v2a1 1 0 0 1-1 1H6l-3 3V11a1 1 0 0 1 1-1h2m15 4-3-3h-7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v10Z" />
    ) : (
      <path d="m3 3 18 18M10 6V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v10l-3-3h-3m-1 4v2a1 1 0 0 1-1 1H6l-3 3V11a1 1 0 0 1 1-1h2m5 1a1 1 0 0 1-1-1l1 1Z" />
    )}
  </svg>
);

export default Messages;
