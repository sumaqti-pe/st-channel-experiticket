import { tv } from "tailwind-variants";

export const buttonVariant = tv({
  base: "cursor-pointer flex gap-[10px] rounded-full items-center transition-all",
  variants: {
    variant: {
      input:
        "px-[24px] max-h-[12px] bg-[#fff] border py-[16px] font-bold", 
      primary:
        "px-[40px] text-[18px] h-[50px] border-t-2 border-l-2 border-r-2 border-b-4 py-[16px] font-bold",
      text:
        "p-0 h-auto shadow-none hover:opacity-70 active:opacity-100 border-none !bg-[transparent]",
    },
    isBlock: {
      true: "w-full justify-center",
    },
    color: {
      black: "bg-[#000]",
      red: "bg-[#ED1C24]",
    },
    disabled: {
      true: "cursor-not-allowed opacity-30",
    },
    loading: {
      true: "cursor-wait opacity-50",
    },
  },
  compoundVariants: [
    {
      variant: "text",
      color: "red",
      class: "text-[#ED1C24] hover:opacity-100",
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
      red: "text-[#fff]",
    },
  },
  compoundVariants: [
    {
      variant: "text",
      color: "black",
      class: "text-[#000] hover:text-[#ED1C24] ",
    },
  ],
});
