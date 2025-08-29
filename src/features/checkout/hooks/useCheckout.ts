import { useResume } from "@/shared/hooks/useResume";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { CheckoutFormDto, checkoutFormSchema } from "../schemas/checkoutSchema";
import { payment } from "../services/checkout";
import { notify } from "@/shared/hooks/useNotify";
import { useState } from "react";

const randomOrderId = () => {
  return Math.random().toString(36).substring(2, 15) + "-ORDER";
};

export const useCheckout = () => {
  const [formToken, setFormToken] = useState<string | null>(null);

  const { totalTickets } = useResume();

  const [loadingCheckout, setLoadingCheckout] = useState(false);

  const methods = useForm<CheckoutFormDto>({
    resolver: yupResolver(checkoutFormSchema),
    defaultValues: {
      fullName: "Wilmer Delgado", // 👈 valor inicial
      email: "wilmer@example.com", // 👈 valor inicial
      phone: "980627766", // 👈 valor inicial
      documentType: "dni", // 👈 valor inicial
      documentNumber: "74138876", // 👈 valor inicial
    },
  });
  const { handleSubmit } = methods;

  const onSubmit = async (dto: CheckoutFormDto) => {
    const data = {
      amount: 1 * 100,
      currency: "PEN",
      orderId: randomOrderId(),
      customer: {
        email: dto.email,
        billingDetails: {
          firstName: "Wilmer",
          lastName: "Delgado",
          phoneNumber: "980627766",
          identityType: "DNI",
          identityCode: "74138876",
          address: "CAlle las huacas",
          country: "PE",
          city: "comas",
          state: "lima",
          zipCode: "000000",
        },
      },
    };

    setLoadingCheckout(true);
    const response = await payment(data);

    if (response.success && response.data) {
      console.log({
        message: "todo ok",
        data: response.data,
      });
      const token = response.data?.answer.formToken;
      setFormToken(token);
    } else {
      console.error("Error en pago:", response.error);
      notify.error(
        "Hubo un error en la generación de la orden, por favor intenta nuevamente."
      );
    }

    setLoadingCheckout(false);
  };

  const disabled = totalTickets === 0;

  return {
    methods,
    disabled,
    loadingCheckout,
    formToken,
    handleSubmit,
    onSubmit,
    setFormToken,
  };
};
