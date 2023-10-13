import type { Meta, StoryObj } from "@storybook/react";
import Card from "./card";

const meta = {
  title: "Shared/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    image: {
      src: "https://imageupload.io/ib/YDFS8RwSMhB34SF_1697204970.webp",
      alt: "demo",
    },
    title: "Best Price Guarantee",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    shadow: true,
  },
};
