// import { classnames } from '../../../utils/classnames';

import type { ProgressCircleProps, ProgressBarProps } from './progress.type';
import { Flex, Text } from '..';

// const sizes = {
//   xs: { width: 24 },
//   sm: { width: 40 },
//   md: { width: 56 },
//   lg: { width: 72 },
//   xl: { width: 88 },
// } as const;

export const ProgressCircle = ({
  size = 'md',
  value,
  label,
  color = 'primary',
  ...rest
}: ProgressCircleProps) => {
  return (
    <svg
      viewBox="0 0 36 36"
      role="progressbar"
      className={`progress-circle progress__${size} u_${color}`}
      fill={color}
      width="2.5em"
      {...rest}
    >
      <path
        className="circle-chart--stroke"
        d="M18 2.0845
  a 15.9155 15.9155 0 0 1 0 31.831
  a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path
        className="circle-chart--progress"
        strokeWidth="3px"
        strokeDasharray={`${value} 100`}
        d="M18 2.0845
  a 15.9155 15.9155 0 0 1 0 31.831
  a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text
        x="18"
        y="20.35"
        textAnchor="middle"
        fill="var(--slate-12)"
        fontSize=".6em"
      >
        {value} %
      </text>
    </svg>
  );
};

export const ProgressBar = ({
  label,
  value,
  color = 'primary',
  size = 'sm',
}: ProgressBarProps) => {
  return (
    <Flex items="end" direction="column" className={`u_${color}`}>
      <Text color="slate" contrast="low" as="span">
        {value} %
      </Text>
      <div
        role="progressbar"
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={value}
        aria-label={label}
        className={`progress-bar progress__${size}`}
      >
        <div className="progress-bar--inner" style={{ width: `${value}%` }} />
      </div>
    </Flex>
  );
};
