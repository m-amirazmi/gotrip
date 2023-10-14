import type { Meta, StoryObj } from "@storybook/react";
import SliderDots from "./slider-dots";

const meta = {
  title: "Shared/SliderDots",
  component: SliderDots,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof SliderDots>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    length: 4,
    selected: 1,
  },
};
