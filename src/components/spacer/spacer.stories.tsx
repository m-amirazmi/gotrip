import type { Meta, StoryObj } from "@storybook/react";
import Spacer from "./spacer";

const meta = {
  title: "Shared/Spacer",
  component: Spacer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg"],
      control: {
        type: "select",
        labels: {
          xs: "Extra Small Space",
          sm: "Small Space",
          md: "Medium Space",
          lg: "Large Space",
        },
      },
    },
  },
} satisfies Meta<typeof Spacer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "sm",
  },
  render: (args) => {
    return (
      <div>
        <div
          style={{ background: "blue", width: "700px", height: "200px" }}
        ></div>
        <Spacer {...args} />
        <div
          style={{ background: "red", width: "700px", height: "200px" }}
        ></div>
      </div>
    );
  },
};
