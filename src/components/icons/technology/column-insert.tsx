import React, { type SVGProps } from 'react';

interface ColumnInsertProps extends SVGProps<SVGSVGElement> {
  direction: 'left' | 'right' | 'top' | 'bottom';
}

const rotations = {
  left: 'rotate(0)',
  top: 'rotate(90)',
  right: 'rotate(180)',
  bottom: 'rotate(270)',
};

const columnInsert = ({ direction, ...props }: ColumnInsertProps) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    transform={rotations[direction]}
    fill="none"
    {...props}
  >
    <path d="M5 12h4m-2-2v4m7-10h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z" />
  </svg>
);

export default columnInsert;
