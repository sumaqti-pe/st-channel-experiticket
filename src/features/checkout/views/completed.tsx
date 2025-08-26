"use client";
import { Container } from "@/shared/components/container/Container";
import { Thankyou } from "../components/Thankyou";
import { ResumeTicketList } from "../components/ResumeTicketList";

export const CheckoutCompletedView = () => {
  return (
    <Container className="bg-[#F9EEE8]">
      <section className="flex flex-col py-[72px] gap-10 max-lg:py-[32px] max-lg:px-[16px] max-lg:gap-[32px]">
        <Thankyou />
        <ResumeTicketList />
      </section>
    </Container>
  );
};
