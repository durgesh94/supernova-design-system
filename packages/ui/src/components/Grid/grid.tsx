import React from "react";

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  columns?: number;
  gap?: number | string;
  minItemWidth?: number | string;
}

const toCssSize = (value: number | string): string =>
  typeof value === "number" ? `${value}px` : value;

export function Grid({
  children,
  columns,
  gap = 16,
  minItemWidth,
  style,
  ...other
}: GridProps): React.JSX.Element {
  const resolvedGap = toCssSize(gap);
  const gridTemplateColumns = minItemWidth
    ? `repeat(auto-fit, minmax(${toCssSize(minItemWidth)}, 1fr))`
    : `repeat(${columns ?? 1}, minmax(0, 1fr))`;

  return (
    <div
      style={{
        display: "grid",
        gap: resolvedGap,
        gridTemplateColumns,
        width: "100%",
        ...style,
      }}
      {...other}
    >
      {children}
    </div>
  );
}

Grid.displayName = "Grid";