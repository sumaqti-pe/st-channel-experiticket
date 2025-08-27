"use client";
import { Button } from "@/shared/components/button/Button";
import { Textfield } from "@/shared/components/textfield/Textfield";
import { TextfieldPassword } from "@/shared/components/textfield/TextfieldPassword";
import { Checkbox } from "@/shared/components/checkbox/Checkbox";
import Link from "next/link";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Helper } from "@/shared/components/helper/Helper";

const schema = yup.object().shape({
  name: yup.string().required("El nombre es obligatorio"),
  email: yup
    .string()
    .email("Correo inválido")
    .required("El correo es obligatorio"),
  password: yup
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .required("La contraseña es obligatoria"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Las contraseñas deben coincidir")
    .required("La confirmación de la contraseña es obligatoria"),
  terms: yup
    .boolean()
    .oneOf([true], "Debes aceptar los términos y condiciones")
    .required("Debes aceptar los términos y condiciones"),
});

type RegisterFormDto = yup.InferType<typeof schema>;

export const RegisterView = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormDto>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: RegisterFormDto) => {};

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <Textfield
            label="Nombres"
            placeholder="Ingresa tu nombre y apellido"
            {...register("name")}
            error={!!errors.name?.message}
            helper={errors.name?.message}
          />
          <Textfield
            label="Correo"
            placeholder="Ingresa tu correo"
            {...register("email")}
            error={!!errors.email?.message}
            helper={errors.email?.message}
          />
          <div className="flex gap-5">
            <TextfieldPassword
              label="Contraseña"
              placeholder="Ejm. 1234Abcd"
              {...register("password")}
              error={!!errors.password?.message}
              helper={errors.password?.message}
            />
            <TextfieldPassword
              label="Confirmar Contraseña"
              placeholder="Ejm. 1234Abcd"
              {...register("confirmPassword")}
              error={!!errors.confirmPassword?.message}
              helper={errors.confirmPassword?.message}
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-start gap-2">
            <Checkbox id="terms" 
              {...register("terms")}
            />
            <label htmlFor="terms" className="text-sm leading-snug">
              He leído y aceptado los{" "}
              <span className="font-bold text-[#ED1C24] underline cursor-pointer">
                Términos y condiciones
              </span>{" "}
              y la{" "}
              <Link href="/privacy-policy">
                <span className="font-bold text-[#ED1C24] underline cursor-pointer">
                  Política de privacidad
                </span>
              </Link>
            </label>
          </div>
          <Helper error>Debes aceptar los términos y condiciones</Helper>
        </div>
        <Button isBlock color="black" onClick={handleSubmit(onSubmit)}>
          Registrarme
        </Button>
      </div>
      <div className="mt-4 flex justify-between">
        <span className="text-[#3C3C3C]">Ya tienes una cuenta?</span>
        <Button variant="text" color="black" href="/login">
          Iniciar sesión
        </Button>
      </div>
    </div>
  );
};
