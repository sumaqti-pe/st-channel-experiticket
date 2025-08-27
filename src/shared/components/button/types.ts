export interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  variant?: "primary" | "input" | "text";
  text?: "light" | "dark";
  isBlock?: boolean;
  loading?: boolean;
  color?: "black";
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
}
