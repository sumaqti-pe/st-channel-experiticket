"use client";
import { Button } from "@/shared/components/button/Button";
import { Container } from "@/shared/components/container/Container";
import { Ticket } from "@/shared/icons/Ticket";
import { useCheckout } from "../hooks/useCheckout";
import { Summary } from "@/shared/components/summary/Summary";
import { FormProvider } from "react-hook-form";
import { PaymentForm } from "../components/PaymentForm";
import { PaymentLoading } from "../components/PaymentLoading";
import { IzipayForm } from "../components/IzipayForm";

export const CheckoutView = () => {
  const {
    methods,
    disabled,
    loadingCheckout,
    formToken,
    setFormToken,
    handleSubmit,
    onSubmit,
  } = useCheckout();

  return (
    <Container className="bg-[#F9EEE8]">
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex justify-between py-[72px] gap-10 mb-[120px] max-lg:py-[32px] max-lg:px-[16px] max-lg:gap-[32px] max-lg:flex-col max-lg:mb-auto"
        >
          <PaymentForm />
          <div className="bg-[#fff] w-[375px] py-4 px-4 rounded-sm h-fit max-lg:w-full">
            <div className="flex flex-col gap-8">
              <Summary
                header={
                  <h2 className="uppercase text-lg font-bold flex items-center gap-2">
                    <Ticket color="#ED1C24" w="24" h="24" />
                    resumen de compra
                  </h2>
                }
                footer={
                  <div>
                    <Button
                      color="black"
                      isBlock
                      disabled={disabled}
                      type="submit"
                    >
                      Comprar
                    </Button>
                  </div>
                }
              />
            </div>
          </div>
        </form>
      </FormProvider>
      {formToken && (
        <IzipayForm
          publicKey={process.env.NEXT_PUBLIC_IZIPAY_PUBLIC_KEY!}
          formToken={formToken}
          onClose={() => setFormToken(null)}
        />
      )}
      {loadingCheckout && <PaymentLoading />}
    </Container>
  );
};
