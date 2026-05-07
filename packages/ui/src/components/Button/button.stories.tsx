import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";

const variants = ["primary", "secondary", "tertiary"] as const;

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Button",
  },
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["primary", "secondary", "tertiary"],
      description: "Button variant style",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disable button interaction",
    },
    loading: {
      control: { type: "boolean" },
      description: "Show loading spinner",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

// Base Variants
export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    children: "Tertiary Button",
  },
};

export const LoadingStates: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      {variants.map((variant) => (
        <Button key={variant} variant={variant} loading>
          {`${variant.charAt(0).toUpperCase()}${variant.slice(1)} Loading`}
        </Button>
      ))}
    </div>
  ),
};

export const DisabledStates: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      {variants.map((variant) => (
        <Button key={variant} variant={variant} disabled>
          {`${variant.charAt(0).toUpperCase()}${variant.slice(1)} Disabled`}
        </Button>
      ))}
    </div>
  ),
};

// Default (Primary without explicit variant)
export const Default: Story = {
  args: {
    children: "Default Primary Button",
  },
};