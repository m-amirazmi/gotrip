import type { Meta, StoryObj } from "@storybook/react";
import Header from "./header";
import cx from "classnames";
import styles from "./header.module.css";
import content from "../../content/global.content.json";

const meta = {
  title: "Shared/Header",
  component: Header,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

const Background = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={cx(styles["sb-root"])}>
      <div className={cx(styles["sb-root-bg"])}>{children}</div>
    </div>
  );
};

export const Default: Story = {
  args: {
    services: content.header.services,
  },
  render: (args) => {
    return (
      <Background>
        <Header {...args} />
      </Background>
    );
  },
};
