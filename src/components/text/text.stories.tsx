import type { Meta, StoryObj } from "@storybook/react";
import Text from "./text";

const meta = {
  title: "Shared/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    tag: {
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"],
      control: {
        type: "select",
        labels: {
          h1: "Header h1",
          h2: "Header h2",
          h3: "Header h3",
          h4: "Header h4",
          h5: "Header h5",
          h6: "Header h6",
          p: "Paragraph p",
          span: "Text span",
        },
      },
    },
    size: {
      options: ["md", "sm", "xs"],
      control: {
        type: "select",
        labels: {
          md: "Medium",
          sm: "Small",
          xs: "Xtra Small",
        },
      },
    },
    weight: {
      options: ["bold", "normal", "lighter", "light"],
      control: {
        type: "select",
        labels: {
          bold: "Bold (600)",
          normal: "Normal (500)",
          lighter: "Lighter (400)",
          light: "Light (300)",
        },
      },
    },
    color: {
      options: [
        "blue-1",
        "blue-2",
        "blue-3",
        "blue-4",
        "yellow",
        "white",
        "grey",
        "grey-2",
        "grey-3",
        "green",
      ],
      control: {
        type: "select",
        labels: {
          "blue-1": "Blue 1",
          "blue-2": "Blue 2",
          "blue-3": "Blue 3",
          "blue-4": "Blue 4",
          yellow: "Yellow",
          white: "White",
          grey: "Grey",
          "grey-2": "Grey 2",
          "grey-3": "Grey 3",
          green: "Green",
        },
      },
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeadingH1: Story = {
  args: {
    tag: "h1",
    children: "This is H1",
    color: "blue-4",
  },
  argTypes: {},
};
export const HeadingH2: Story = {
  args: {
    tag: "h2",
    children: "This is H2",
  },
  argTypes: {},
};
export const HeadingH3: Story = {
  args: {
    tag: "h3",
    children: "This is H3",
  },
  argTypes: {},
};
export const HeadingH4: Story = {
  args: {
    tag: "h4",
    children: "This is H4",
  },
  argTypes: {},
};
export const HeadingH5: Story = {
  args: {
    tag: "h5",
    children: "This is H5",
  },
  argTypes: {},
};
export const Body: Story = {
  args: {
    tag: "p",
    children: "This is Body",
  },
  argTypes: {},
};
export const BodySmall: Story = {
  args: {
    tag: "p",
    children: "This is Body Small",
    size: "sm",
  },
  argTypes: {},
};
export const BodyXSmall: Story = {
  args: {
    tag: "p",
    children: "This is Body Extra Small",
    size: "xs",
  },
  argTypes: {},
};
export const BodySpan: Story = {
  args: {
    tag: "span",
    children: "This is Body Span",
  },
  argTypes: {},
};
