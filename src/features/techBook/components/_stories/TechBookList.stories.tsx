/* eslint-disable no-alert */
import { ArgTypes, Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { TechBookList } from '../TechBookList';
import { techBookFixtures } from './techbook.fixtures';

type MyArgTypes = Partial<
  Record<keyof ComponentProps<typeof TechBookList>, ArgTypes[string]>
>;
const argTypesSetting: MyArgTypes = {};

export default {
  title: 'techBook/TechBookList',
  component: TechBookList,
  argTypes: argTypesSetting,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta;

const Template: Story<ComponentProps<typeof TechBookList>> = ({ ...props }) => {
  return <TechBookList {...props} />;
};

export const Default = Template.bind({});
Default.args = {
  items: techBookFixtures,
};
