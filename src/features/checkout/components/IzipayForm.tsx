"use client";
import { useEffect } from "react";

interface Props {
  publicKey: string;
  formToken: string;
  onClose: () => void; // callback para cerrar
}

export const IzipayForm = ({ publicKey, formToken, onClose }: Props) => {
  useEffect(() => {
    // Bloquear scroll al abrir
    document.body.style.overflow = "hidden";

    // Cargar librería Krypton
    const script = document.createElement("script");
    script.src =
      "https://static.micuentaweb.pe/static/js/krypton-client/V4.0/stable/kr-payment-form.min.js";
    script.async = true;
    script.setAttribute("kr-public-key", publicKey);
    script.setAttribute("kr-post-url-success", "result");
    script.setAttribute("kr-language", "es-Es");
    document.body.appendChild(script);

    const scriptExt = document.createElement("script");
    scriptExt.src =
      "https://static.micuentaweb.pe/static/js/krypton-client/V4.0/ext/classic.js";
    document.body.appendChild(scriptExt);

    return () => {
      // Restaurar scroll
      document.body.style.overflow = "auto";

      // Limpiar scripts
      document.body.removeChild(script);
      document.body.removeChild(scriptExt);
    };
  }, [publicKey]);

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 relative">
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>

        {/* Formulario de Izipay */}
        <div
          id="micuentawebstd_rest_wrapper"
          className="w-[400px] max-w-full"
        >
          <div className="kr-embedded" kr-form-token={formToken}></div>
        </div>
      </div>
    </div>
  );
};
