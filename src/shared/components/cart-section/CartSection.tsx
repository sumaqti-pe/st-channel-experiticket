"use client";
import { useScrollY } from "@/shared/hooks/useScrollY";
import { Shopping } from "@/shared/icons/Shopping";
import { X } from "@/shared/icons/X";
import { Button } from "../button/Button";
import { useResume } from "@/shared/hooks/useResume";
import { Summary } from "../summary/Summary";
import { SummaryResume } from "../summary/SummaryResume";

export const CartSection = () => {
  const scrolled = useScrollY(90);
  const { resumes, totalTickets, isOpenCart, toggleOpenCart } = useResume();

  const disableBuyButton = totalTickets === 0;

  return (
    <section
      className={`
        fixed right-0 top-[90px] pt-[90px] h-[calc(100%-90px)] w-[375px] bg-white shadow-lg
        transition-transform duration-300 ease-in-out
        ${isOpenCart ? "translate-x-0" : "translate-x-full"}
        ${scrolled && "!top-0 !h-full !pt-0"}
        max-lg:w-full max-lg:!top-0 max-lg:!pt-0 max-lg:h-screen max-lg:z-[999]
      `}
    >
      <div className="h-full px-[20px] py-[36px] flex flex-col justify-between max-lg:pt-[30px] max-lg:pb-[20px]">
        <Summary
          header={
            <div className="flex justify-between items-center">
              <span className="flex gap-2 items-center">
                <Shopping size={24} />
                <h2 className="uppercase font-bold text-2xl">mi carrito</h2>
              </span>
              <button className="cursor-pointer" onClick={toggleOpenCart}>
                <X />
              </button>
            </div>
          }
          footer={
            <div className="flex gap-2">
              <Button variant="text" isBlock onClick={toggleOpenCart}>
                Seguir comprando
              </Button>
              <Button color="black" className="max-lg:hidden" disabled={disableBuyButton}>
                Comprar
              </Button>
              <Button color="black" isBlock className="min-lg:hidden" disabled={disableBuyButton}>
                Comprar
              </Button>
            </div>
          }
        >
          {resumes.map((resume) => (
            <SummaryResume key={resume.id} resume={resume} />
          ))}
        </Summary>
      </div>
    </section>
  );
};
