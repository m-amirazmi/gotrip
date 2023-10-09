import type { Meta, StoryObj } from "@storybook/react";
import CurrencyCountrySwitcher from "./currency-country-switcher";

const meta = {
  title: "Shared/CurrencyCountrySwitcher",
  component: CurrencyCountrySwitcher,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof CurrencyCountrySwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
