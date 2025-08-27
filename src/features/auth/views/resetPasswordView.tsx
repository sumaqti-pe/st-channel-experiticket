"use client";
import { Button } from "@/shared/components/button/Button";
import { PasswordChecklist } from "@/shared/components/password-checklist/PasswordChecklist";
import { TextfieldPassword } from "@/shared/components/textfield/TextfieldPassword";
import { notify } from "@/shared/hooks/useNotify";
import { yupResolver } from "@hookform/resolvers/yup";
import { ArrowLeft } from "lucide-react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
  password: yup
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .required("La contraseña es obligatoria"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Las contraseñas no coinciden")
    .required("La confirmación de la contraseña es obligatoria"),
});

type FormValues = yup.InferType<typeof schema>;

export const ResetPasswordView = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isSubmitting },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: "onChange", // valida en cada cambio
  });

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  const onSubmit = (data: FormValues) => {
    console.log(data);
    notify.success("Contraseña restablecida con éxito");
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-5">
        <TextfieldPassword
          label="Nueva Contraseña"
          placeholder="Ingresa tu nueva contraseña"
          {...register("password")}
          error={!!errors.password?.message}
          helper={errors.password?.message}
        />
        <TextfieldPassword
          label="Confirmar Nueva Contraseña"
          placeholder="Confirma tu nueva contraseña"
          {...register("confirmPassword")}
          error={!!errors.confirmPassword?.message}
          helper={errors.confirmPassword?.message}
        />
      </div>

      {/* Checklist dinámico */}
      <PasswordChecklist
        password={password}
        confirmPassword={confirmPassword}
      />

      <Button
        color="black"
        isBlock
        className="my-4"
        onClick={handleSubmit(onSubmit)}
        disabled={!isValid || isSubmitting} 
      >
        Restablecer Contraseña
      </Button>

      <div className="flex justify-center text-[#3C3C3C] font-light">
        <Button variant="text" prepend={<ArrowLeft />} href="/login">
          Volver al inicio de sesión
        </Button>
      </div>
    </div>
  );
};
