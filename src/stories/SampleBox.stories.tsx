import React from "react";
import { PropTypes } from "../components/SampleBox";
import { SampleBox } from "../components/SampleBox";
import {Meta, Story} from "@storybook/react";

export default {
  title: "Example/SampleBox",
  component: SampleBox,
};

const Template: Story<PropTypes> = (args) => <SampleBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "hello test",
};