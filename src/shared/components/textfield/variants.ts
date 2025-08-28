import { tv } from "tailwind-variants";

export const textfieldVariant = tv({
  slots: {
    root: "flex items-center gap-[10px] rounded-full border border-[#D3D3D3] focus-within:border-2 focus-within:border-black transition-colors py-[19px] px-4 max-h-[52px] bg-[#fff]",
    input:
      "w-full uppercase placeholder:text-[#555555] border-none outline-none",
  },
  variants: {
    error: {
      true: {
        root: "border-[#D93C3C] focus-within:border-2 focus-within:border-[#D93C3C]",
      },
    },
    isBlock: {
      true: {
        root: "w-full",
        input: "w-full",
      },
    },
  },
});

export const textareaVariant = tv({
  slots: {
    root: "flex items-start rounded-2xl border border-[#D3D3D3] focus-within:border-2 focus-within:border-black transition-colors p-4 bg-[#fff]",
    textarea:
      "w-full resize-none uppercase placeholder:text-[#555555] border-none outline-none",
  },
  variants: {
    error: {
      true: {
        root: "border-[#D93C3C] focus-within:border-2 focus-within:border-[#D93C3C]",
      },
    },
    isBlock: {
      true: {
        root: "w-full",
        textarea: "w-full",
      },
    },
  },
});
