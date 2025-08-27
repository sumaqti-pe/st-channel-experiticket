interface ZoneSquareProps {
  color?: string; 
}

export const ZoneSquare: React.FC<ZoneSquareProps> = ({ color = "#EABE00" }) => {
  return <div style={{ backgroundColor: color }} className="size-[18px]" />;
};
