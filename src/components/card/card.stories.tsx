import type { Meta, StoryObj } from "@storybook/react";
import Card from "./card";

const meta = {
  title: "Shared/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["icon", "info-portrait", "info-square"],
      control: {
        type: "select",
        labels: {
          icon: "Icon Card",
          "info-portrait": "Info Portrait Card",
          "info-square": "Info Square Card",
        },
      },
    },
  },
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
    variant: "icon",
  },
};

export const InfoPotraitCard: Story = {
  args: {
    image: {
      src: "https://imageupload.io/ib/D8pWEwti3nCPfUC_1696875653.webp",
      alt: "demo",
    },
    title: "Best Price Guarantee",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    // shadow: true,
    variant: "info-portrait",
  },
};
