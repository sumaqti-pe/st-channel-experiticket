interface DividerProps {
  orientation?: "vertical" | "horizontal";
  color?: string;
  thickness?: string;
  dashLength?: string;
  gapLength?: string;
}

export default function Divider({
  orientation = "horizontal",
  color = "#B2B2B2",
  thickness = "1px",
  dashLength = "12px",
  gapLength = "6px",
}: DividerProps) {
  const isVertical = orientation === "vertical";

  return (
    <div
      style={{
        width: isVertical ? thickness : "100%",
        height: isVertical ? "100%" : thickness,
        backgroundImage: isVertical
          ? `repeating-linear-gradient(to bottom, ${color}, ${color} ${dashLength}, transparent ${dashLength}, transparent calc(${dashLength} + ${gapLength}))`
          : `repeating-linear-gradient(to right, ${color}, ${color} ${dashLength}, transparent ${dashLength}, transparent calc(${dashLength} + ${gapLength}))`,
      }}
    />
  );
}
