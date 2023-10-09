import type { Meta, StoryObj } from "@storybook/react";
import Hero from "./hero";

const meta = {
  title: "Shared/Hero",
  component: Hero,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => {
    return (
      <div style={{ position: "relative" }}>
        <Hero {...args} />
      </div>
    );
  },
};
