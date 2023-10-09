import type { Meta, StoryObj } from "@storybook/react";
import Container from "./container";

const meta = {
  title: "Shared/Container",
  component: Container,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This is the content in container",
  },
  render: (args) => {
    return <Container>{args.children}</Container>;
  },
};
