import type { Meta, StoryObj } from "@storybook/react";
import Usp from "./usp";
import content from "../../content/home.content.json";

const meta = {
  title: "Shared/Usp",
  component: Usp,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Usp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { content: content.usp },
};
