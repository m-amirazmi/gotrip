import type { Meta, StoryObj } from "@storybook/react";
import Reviews from "./reviews";

const meta = {
  title: "Shared/Reviews",
  component: Reviews,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Reviews>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
