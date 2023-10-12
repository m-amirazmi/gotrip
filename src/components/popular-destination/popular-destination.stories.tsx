import type { Meta, StoryObj } from "@storybook/react";
import PopularDestination from "./popular-destination";

const meta = {
  title: "Shared/PopularDestination",
  component: PopularDestination,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof PopularDestination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
