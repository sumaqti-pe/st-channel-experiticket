import { tv } from "tailwind-variants";

export const textfieldVariant = tv({
  slots: {
    root: "flex items-center gap-[10px] rounded-full border border-[#D3D3D3] focus-within:border-2 focus-within:border-black transition-colors py-[19px] px-4 max-h-[52px]",
    input:
      "w-full uppercase placeholder:text-[#555555] border-none outline-none",
    helper: "text-sm",
  },
  variants: {
    error: {
      true: {
        helper: "text-[#D93C3C]",
        root: "border-[#D93C3C] focus-within:border-2 focus-within:border-[#D93C3C]",
      },
    },
  },
});
