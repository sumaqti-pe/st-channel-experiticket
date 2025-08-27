import { useResume } from "@/shared/hooks/useResume";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { CheckoutFormDto, checkoutFormSchema } from "../schemas/checkoutSchema";

export const useCheckout = () => {
  const { totalTickets } = useResume();

  const loading = false;

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<CheckoutFormDto>({
    resolver: yupResolver(checkoutFormSchema),
  });

  const onSubmit = (data: CheckoutFormDto) => {
    console.log(data);
  };

  const disabled = totalTickets === 0 

  return {
    disabled,
    loading,
    errors,
    handleSubmit,
    register,
    onSubmit,
  };
};
