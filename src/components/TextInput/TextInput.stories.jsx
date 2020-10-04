import React from 'react';
import TextInput from './TextInput';

export default {
  title: 'Atom/TextInput',
  component: TextInput
};

const Template = (args) => <TextInput {...args} />;

export const LongInput = Template.bind({});
LongInput.args = {
  size: 'long'
};

export const DefaultInput = Template.bind({});
