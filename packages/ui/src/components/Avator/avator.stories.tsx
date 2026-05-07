import type { Meta, StoryObj } from "@storybook/react";

import { Avator } from "./avator";

const sizes = [30, 40, 64] as const;

const meta = {
  title: "Components/Avator",
  component: Avator,
  tags: ["autodocs"],
  args: {
    name: "Durgesh Tambe",
    size: 40,
  },
  argTypes: {
    size: {
      control: { type: "radio" },
      options: sizes,
    },
    src: {
      control: { type: "text" },
    },
    name: {
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof Avator>;

export default meta;

type Story = StoryObj<typeof meta>;

const imageUrl =
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80";

export const WithImage: Story = {
  args: {
    src: imageUrl,
    alt: "Profile image",
    name: "Durgesh Tambe",
    size: 40,
  },
};

export const WithInitials: Story = {
  args: {
    name: "Durgesh Tambe",
    size: 40,
  },
};

export const DefaultImage: Story = {
  args: {
    size: 40,
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ alignItems: "center", display: "flex", gap: "1rem" }}>
      {sizes.map((size) => (
        <Avator key={size} name="Durgesh Tambe" size={size} />
      ))}
    </div>
  ),
};

export const AllSizesWithImage: Story = {
  render: () => (
    <div style={{ alignItems: "center", display: "flex", gap: "1rem" }}>
      {sizes.map((size) => (
        <Avator
          key={size}
          alt={`Profile image ${size}`}
          name="Durgesh Tambe"
          size={size}
          src={imageUrl}
        />
      ))}
    </div>
  ),
};