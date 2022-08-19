import React from 'react';
import Checkbox from '.';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

function Template(args) {
  return <Checkbox {...args} />;
}

export const CheckboxStory = Template.bind({});
CheckboxStory.args = {
  id: 'checkbox',
  label: 'Remember me',
  disabled: false,
};

CheckboxStory.story = {
  name: 'Checkbox',
};
