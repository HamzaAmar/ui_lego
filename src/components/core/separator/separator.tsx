/* eslint-disable no-underscore-dangle */
import { classnames } from '../../../utils/classnames';
import type { SeparatorProps } from './separator.type';

const separator = ({
  children,
  direction = 'horizontal',
  position,
}: SeparatorProps) => {
  const _className = classnames(
    `separator separator__${direction} separator__${position}`,
  );

  return (
    <div className={_className}>
      {Boolean(children) && (
        <span className="separator--content">{children}</span>
      )}
    </div>
  );
};

export default separator;
