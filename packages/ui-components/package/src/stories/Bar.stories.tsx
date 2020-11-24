import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Bar } from "..";

export default {
  title: "Bar",
  component: Bar,
} as Meta;

export const Primary: Story = () => <Bar />;
