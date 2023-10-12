import type { Meta, StoryObj } from "@storybook/react";
import HeroSearch from "./hero-search";
import { hero as content } from "@/content/home.content.json";

const meta = {
  title: "Shared/HeroSearch",
  component: HeroSearch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof HeroSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: content["hero-search"],
  },
};
