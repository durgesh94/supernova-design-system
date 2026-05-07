import type { Meta, StoryObj } from "@storybook/react";

import { Grid } from "./grid";

const demoCardStyle: React.CSSProperties = {
  backgroundColor: "var(--color-base-white)",
  border: "1px solid var(--color-border-neutral)",
  borderRadius: "0.75rem",
  boxShadow: "var(--shadow-raised)",
  color: "var(--color-foreground-neutral)",
  minHeight: "88px",
  padding: "1rem",
};

const meta = {
  title: "Layout/Grid",
  component: Grid,
  tags: ["autodocs"],
  args: {
    columns: 3,
    gap: 16,
  },
  argTypes: {
    columns: {
      control: { type: "number" },
    },
    gap: {
      control: { type: "number" },
    },
    minItemWidth: {
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof Grid>;

export default meta;

type Story = StoryObj<typeof meta>;

const items = ["One", "Two", "Three", "Four", "Five", "Six"];

export const FixedColumns: Story = {
  render: (args) => (
    <Grid {...args}>
      {items.map((item) => (
        <div key={item} style={demoCardStyle}>
          {item}
        </div>
      ))}
    </Grid>
  ),
};

export const AutoFit: Story = {
  args: {
    gap: 16,
    minItemWidth: "180px",
  },
  render: (args) => (
    <Grid {...args}>
      {items.map((item) => (
        <div key={item} style={demoCardStyle}>
          {item}
        </div>
      ))}
    </Grid>
  ),
};