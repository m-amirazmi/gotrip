import type { Meta, StoryObj } from "@storybook/react";
import CategoryTab from "./category-tab";
import mockData from "../../data/homepage.json";

const meta = {
  title: "Shared/Category Tab",
  component: CategoryTab,
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["solid-grey", "ghost"],
      control: {
        type: "select",
        labels: {
          ghost: "Ghost",
          "solid-grey": "Solid Grey",
        },
      },
    },
    size: {
      options: ["small", "medium"],
      control: {
        type: "select",
        labels: {
          small: "Small",
          medium: "Medium",
        },
      },
    },
  },
} satisfies Meta<typeof CategoryTab>;

export default meta;
type Story = StoryObj<typeof meta>;

const DarkBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        background: "#292c2e",
        height: "20vh",
        width: "90vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </div>
  );
};

export const Default: Story = {
  args: {
    variant: "ghost",
    size: "small",
    showIcon: false,
    items: mockData.categories,
  },
  render: (args) => {
    return (
      <DarkBackground>
        <CategoryTab {...args} />
      </DarkBackground>
    );
  },
};
