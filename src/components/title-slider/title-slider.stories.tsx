import type { Meta, StoryObj } from "@storybook/react";
import TitleSlider from "./title-slider";
import content from "../../content/home.content.json";

const meta = {
  title: "Shared/TitleSlider",
  component: TitleSlider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof TitleSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { content: content["popular-destinations"] },
};
