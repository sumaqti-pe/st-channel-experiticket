"use client";
import { Button } from "@/shared/components/button/Button";
import { Helper } from "@/shared/components/helper/Helper";
import { OneTimePasswordField } from "@/shared/components/one-time-password-field/OneTimePasswordField";
import { notify } from "@/shared/hooks/useNotify";
import { yupResolver } from "@hookform/resolvers/yup";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
  otp: yup
    .string()
    .length(6, "El código debe tener 6 dígitos")
    .required("El código es requerido"),
});

type FormValues = yup.InferType<typeof schema>;

export const ValidateOTPView = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      otp: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    // notify.info("Advertencia: Verifica tu código");
    notify.success("Éxito: Código verificado correctamente");
    router.push("/reset-password");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <Controller
          control={control}
          name="otp"
          render={({ field }) => (
            <OneTimePasswordField
              value={field.value}
              onChange={field.onChange}
              error={!!errors.otp}
            />
          )}
        />
        {errors.otp && (
          <div className="flex justify-center">
            <Helper error>{errors.otp.message}</Helper>
          </div>
        )}
      </div>

      <Button color="black" isBlock type="submit">
        Continuar
      </Button>

      <p className="flex justify-center gap-2 text-gray-600 items-center">
        <span>¿No recibiste el código?</span>
        <Button variant="text">
          <span className="font-bold">Reenviar código</span>
        </Button>
      </p>

      <div className="flex justify-center text-[#3C3C3C] font-light">
        <Button variant="text" prepend={<ArrowLeft />} href="/login">
          Volver al inicio de sesión
        </Button>
      </div>
    </form>
  );
};
