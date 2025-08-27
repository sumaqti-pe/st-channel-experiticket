import { Facebook } from "@/shared/icons/Facebook";
import { Instagram } from "@/shared/icons/Instagram";
import { Tiktok } from "@/shared/icons/Tiktok";
import Divider from "../divider/Divier";
import { LogoPrimary } from "@/shared/icons/LogoPrimary";
import { LogoPrimaryMobile } from "@/shared/icons/LogoPrimaryMobile";
import { CircleButton } from "../circle-button/CircleButton";
import { SubscribeForm } from "../subscribe-form/SubscribeForm";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full py-[52px] px-[100px] flex flex-col gap-6 max-lg:px-[16px]">
      <ul className="flex justify-between text-base max-lg:flex-col max-lg:gap-8">
        <li className="max-lg:hidden">
          <Link href="/" aria-label="Ir al inicio">
            <LogoPrimary />
          </Link>
        </li>
        <li className="min-lg:hidden flex justify-between items-center">
          <Link href="/" aria-label="Ir al inicio">
            <LogoPrimaryMobile />
          </Link>
          <div className="flex gap-3">
            <CircleButton
              href="https://www.instagram.com/experiticket_oficial/"
              target="_blank"
              aria-label="Instagram"
            >
              <Instagram />
            </CircleButton>
            <CircleButton
              href="https://www.tiktok.com/@experiticketpe"
              target="_blank"
              aria-label="TikTok"
            >
              <Tiktok />
            </CircleButton>
            <CircleButton
              href="https://www.facebook.com/experiticket"
              target="_blank"
              aria-label="Facebook"
            >
              <Facebook />
            </CircleButton>
          </div>
        </li>
        <li className="flex flex-col gap-[19px]">
          <h2 id="footer-conocenos" className="uppercase font-bold">
            conócenos
          </h2>
          <p>
            <a href="/nosotros">Acerca de nosotros</a>
          </p>
          <p>
            <a href="/soporte">Ayuda & Soporte</a>
          </p>
          <p>
            <a href="/partners">Partners</a>
          </p>
        </li>
        <li className="flex flex-col gap-[19px]">
          <h2 id="footer-fan-support" className="uppercase font-bold">
            fan support
          </h2>
          <p>
            <a href="/ayuda">Recibir ayuda</a>
          </p>
          <p>
            <a href="/faq">Preguntas frecuentes</a>
          </p>
          <p>
            <a href="/reembolsos">Solicitar un reembolso</a>
          </p>
        </li>
        <li>
          <SubscribeForm />
        </li>
      </ul>
      <Divider />
      <div className="flex flex-col gap-2 max-lg:text-center max-lg:gap-4">
        <div className="flex items-center justify-between max-lg:flex-col max-lg:gap-4">
          <ul className="uppercase flex items-center text-base gap-[19px] max-lg:flex-col">
            <li>
              <a href="/terminos">Términos y condiciones</a>
            </li>
            <li>
              <a href="/privacidad">Política de privacidad</a>
            </li>
            <li>
              <a href="/faq">Preguntas frecuentes</a>
            </li>
            <li>
              <a href="/libro-de-reclamaciones">Libro de reclamaciones</a>
            </li>
          </ul>
          <div className="flex items-center gap-3 max-lg:hidden">
            <a
              href="https://www.instagram.com/experiticket_oficial/"
              target="_blank"
              aria-label="Instagram"
            >
              <Instagram />
            </a>
            <a
              href="https://www.tiktok.com/@experiticketpe"
              target="_blank"
              aria-label="TikTok"
            >
              <Tiktok />
            </a>
            <a
              href="https://www.facebook.com/experiticket"
              target="_blank"
              aria-label="Facebook"
            >
              <Facebook />
            </a>
          </div>
        </div>
        <p className="text-sm text-[#3C3C3C]">
          © 2025 <strong>EXPERITICKET</strong>. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};
