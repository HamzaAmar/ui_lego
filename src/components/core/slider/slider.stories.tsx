import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CirclePlus, Minus, Volume, VolumeMute } from '../../icons';
import { Slider } from '.';
import { Flex, Text } from '..';

import type { SliderRootTest, SliderThumbProps } from './slider.type';

export default {
  default: 'Components/Core/Slider',
  component: Slider,
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} />;
const NormalSlider = (props: SliderRootTest) => {
  return (
    <Slider defaultValue={[30]} {...props} label="volume">
      <Slider.Track />
      <Slider.Thumb aria-label="hello" />
    </Slider>
  );
};

const NormalSliderThumb = (props: SliderThumbProps) => {
  return (
    <Slider defaultValue={[55]} label="volume">
      <Slider.Track />
      <Slider.Thumb aria-label="hello" {...props} />
    </Slider>
  );
};

export const SliderColor = () => {
  return (
    <Flex direction="column" gap="md">
      <NormalSlider label="volume" color="success" />
      <NormalSlider label="volume" color="danger" />
      <NormalSlider label="volume" color="warning" />
      <NormalSlider label="volume" color="indigo" />
      <NormalSlider label="volume" color="purple" />
      <NormalSlider label="volume" color="yellow" />
      <NormalSlider label="volume" />
    </Flex>
  );
};

export const SliderDirection = () => {
  return (
    <Flex direction="column" gap="md">
      <NormalSlider orientation="vertical" label="volume" />
      <NormalSlider label="volume" />
    </Flex>
  );
};

export const SliderSize = () => {
  return (
    <Flex items="start" gap="md">
      <Flex items="end" gap="sm">
        <NormalSlider orientation="vertical" size="sm" label="volume" />
        <NormalSlider orientation="vertical" size="md" label="volume" />
        <NormalSlider orientation="vertical" size="lg" label="volume" />
      </Flex>
      <Flex style={{ flex: '1' }} direction="column" gap="xs">
        <NormalSlider size="sm" label="volume" />
        <NormalSlider size="md" label="volume" />
        <NormalSlider size="lg" label="volume" />
      </Flex>
    </Flex>
  );
};

export const SliderPrefixAndSuffix = () => {
  return (
    <Flex direction="column" gap="md">
      <NormalSlider
        label="Increase/decrease Range Number"
        sliderPrefix="0"
        SliderSuffix="100"
      />
      <NormalSlider
        label="volume"
        sliderPrefix={<VolumeMute width="20" />}
        SliderSuffix={<Volume width="20" />}
      />
      <NormalSlider
        label="Font Weight"
        color="warning"
        sliderPrefix={<Text size="xs">A</Text>}
        SliderSuffix={<Text weight="bold">A</Text>}
      />
      <NormalSlider
        sliderPrefix={
          <Flex
            items="center"
            justify="center"
            style={{
              width: '1.5rem',
              height: '1.5rem',
              background: 'var(--indigo-9)',
              color: 'white',
              borderRadius: '.25em',
            }}
          >
            <Minus width="16" />
          </Flex>
        }
        SliderSuffix={
          <Flex
            items="center"
            justify="center"
            style={{
              width: '1.5rem',
              height: '1.5rem',
              background: 'var(--indigo-9)',
              color: 'white',
              borderRadius: '.25em',
            }}
          >
            <CirclePlus width="16" />
          </Flex>
        }
        label="volume"
      />
    </Flex>
  );
};

export const SliderThumbSize = () => {
  return (
    <Flex direction="column" gap="md">
      <NormalSliderThumb size="sm" />
      <NormalSliderThumb size="md" />
      <NormalSliderThumb size="lg" />
    </Flex>
  );
};

export const SliderThumbVariant = () => {
  return (
    <Flex direction="column" gap="md">
      <NormalSliderThumb variant="outline" />
      <NormalSliderThumb variant="solid" />
    </Flex>
  );
};

export const SliderThumbCorner = () => {
  return (
    <Flex direction="column" gap="md">
      <NormalSliderThumb corner="sharp" />
      <NormalSliderThumb corner="2xs" />
      <NormalSliderThumb corner="xs" />
      <NormalSliderThumb corner="sm" />
      <NormalSliderThumb corner="md" />
      <NormalSliderThumb corner="lg" />
      <NormalSliderThumb corner="xl" />
      <NormalSliderThumb corner="2xl" />
      <NormalSliderThumb />
    </Flex>
  );
};

export const Playground = Template.bind({});
