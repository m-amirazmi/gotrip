import type { Meta, StoryObj } from "@storybook/react";
import Column from "./column";

const meta = {
  title: "Shared/Column",
  component: Column,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    columnNo: {
      options: [1, 2, 3, 4, 5, 6],
      control: {
        type: "select",
        labels: {
          1: "One Column",
          2: "Two Column",
          3: "Three Column",
          4: "Four Column",
          5: "Five Column",
          6: "Six Column",
        },
      },
    },
    gap: {
      options: ["sm", "md", "lg"],
      control: {
        type: "select",
        labels: {
          sm: "Small Gap",
          md: "Medium Gap",
          lg: "Large Gap",
        },
      },
    },
  },
} satisfies Meta<typeof Column>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    columnNo: 2,
    gap: "sm",
    children: (
      <>
        <div
          style={{
            background: "red",
            padding: "24px",
            boxSizing: "border-box",
          }}
        ></div>
        <div
          style={{
            background: "green",
            padding: "24px",
            boxSizing: "border-box",
          }}
        ></div>
        <div
          style={{
            background: "blue",
            padding: "24px",
            boxSizing: "border-box",
          }}
        ></div>
        <div
          style={{
            background: "purple",
            padding: "24px",
            boxSizing: "border-box",
          }}
        ></div>
        <div
          style={{
            background: "yellow",
            padding: "24px",
            boxSizing: "border-box",
          }}
        ></div>
        <div
          style={{
            background: "orange",
            padding: "24px",
            boxSizing: "border-box",
          }}
        ></div>
        <div
          style={{
            background: "brown",
            padding: "24px",
            boxSizing: "border-box",
          }}
        ></div>
        <div
          style={{
            background: "pink",
            padding: "24px",
            boxSizing: "border-box",
          }}
        ></div>
      </>
    ),
  },
  render: (args) => {
    return (
      <div style={{ width: "1000px" }}>
        <Column {...args}>{args.children}</Column>
      </div>
    );
  },
};
