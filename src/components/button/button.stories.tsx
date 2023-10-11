import type { Meta, StoryObj } from "@storybook/react";
import Button from "./button";
import styles from "./button.module.css";
import Image from "next/image";

const meta = {
  title: "Shared/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      table: {
        disable: false,
      },
    },
    tag: {
      options: ["a", "button"],
      control: {
        type: "select",
        labels: {
          a: "Link Button",
          button: "Normal Button",
        },
      },
    },
    variant: {
      options: ["solid", "outline", "solid-grey", "ghost", "text"],
      control: {
        type: "select",
        labels: {
          solid: "Solid",
          outline: "Outline",
          ghost: "Ghost",
          text: "Text",
          "solid-grey": "Solid Grey",
        },
      },
    },
    color: {
      options: ["blue-1", "blue-2", "blue-3", "blue-4", "yellow", "white"],
      control: {
        type: "select",
        labels: {
          "blue-1": "Blue 1",
          "blue-2": "Blue 2",
          "blue-3": "Blue 3",
          "blue-4": "Blue 4",
          yellow: "Yellow",
          white: "White",
        },
      },
    },
    size: {
      options: ["small", "medium", "large"],
      control: {
        type: "select",
        labels: {
          small: "Small",
          medium: "Medium",
          large: "Large",
        },
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const DarkBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        background: "#292c2e",
        height: "20vh",
        width: "80vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </div>
  );
};

export const SolidButton: Story = {
  args: {
    children: "Find Out More",
    variant: "solid",
    color: "blue-1",
    size: "medium",
    tag: "button",
    isSelected: false,
  },
};

export const OutlineButton: Story = {
  args: {
    children: "Find Out More",
    variant: "outline",
    color: "blue-1",
    size: "medium",
    tag: "button",
    isSelected: false,
  },
};

export const GhostButton: Story = {
  args: {
    children: "Find Out More",
    variant: "ghost",
    color: "blue-1",
    size: "medium",
    tag: "button",
    isSelected: false,
  },
};

export const SolidGreyBG: Story = {
  args: {
    children: "Find Out More",
    variant: "solid-grey",
    color: "blue-1",
    size: "medium",
    tag: "button",
    isSelected: false,
  },
};

export const TextButton: Story = {
  args: {
    children: "Find Out More",
    variant: "text",
    color: "blue-1",
    size: "medium",
    tag: "button",
    isSelected: false,
  },
};

export const DarkBGSolidButton: Story = {
  args: {
    children: "Find Out More",
    variant: "solid",
    color: "white",
    size: "medium",
    tag: "button",
    isSelected: false,
  },
  render: (args) => {
    return (
      <DarkBackground>
        <Button {...args}></Button>
      </DarkBackground>
    );
  },
};

export const DarkBGOutlineButton: Story = {
  args: {
    children: "Find Out More",
    variant: "outline",
    color: "white",
    size: "medium",
    tag: "button",
    isSelected: false,
  },
  render: (args) => {
    return (
      <DarkBackground>
        <Button {...args}></Button>
      </DarkBackground>
    );
  },
};

export const DarkBGGhostButton: Story = {
  args: {
    children: "Find Out More",
    variant: "ghost",
    color: "white",
    size: "medium",
    tag: "button",
    isSelected: false,
  },
  render: (args) => {
    return (
      <DarkBackground>
        <Button {...args}></Button>
      </DarkBackground>
    );
  },
};

export const SolidButtonWithIcon: Story = {
  args: {
    variant: "ghost",
    color: "white",
    size: "medium",
    tag: "button",
    isSelected: false,
  },
  render: (args) => {
    return (
      <DarkBackground>
        <Button {...args} className={styles["sb-root"]}>
          <Image
            src="https://imageupload.io/ib/gc4DLzbB7Dp2Xi0_1696833972.webp"
            alt="icon-hotel"
            width={25}
            height={25}
          />
          <span>Hotel</span>
        </Button>
      </DarkBackground>
    );
  },
};
