import type { Meta, StoryObj } from "@storybook/react";
import HeroTitle from "./hero-title";
import { hero as content } from "../../content/home.content.json";

const meta = {
  title: "Section/Hero/HeroTitle",
  component: HeroTitle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof HeroTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: content["hero-title"],
  },
};
