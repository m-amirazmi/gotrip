import type { Meta, StoryObj } from "@storybook/react";
import Title from "./title";

const meta = {
  title: "Shared/Title",
  component: Title,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Best Seller",
    subtitle: "Interdum et malesuada fames ac ante ipsum",
  },
};
