interface DividerProps {
  orientation?: "vertical" | "horizontal";
  color?: string;
  thickness?: string;
  dashLength?: string;
  gapLength?: string;
  length?: string;
  className?: string;
  variant?: "dashed" | "solid";
}

export default function Divider({
  orientation = "horizontal",
  color = "#B2B2B2",
  thickness = "1px",
  dashLength = "12px",
  gapLength = "6px",
  length = "100%",
  className,
  variant = "dashed",
}: DividerProps) {
  const isVertical = orientation === "vertical";

  const baseStyle: React.CSSProperties = {
    width: isVertical ? thickness : length,
    height: isVertical ? length : thickness,
  };

  const style: React.CSSProperties =
    variant === "dashed"
      ? {
          ...baseStyle,
          backgroundImage: isVertical
            ? `repeating-linear-gradient(to bottom, ${color}, ${color} ${dashLength}, transparent ${dashLength}, transparent calc(${dashLength} + ${gapLength}))`
            : `repeating-linear-gradient(to right, ${color}, ${color} ${dashLength}, transparent ${dashLength}, transparent calc(${dashLength} + ${gapLength}))`,
        }
      : {
          ...baseStyle,
          backgroundColor: color,
        };

  return <div style={style} className={className} />;
}
