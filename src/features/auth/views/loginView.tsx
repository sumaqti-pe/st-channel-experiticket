"use client";
import { Button } from "@/shared/components/button/Button";
import { Textfield } from "@/shared/components/textfield/Textfield";
import { TextfieldPassword } from "@/shared/components/textfield/TextfieldPassword";
import { useLogin } from "../hooks/useLogin";

export const LoginView = () => {
  const { errors, register, handleSubmit, onSubmit } = useLogin();

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <Textfield
            label="Correo"
            placeholder="Ingresa tu correo"
            {...register("email")}
            error={!!errors.email?.message}
            helper={errors.email?.message}
          />
          <div className="flex flex-col gap-4">
            <TextfieldPassword
              label="Contraseña"
              placeholder="Ingresa tu contraseña"
              {...register("password")}
              error={!!errors.password?.message}
              helper={errors.password?.message}
            />
            <div className="flex justify-end">
              <Button variant="text" color="black" href="/recuperar-contrasena">
                Olvidé mi contraseña
              </Button>
            </div>
          </div>
        </div>
        <Button
          isBlock
          color="black"
          type="submit"
          onClick={handleSubmit(onSubmit)}
        >
          Iniciar sesión
        </Button>
      </div>
      <div className="mt-4 flex justify-between">
        <span className="text-[#3C3C3C]">No tienes una cuenta?</span>
        <Button variant="text" color="black" href="/registro">
          Regístrate
        </Button>
      </div>
    </div>
  );
};
