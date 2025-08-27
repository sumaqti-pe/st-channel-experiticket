import * as React from "react";
import { unstable_OneTimePasswordField } from "radix-ui";
import { tv } from "tailwind-variants";

const otpVariant = tv({
  slots: {
    root: "flex items-center justify-center gap-2",
    input:
      "w-12 h-12 rounded-md border border-[#D3D3D3] bg-white text-lg text-center font-medium tracking-wider " +
      "outline-none transition-colors " +
      "focus:border-2 focus:border-black focus:ring-2 focus:ring-black " +
      "hover:border-black " +
      "placeholder:text-[#999]",
  },
  variants: {
    error: {
      true: {
        input:
          "border-[#D93C3C] focus:border-[#D93C3C] focus:ring-[#D93C3C] hover:border-[#D93C3C]",
      },
    },
  },
});

type OneTimePasswordFieldProps = {
  value?: string;
  onChange?: (value: string) => void;
  error?: boolean;
};

export const OneTimePasswordField = ({
  value,
  onChange,
  error,
}: OneTimePasswordFieldProps) => {
  const styles = otpVariant({ error });

  return (
    <unstable_OneTimePasswordField.Root
      className={styles.root()}
      value={value}
      onValueChange={onChange}
    >
      {Array.from({ length: 6 }).map((_, i) => (
        <unstable_OneTimePasswordField.Input
          key={i}
          className={styles.input()}
        />
      ))}
      {/* Este es el que guarda el valor final */}
      <unstable_OneTimePasswordField.HiddenInput />
    </unstable_OneTimePasswordField.Root>
  );
};
