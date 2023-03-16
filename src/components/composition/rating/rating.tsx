/* eslint-disable react/no-array-index-key */
import { Flex } from '../../core';
import { classnames } from '../../../utils/classnames';
import type { RatingProps } from './rating.type';

const ICONS = {
  star: 'M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2l3 6.3 7 1-5 4.8 1.2 6.9-6.2-3.3Z',
  heart: 'M19.5 13.6 12 21l-7.5-7.4A5 5 0 1 1 12 7a5 5 0 1 1 7.5 6.6',
} as const;

const rating = ({
  rating,
  showLabel,
  color = 'warning',
  size = 'md',
  icon = 'star',
  ...props
}: RatingProps) => {
  return (
    <Flex
      gap="sm"
      items="center"
      className={`rating rating__${size} u_${color}`}
      role="complementary"
      {...props}
    >
      <svg viewBox={`0 0 ${24 * 5} 24`} aria-hidden="true" focusable="false">
        {Array(5)
          .fill('')
          .map((_, index) => {
            const active = rating > index;
            const starStyle = active
              ? { fill: 'var(--color-shared-9)' }
              : { stroke: 'var(--color-shared-9)', fill: 'transparent' };
            return (
              <path
                key={index}
                {...starStyle}
                transform={`translate(${index * 24}, 0)`}
                d={ICONS[icon]}
              />
            );
          })}
      </svg>

      <figcaption
        className={classnames('u_font-medium', {
          'u_visually-hidden': !showLabel,
        })}
      >
        {rating} star{rating > 1 && 's'} out of 5
      </figcaption>
    </Flex>
  );
};

export default rating;
