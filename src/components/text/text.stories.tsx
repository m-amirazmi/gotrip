import type { Meta, StoryObj } from "@storybook/react";
import Text from "./text";

const meta = {
  title: "Shared/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tag: "h1",
    children: "This is H1",
  },
};
