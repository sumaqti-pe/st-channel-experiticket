export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "onChange"> {
  label?: string;
  placeholder?: string;
  options: SelectOption[];
  error?: boolean;
  helper?: string;
  onChange?: (event: { target: { name: string; value: string } }) => void;
}
