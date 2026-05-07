import React from "react";
import "../../styles/design-system.css";

type ButtonVariant = "primary" | "secondary" | "tertiary";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  /** Button variant style */
  variant?: ButtonVariant;
  /** Button size */
  size?: ButtonSize;
  /** Loading state - shows spinner and disables button */
  loading?: boolean;
  /** Icon to display on the left (optional) */
  leftIcon?: React.ReactNode;
  /** Icon to display on the right (optional) */
  rightIcon?: React.ReactNode;
  /** Full width button */
  fullWidth?: boolean;
}

const getSizeStyles = (size: ButtonSize): React.CSSProperties => {
  switch (size) {
    case "sm":
      return {
        fontSize: "0.875rem",
        padding: "0.375rem 0.75rem",
      };
    case "lg":
      return {
        fontSize: "1.125rem",
        padding: "0.75rem 1.5rem",
      };
    case "md":
    default:
      return {
        fontSize: "1rem",
        padding: "0.5rem 1rem",
      };
  }
};

/**
 * Get variant classes using Tailwind and design tokens
 */
const getVariantClasses = (
  variant: ButtonVariant,
  disabled: boolean,
  loading: boolean
): string => {
  const baseClasses = "ui-button";

  if (disabled) {
    return `${baseClasses} cursor-not-allowed opacity-60 shadow-none`;
  }

  if (loading) {
    return `${baseClasses} cursor-not-allowed opacity-80`;
  }

  // Variant-specific spacing/sizing
  switch (variant) {
    case "secondary":
      return `${baseClasses} hover:shadow-md active:shadow-sm`;

    case "tertiary":
      return `${baseClasses}`;

    case "primary":
    default:
      return `${baseClasses} hover:shadow-lg active:shadow-md`;
  }
};

/**
 * Get inline styles for colors based on variant
 */
const getVariantStyles = (
  variant: ButtonVariant,
  disabled: boolean,
  loading: boolean
): React.CSSProperties => {
  if (disabled) {
    return {
      backgroundColor: "var(--color-background-neutral)",
      borderColor: "var(--color-border-neutral)",
      color: "var(--color-foreground-neutral-faded)",
      boxShadow: "none",
    };
  }

  switch (variant) {
    case "secondary":
      return {
        backgroundColor: "var(--color-background-secondary)",
        borderColor: "var(--color-border-secondary)",
        color: "var(--color-base-white)",
        boxShadow: loading ? "none" : undefined,
      };

    case "tertiary":
      return {
        backgroundColor: "var(--color-base-white)",
        borderColor: "var(--color-border-primary-faded)",
        color: "var(--color-foreground-primary)",
        boxShadow: "none",
      };

    case "primary":
    default:
      return {
        backgroundColor: "var(--color-background-primary)",
        borderColor: "var(--color-border-primary)",
        color: "var(--color-base-white)",
        boxShadow: loading ? "none" : "var(--shadow-raised)",
      };
  }
};

/**
 * Loading Spinner Component
 */
const LoadingSpinner = (): React.JSX.Element => (
  <span
    className="ui-button__spinner"
    role="status"
    aria-label="Loading"
  />
);

/**
 * Button Component with primary, secondary, and tertiary variants
 * Supports loading and disabled states with proper styling.
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="md">Click me</Button>
 * <Button variant="secondary" loading>Loading...</Button>
 * <Button variant="tertiary" disabled>Disabled</Button>
 * ```
 */
export function Button({
  children,
  disabled = false,
  loading = false,
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  fullWidth = false,
  className = "",
  type = "button",
  style,
  ...other
}: ButtonProps): React.JSX.Element {
  const isDisabledOrLoading = disabled || loading;
  const sizeStyles = getSizeStyles(size);
  const variantClasses = getVariantClasses(variant, disabled, loading);
  const variantStyles = getVariantStyles(variant, disabled, loading);
  const widthClass = fullWidth ? "ui-button--full-width" : "";

  const buttonClasses = `
    ${variantClasses}
    ${widthClass}
    ${className}
  `.trim();

  const buttonStyle: React.CSSProperties = {
    alignItems: "center",
    borderRadius: "0.375rem",
    borderStyle: "solid",
    borderWidth: "2px",
    cursor: isDisabledOrLoading ? "not-allowed" : "pointer",
    display: "inline-flex",
    fontFamily: "'Inter', sans-serif",
    fontWeight: 600,
    justifyContent: "center",
    lineHeight: 1.2,
    textAlign: "center",
    transition: "background-color 150ms ease, border-color 150ms ease, box-shadow 150ms ease",
    width: fullWidth ? "100%" : undefined,
    ...variantStyles,
    ...sizeStyles,
    ...style,
  };

  return (
    <>
      <style>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        .ui-button:focus-visible {
          outline: 2px solid var(--color-border-focus);
          outline-offset: 2px;
        }
        .ui-button__spinner {
          animation: spin 0.6s linear infinite;
          border: 2px solid currentColor;
          border-radius: 9999px;
          border-top-color: transparent;
          display: inline-block;
          height: 1rem;
          margin-right: 0.5rem;
          width: 1rem;
        }
        .ui-button--full-width {
          width: 100%;
        }
      `}</style>
      <button
        type={type}
        disabled={isDisabledOrLoading}
        className={buttonClasses}
        style={buttonStyle}
        {...other}
      >
        {/* Left Icon Slot */}
        {leftIcon && <span style={{ marginRight: "0.5rem" }}>{leftIcon}</span>}

        {/* Loading Spinner */}
        {loading && <LoadingSpinner />}

        {/* Children Slot */}
        <span>{children}</span>

        {/* Right Icon Slot */}
        {rightIcon && <span style={{ marginLeft: "0.5rem" }}>{rightIcon}</span>}
      </button>
    </>
  );
}

Button.displayName = "Button";
