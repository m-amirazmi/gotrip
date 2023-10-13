import type { Meta, StoryObj } from "@storybook/react";
import Hero from "./hero";
import content from "../../content/home.content.json";

const meta = {
  title: "Section/Hero",
  component: Hero,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: content.hero,
  },
  render: (args) => {
    return (
      <div style={{ position: "relative" }}>
        <Hero {...args} />
      </div>
    );
  },
};
