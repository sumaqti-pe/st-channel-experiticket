"use client";
import { Button } from "../button/Button";
import { Checkbox } from "../checkbox/Checkbox";
import { Textfield } from "../textfield/Textfield";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  SubscribeFormData,
  subscribeFormSchema,
} from "@/shared/schemas/subscribeFormSchema";

export const SubscribeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubscribeFormData>({
    resolver: yupResolver(subscribeFormSchema),
  });

  const onSubmit = (data: SubscribeFormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <p>Suscríbete y mantente informado sobre nuestros eventos y ofertas</p>
      <Textfield
        placeholder="ingresa tu correo"
        append={<Button variant="input">Suscribirme</Button>}
        {...register("email")}
        error={errors.email ? true : false}
        helper={errors.email && errors.email.message}
      />
      <div className="flex flex-col gap-2">
        <div className="flex gap-4 items-center">
          <Checkbox
            id="terms"
            label="Acepto los términos y condiciones"
            {...register("terms")}
          />
        </div>
        {errors.terms && (
          <span className="text-sm text-[#D93C3C]">{errors.terms.message}</span>
        )}
      </div>
    </form>
  );
};
