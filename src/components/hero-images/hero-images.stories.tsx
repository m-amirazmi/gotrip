import type { Meta, StoryObj } from "@storybook/react";
import HeroImages from "./hero-images";
import { hero as content } from "../../content/home.content.json";

const meta = {
  title: "Section/Hero/HeroImages",
  component: HeroImages,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof HeroImages>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: content["hero-images"],
  },
};
