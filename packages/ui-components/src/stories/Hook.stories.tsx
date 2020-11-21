import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Hook } from "..";

export default {
  title: "Hook",
  component: Hook,
} as Meta;

export const Primary: Story = () => <Hook />;
