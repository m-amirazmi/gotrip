import type { Meta, StoryObj } from "@storybook/react";
import BestSeller from "./best-seller";

const meta = {
  title: "Shared/BestSeller",
  component: BestSeller,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof BestSeller>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
