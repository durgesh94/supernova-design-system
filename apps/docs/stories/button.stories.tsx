import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@acme/ui/button";

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["primary", "secondary", "tertiary"],
    },
    size: {
      control: { type: "radio" },
      options: ["sm", "md", "lg"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    loading: {
      control: { type: "boolean" },
    },
    fullWidth: {
      control: { type: "boolean" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

/**
 * Primary button variant - use for main call-to-action
 */
export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
    size: "md",
  },
};

/**
 * Secondary button variant - use for secondary actions
 */
export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
    size: "md",
  },
};

/**
 * Tertiary button variant - use for minimal/ghost style actions
 */
export const Tertiary: Story = {
  args: {
    children: "Tertiary Button",
    variant: "tertiary",
    size: "md",
  },
};

/**
 * Small button size
 */
export const Small: Story = {
  args: {
    children: "Small Button",
    variant: "primary",
    size: "sm",
  },
};

/**
 * Large button size
 */
export const Large: Story = {
  args: {
    children: "Large Button",
    variant: "primary",
    size: "lg",
  },
};

/**
 * Disabled button state
 */
export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    variant: "primary",
    disabled: true,
  },
};

/**
 * Loading button state with spinner
 */
export const Loading: Story = {
  args: {
    children: "Loading Button",
    variant: "primary",
    loading: true,
  },
};

/**
 * Full width button
 */
export const FullWidth: Story = {
  args: {
    children: "Full Width Button",
    variant: "primary",
    fullWidth: true,
  },
};

/**
 * All variants side by side
 */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="primary" disabled>
        Disabled
      </Button>
      <Button variant="primary" loading>
        Loading
      </Button>
    </div>
  ),
};
