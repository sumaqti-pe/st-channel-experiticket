"use client";
import { Button } from "@/shared/components/button/Button";
import { Textfield } from "@/shared/components/textfield/Textfield";
import { yupResolver } from "@hookform/resolvers/yup";
import { ArrowLeft } from "lucide-react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email("El correo no es válido").required("El correo es obligatorio"),
});

type FormValues = yup.InferType<typeof schema>;

export const RecoveryPasswordView = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormValues) => {};

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <Textfield
          label="Correo"
          placeholder="Ingresa tu correo"
          {...register("email")}
          error={!!errors.email?.message}
          helper={errors.email?.message}
        />
      </div>
      <Button isBlock color="black" onClick={handleSubmit(onSubmit)}>
        Resetear contraseña
      </Button>
      <div className="flex justify-center text-[#3C3C3C] font-light">
        <Button
          variant="text"
          prepend={
            <div>
              <ArrowLeft />
            </div>
          }
          href="/login"
        >
          Volver al inicio de sesión
        </Button>
      </div>
    </div>
  );
};
