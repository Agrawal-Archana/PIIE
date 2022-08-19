import React from 'react';
import { Button, ButtonVariants, ButtonSizes } from '.';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    size: {
      options: ButtonSizes,
      control: { type: 'select' },
    },
  },
};

function Template(args) {
  return <Button {...args} />;
}

export const Primary = Template.bind({});
Primary.args = {
  id: 'primary-btn',
  label: 'Primary Button',
  disabled: false,
  variant: ButtonVariants.PRIMARY,
  size: ButtonSizes.SMALL,
};

export const Secondary = Template.bind({});
Secondary.args = {
  id: 'secondary-btn',
  label: 'Secondary Button',
  disabled: false,
  variant: ButtonVariants.SECONDARY,
  size: ButtonSizes.SMALL,
};

export const SecondaryGray = Template.bind({});
SecondaryGray.args = {
  id: 'secondary-gray-btn',
  label: 'Secondary Gray Button',
  disabled: false,
  variant: ButtonVariants.SECONDARY_GRAY,
  size: ButtonSizes.SMALL,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  id: 'tertiary-btn',
  label: 'Tertiary Button',
  disabled: false,
  variant: ButtonVariants.TERTIARY,
  size: ButtonSizes.SMALL,
};

export const TertiaryGray = Template.bind({});
TertiaryGray.args = {
  id: 'tertiary-gray-btn',
  label: 'Tertiary Gray Button',
  disabled: false,
  variant: ButtonVariants.TERTIARY_GRAY,
  size: ButtonSizes.SMALL,
};

export const Link = Template.bind({});
Link.args = {
  id: 'link-btn',
  label: 'Link Button',
  disabled: false,
  variant: ButtonVariants.LINK,
  size: ButtonSizes.SMALL,
};

export const LinkGray = Template.bind({});
LinkGray.args = {
  id: 'link-gray-btn',
  label: 'Link Gray Button',
  disabled: false,
  variant: ButtonVariants.LINK_GRAY,
  size: ButtonSizes.SMALL,
};

SecondaryGray.story = {
  name: 'Secondary Gray',
};

TertiaryGray.story = {
  name: 'Tertiary Gray',
};

LinkGray.story = {
  name: 'Link Gray',
};
