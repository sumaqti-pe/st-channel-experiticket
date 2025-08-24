export interface TextfieldProps {
  type?: "text" | "email" | "password";
  placeholder?: string;
  append?: React.ReactNode;
  prepend?: React.ReactNode;
  helper?: string;
  error?: boolean;
}
