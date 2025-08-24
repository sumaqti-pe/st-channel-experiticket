import { Facebook } from "@/shared/icons/Facebook";
import { Instagram } from "@/shared/icons/Instagram";
import { Tiktok } from "@/shared/icons/Tiktok";
import Divider from "../divider/Divier";
import { LogoPrimary } from "@/shared/icons/LogoPrimary";
import { LogoPrimaryMobile } from "@/shared/icons/LogoPrimaryMobile";

export const Footer = () => {
  return (
    <footer className="w-full py-[52px] px-[30px] flex flex-col gap-6">
      <ul className="flex justify-between text-base max-lg:flex-col max-lg:gap-8">
        <li className="max-lg:hidden">
          <LogoPrimary />
        </li>
        <li className="min-lg:hidden flex justify-between">
          <LogoPrimaryMobile />
          <div>asdfs</div>
        </li>
        <li className="flex flex-col gap-[19px]">
          <h2 className="uppercase font-bold">conócenos</h2>
          <p>Acerca de nosotros</p>
          <p>Ayuda & Soporte</p>
          <p>Partners</p>
        </li>
        <li className="flex flex-col gap-[19px]">
          <h2 className="uppercase font-bold">fan support</h2>
          <p>Recibir ayuda</p>
          <p>Preguntas frecuentes</p>
          <p>Solicitar un reembolso</p>
        </li>
        <li className="flex flex-col gap-4">
          <p>
            Suscríbete y mantente informado sobre nuestros eventos y ofertas
          </p>
          <input type="text" />
          <div>Acepto los términos y condiciones</div>
        </li>
      </ul>
      <Divider />
      <div className="flex flex-col gap-2 max-lg:text-center max-lg:gap-4">
        <div className="flex items-center justify-between max-lg:flex-col max-lg:gap-4">
          <ul className="uppercase flex items-center text-base gap-[19px] max-lg:flex-col">
            <li>términos y condiciones</li>
            <li>política de privacidad</li>
            <li>preguntas frecuentes</li>
            <li>libro de reclamaciones</li>
          </ul>
          <div className="flex items-center gap-3 max-lg:hidden">
            <Instagram />
            <Tiktok />
            <Facebook />
          </div>
        </div>
        <p className="text-sm text-[#3C3C3C]">
          © 2025 EXPERITICKET. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};
