import { Button } from "@/shared/components/button/Button";
import { Textfield } from "@/shared/components/textfield/Textfield";
import { TextfieldPassword } from "@/shared/components/textfield/TextfieldPassword";

export const RecoveryPasswordView = () => {
  return (
    <div className="flex flex-col gap-3">
      <form className="flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <Textfield label="Correo" placeholder="Ingresa tu correo" />
          <div className="flex flex-col gap-4">
            <TextfieldPassword
              label="Contraseña"
              placeholder="Ingresa tu contraseña"
            />
            <div className="flex justify-end">
              <Button variant="text" color="black">
                Olvidé mi contraseña
              </Button>
            </div>
          </div>
        </div>
        <Button isBlock color="black">
          Iniciar sesión
        </Button>
      </form>
      <div className="mt-4 flex justify-between">
        <span className="text-[#3C3C3C]">No tienes una cuenta? </span>
        <Button variant="text" color="black" href="/registro">
          Regístrate
        </Button>
      </div>
    </div>
  );
};
