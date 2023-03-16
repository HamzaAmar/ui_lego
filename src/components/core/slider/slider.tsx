import * as SliderRadix from '@radix-ui/react-slider';
import { classnames } from '../../../utils/classnames';
import { Flex } from '..';

import type {
  SliderRootProps,
  SliderThumbProps,
  SliderTrackProps,
} from './slider.type';

/*
   ======================================================================================================   
    Slider Thumb Section
   ======================================================================================================  
*/
export const Thumb = ({
  size = 'md',
  variant = 'solid',
  corner = 'full',
  className,
  ...rest
}: SliderThumbProps) => {
  const _className = classnames(
    `slider--thumb slider--thumb__size-${size} slider--thumb__${variant} slider--thumb__${corner}`,
    { className },
  );
  return <SliderRadix.Thumb className={_className} {...rest} />;
};

export const Track = ({ ...rest }: SliderTrackProps) => {
  return (
    <SliderRadix.Track className="slider--track" {...rest}>
      <SliderRadix.Range className="slider--range" />
    </SliderRadix.Track>
  );
};

export const Slider = ({
  color = 'primary',
  label,
  size = 'md',
  sliderPrefix,
  SliderSuffix,
  children,
  ...rest
}: SliderRootProps) => {
  const prefixContent = sliderPrefix && <span>{sliderPrefix}</span>;
  const suffixContent = SliderSuffix && <span>{SliderSuffix}</span>;

  return (
    <Flex gap="sm" items="center">
      {prefixContent}

      <SliderRadix.Root
        className={`slider slider__${size} u_${color} `}
        {...rest}
      >
        {children}
      </SliderRadix.Root>
      {suffixContent}
    </Flex>
  );
};

Slider.Track = Track;
Slider.Thumb = Thumb;
