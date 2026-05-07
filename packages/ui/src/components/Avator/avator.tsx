import React from "react";

type AvatorSize = 30 | 40 | 64;

export interface AvatorProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  src?: string;
  alt?: string;
  name?: string;
  size?: AvatorSize;
}

const DEFAULT_AVATOR_ICON = (
  <svg
    aria-hidden="true"
    fill="none"
    viewBox="0 0 24 24"
    width="60%"
    height="60%"
  >
    <circle
      cx="12"
      cy="8"
      r="4"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <path
      d="M5 19c1.4-3.2 4.1-4.8 7-4.8s5.6 1.6 7 4.8"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.8"
    />
  </svg>
);

const getInitials = (name?: string): string => {
  if (!name) {
    return "";
  }

  const words = name.trim().split(/\s+/).filter(Boolean);

  if (words.length === 0) {
    return "";
  }

  return words
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
};

const getFontSize = (size: AvatorSize): string => {
  switch (size) {
    case 30:
      return "0.75rem";
    case 64:
      return "1.25rem";
    case 40:
    default:
      return "0.875rem";
  }
};

export function Avator({
  src,
  alt,
  name,
  size = 40,
  style,
  ...other
}: AvatorProps): React.JSX.Element {
  const [hasImageError, setHasImageError] = React.useState(false);
  const initials = getInitials(name);
  const showImage = Boolean(src) && !hasImageError;
  const showInitials = !showImage && initials.length > 0;

  return (
    <div
      aria-label={alt ?? name ?? "Default avator"}
      role="img"
      style={{
        alignItems: "center",
        backgroundColor: showInitials
          ? "var(--color-background-primary-faded)"
          : "var(--color-background-neutral)",
        border: "1px solid var(--color-border-neutral)",
        borderRadius: "9999px",
        color: showInitials
          ? "var(--color-foreground-primary)"
          : "var(--color-foreground-neutral-faded)",
        display: "inline-flex",
        fontFamily: "'Inter', sans-serif",
        fontSize: getFontSize(size),
        fontWeight: 700,
        height: `${size}px`,
        justifyContent: "center",
        lineHeight: 1,
        overflow: "hidden",
        textTransform: "uppercase",
        userSelect: "none",
        width: `${size}px`,
        ...style,
      }}
      {...other}
    >
      {showImage ? (
        <img
          src={src}
          alt={alt ?? name ?? "Avator image"}
          onError={(): void => setHasImageError(true)}
          style={{
            display: "block",
            height: "100%",
            objectFit: "cover",
            width: "100%",
          }}
        />
      ) : showInitials ? (
        <span>{initials}</span>
      ) : (
        DEFAULT_AVATOR_ICON
      )}
    </div>
  );
}

Avator.displayName = "Avator";