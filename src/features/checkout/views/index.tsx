"use client";
import { Button } from "@/shared/components/button/Button";
import { Container } from "@/shared/components/container/Container";
import { Textfield } from "@/shared/components/textfield/Textfield";
import { Carnet } from "@/shared/icons/Carnet";
import { Ticket } from "@/shared/icons/Ticket";
import { useCheckout } from "../hooks/useCheckout";
import { CustomSelect } from "@/shared/components/select/Select";
import { Summary } from "@/shared/components/summary/Summary";

export const CheckoutView = () => {

  const { disabled, errors, handleSubmit, register, onSubmit } = useCheckout();

  return (
    <Container className="bg-[#F9EEE8]">
      <section className="flex justify-between py-[72px] gap-10 mb-[120px] max-lg:py-[32px] max-lg:px-[16px] max-lg:gap-[32px] max-lg:flex-col max-lg:mb-auto">
        <div className="w-[600px] flex flex-col gap-8 max-lg:w-full">
          <span className="uppercase font-bold text-2xl flex items-center gap-3">
            <Carnet />
            datos
          </span>
          <Textfield
            label="Nombres y apellidos"
            placeholder="Ingresa tu nombre completo"
            {...register("fullName")}
            error={!!errors.fullName?.message}
            helper={errors.fullName?.message}
          />
          <Textfield
            label="Correo electrónico"
            placeholder="Ingresa tu correo"
            {...register("email")}
            error={!!errors.email?.message}
            helper={errors.email?.message}
          />
          <Textfield
            label="Télefono celular"
            placeholder="Ingresa tu celular"
            {...register("phone")}
            error={!!errors.phone?.message}
            helper={errors.phone?.message}
          />
          <div className="flex justify-between gap-[31px] max-lg:flex-col">
            <div className="w-[450px] max-lg:w-full">
              <CustomSelect
                label="tipo de documento"
                placeholder="Escoge un documento"
                options={[
                  {
                    value: "dni",
                    label: "DNI",
                  },
                ]}
                {...register("documentType")}
                error={!!errors.documentType?.message}
                helper={errors.documentType?.message}
              />
            </div>
            <div className="w-full">
              <Textfield
                label="Número de documento"
                placeholder="Ingresa tu documento de identidad"
                {...register("documentNumber")}
                error={!!errors.documentNumber?.message}
                helper={errors.documentNumber?.message}
              />
            </div>
          </div>
        </div>
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
                    onClick={handleSubmit(onSubmit)}
                  >
                    Comprar
                  </Button>
                </div>
              }
            />
          </div>
        </div>
      </section>
      {/* {loading && <PaymentLoading />} */}
    </Container>
  );
};
