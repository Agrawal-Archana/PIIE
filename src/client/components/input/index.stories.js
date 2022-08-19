import React from 'react';
import Input from '.';
import Icon from '../icon';
import { IconTypes, IconSizes, IconColors } from '../icon/icons-constants';

export default {
  title: 'Components/Input',
  component: Input,
};

function Template(args) {
  return <Input {...args} />;
}

export const InputStory = Template.bind({});
InputStory.args = {
  id: 'input',
  label: 'Email',
  disabled: false,
  placeholder: 'olivia@untitledui.com',
  hintText: 'This is a hint text to help user.',
};

InputStory.story = {
  name: 'Input',
};

export const InputSuffixIconStory = Template.bind({});
InputSuffixIconStory.args = {
  id: 'input',
  label: 'Email',
  disabled: false,
  placeholder: 'olivia@untitledui.com',
  hintText: 'This is a hint text to help user.',
  suffixIcon: <Icon
    type={IconTypes.HELP_CIRCLE}
    size={IconSizes.MEDIUM}
    color={IconColors.GRAY_500}
  />,
};

InputSuffixIconStory.story = {
  name: 'Input Suffix Icon',
};

export const InputPrefixIconStory = Template.bind({});
InputPrefixIconStory.args = {
  id: 'input',
  label: 'Email',
  disabled: false,
  placeholder: 'olivia@untitledui.com',
  hintText: 'This is a hint text to help user.',
  prefixIcon: <Icon type={IconTypes.MAIL} size={IconSizes.MEDIUM} color={IconColors.GRAY_500} />,
};

InputPrefixIconStory.story = {
  name: 'Input Prefix Icon',
};
