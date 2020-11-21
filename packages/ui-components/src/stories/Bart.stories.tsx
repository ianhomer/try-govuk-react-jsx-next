import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Bar } from "..";

export default {
  title: "Bar",
  component: Bar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

export const Primary: Story = () => <Bar />;
