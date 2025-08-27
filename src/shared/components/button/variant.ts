import { tv } from "tailwind-variants";

export const buttonVariant = tv({
  base: "cursor-pointer flex gap-[10px] py-[16px] rounded-full items-center font-bold border-t-2 border-l-2 border-r-2 border-b-4 transition-all",
  variants: {
    variant: {
      input: "px-[24px] max-h-[12px] bg-[#fff]",
      primary: "px-[40px] text-[18px] h-[50px]",
      text: "!border-none p-0 h-auto shadow-none hover:opacity-70 active:opacity-100",
    },
    isBlock: {
      true: "w-full justify-center",
    },
    color: {
      black: "bg-[#000]",
    },
    disabled: {
      true: "cursor-not-allowed",
    },
    loading: {
      true: "",
    },
  },
  compoundVariants: [
    {
      disabled: true,
      color: "black",
      class: "opacity-30",
    },
  ],
});

export const textVariant = tv({
  base: "text-[18px]",
  variants: {
    variant: {
      input: "text-[#ED1C24]",
      primary: "",
      text: "",
    },
    text: {
      light: "text-[#fff]",
      dark: "text-[#000]",
    },
    color: {
      black: "text-[#fff]",
    },
  },
});
