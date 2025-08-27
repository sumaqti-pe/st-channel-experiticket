export interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  variant?: "primary" | "input" | "text";
  text?: "light" | "dark";
  isBlock?: boolean;
  loading?: boolean;
  color?: "black" | "red";
  disabled?: boolean;
  href?: string;
  type?: string;
  onClick?: () => void;
}
