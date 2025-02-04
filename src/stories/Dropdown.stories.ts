import type { Meta, StoryObj } from "@storybook/react";

import { Dropdown, DropdownProps } from "@laksmitawidya/Dropdown";
import { DropdownComponent, optionsList } from "./Dropdown";

const meta = {
  title: "Components/Dropdown",
  component: DropdownComponent,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    onChange: { action: "changed" },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<DropdownProps>;

export const SingleSelectDropdown: Story = {
  args: {
    options: optionsList,
    outlined: true,
    optionLabel: "Fruits",
    multiple: false,
    withSearch: false,
    withPortal: false,
  },
};
