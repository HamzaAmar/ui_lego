/* eslint-disable no-underscore-dangle */
/* eslint-disable react/destructuring-assignment */
import { Children, forwardRef, type ReactNode } from 'react';
import { Badge } from '..';
import { initials } from './avatar-utils';
import { AvatarProvider, useAvatarContext } from './context';

import type {
  AvatarBadgeProps,
  AvatarProps,
  AvatarGroupProps,
} from './avatar.type';
import useBoolean from '../../../hooks/useBoolean';
import { ForwardRefComponent } from '../../../types/polymorphic';

/*  
=================================================================================
Avatar Group Component
=================================================================================
*/

const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  (
    {
      size = 'md',
      limit,
      variant = 'stack',
      color = 'primary',
      corner = 'full',
      children,
    },
    forwardedRef,
  ) => {
    const restNumbers =
      limit && limit < Children.count(children)
        ? Children.count(children) - limit
        : null;

    const max =
      limit && limit < Children.count(children)
        ? limit
        : Children.count(children);

    const contextProps = { color, corner, size };

    return (
      <div
        ref={forwardedRef}
        className={`avatar-group avatar-group__${variant}`}
      >
        <AvatarProvider {...contextProps}>
          {Array.from(new Array(max)).map((_, index) => {
            return Children.toArray(children)[index];
          })}
        </AvatarProvider>

        {restNumbers && (
          <div
            className={`avatar avatar__${size} u_corner__${corner} u_${color} u_center`}
          >
            <span className="avatar--letter">{restNumbers}</span>{' '}
            <span className="avatar--letter avatar--plus">+</span>
          </div>
        )}
      </div>
    );
  },
);

// AvatarGroup.displayName = 'Avatar Group';

// TODO: Make IT Generic

/*  
=================================================================================
Avatar Badge Component
=================================================================================
*/

const AvatarBadge = ({ position = 'end-end', ...rest }: AvatarBadgeProps) => {
  return (
    <span className={`avatar-badge avatar-badge__${position}`}>
      <Badge {...rest} />
    </span>
  );
};

/*  
=================================================================================
Avatar Component
=================================================================================
*/

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  (props, forwardedRef) => {
    const { state: error, handleTrue } = useBoolean();
    const context = useAvatarContext();
    const {
      size = context?.size ?? 'md',
      title,
      children,
      color = context?.color ?? 'primary',
      corner = context?.corner ?? 'full',
      ...rest
    } = props;

    const avatarFallbackText = (
      <span role="img" className="avatar--letter" aria-label={title}>
        {initials(title)}
      </span>
    );
    let content: ReactNode;
    if (props.variant === 'icon') {
      content = props.icon ? (
        <span className="avatar--icon">{props.icon}</span>
      ) : null;
    } else {
      content =
        props.image && !error ? (
          <img
            onError={handleTrue}
            className="avatar--image"
            src={props.image}
            alt={title}
          />
        ) : null;
    }

    const avatarContent = content ?? avatarFallbackText;

    return (
      <div
        className={`avatar avatar__${size} l_corner-${corner} u_${color} u_center`}
        ref={forwardedRef}
        {...rest}
      >
        {avatarContent}
        {children}
      </div>
    );
  },
) as ForwardRefComponent<'div', AvatarProps> & {
  Group: typeof AvatarGroup;
  Badge: typeof AvatarBadge;
};

Avatar.displayName = 'Avatar';

Avatar.Group = AvatarGroup;
Avatar.Badge = AvatarBadge;

export default Avatar;
