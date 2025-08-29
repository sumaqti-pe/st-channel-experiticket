"use client";
import { Button } from "@/shared/components/button/Button";
import { LogoPrimary } from "@/shared/icons/LogoPrimary";
import { config } from "@/shared/utils/config";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const { IZIPAY_PUBLIC_KEY } = config();

export default function IzipayPage() {
  const searchParams = useSearchParams();
  const formToken = searchParams.get("token");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (!showForm) return;

    document.body.style.overflow = "hidden";

    const script = document.createElement("script");
    script.src =
      "https://static.micuentaweb.pe/static/js/krypton-client/V4.0/stable/kr-payment-form.min.js";
    script.async = true;
    script.setAttribute("kr-public-key", IZIPAY_PUBLIC_KEY);
    script.setAttribute("kr-post-url-success", "result");
    script.setAttribute("kr-language", "es-Es");
    document.body.appendChild(script);

    const scriptExt = document.createElement("script");
    scriptExt.src =
      "https://static.micuentaweb.pe/static/js/krypton-client/V4.0/ext/classic.js";
    document.body.appendChild(scriptExt);

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://static.micuentaweb.pe/static/js/krypton-client/V4.0/ext/classic.css";
    document.head.appendChild(link);

    return () => {
      document.body.style.overflow = "auto";
      document.body.removeChild(script);
      document.body.removeChild(scriptExt);
    };
  }, [showForm]);

  if (!formToken) return null;

  return (
    <div className="w-[400px] max-w-full flex flex-col gap-15 justify-between bg-[#fff] p-6">
      {!showForm ? (
        <>
          <div className="flex flex-col gap-10">
            <div className="flex justify-center my-4">
              <LogoPrimary />
            </div>
            <div className="flex flex-col gap-3 px-4">
              <p className="text-sm font-bold text-[#606060]">
                Escoge un método de pago
              </p>
              <div>
                <div className="flex items-center gap-3 py-3 rounded-lg cursor-pointer hover:border-red-500 transition-colors">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    defaultChecked
                    className="appearance-none w-5 h-5 border-2 border-gray-400 rounded-full checked:bg-red-500 checked:border-red-500 relative
                      after:content-[''] after:w-2 after:h-2 after:bg-white after:rounded-full after:absolute after:top-1/2 after:left-1/2 
                      after:-translate-x-1/2 after:-translate-y-1/2 checked:after:block after:hidden"
                  />
                  <span className="text-gray-800 font-medium">
                    Tarjeta de crédito/débito
                  </span>
                </div>

                <div className="flex flex-col gap-3">
                  <p>Paga con tarjeta de crédito o débito</p>
                  <div className="flex items-center gap-2">
                    <Image
                      src={"/visa-brand.png"}
                      alt="Visa"
                      width={60}
                      height={60}
                    />
                    <Image
                      src={"/mastercard-brand.png"}
                      alt="MC"
                      width={60}
                      height={60}
                    />
                    <Image
                      src={"/diners-brand.png"}
                      alt="Diners"
                      width={80}
                      height={60}
                    />
                    <Image
                      src={"/american-brand.png"}
                      alt="Amex"
                      width={40}
                      height={40}
                    />
                    <Image
                      src={"/union-brand.png"}
                      alt="UnionPay"
                      width={60}
                      height={40}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <Button color="black" isBlock onClick={() => setShowForm(true)}>
              Continuar
            </Button>
          </div>
        </>
      ) : (
        <div id="micuentawebstd_rest_wrapper" className="w-full flex flex-col gap-10 h-full">
          <div className="flex justify-center my-4">
            <LogoPrimary />
          </div>

          <div className="kr-embedded" kr-form-token={formToken}></div>
        </div>
      )}
    </div>
  );
}
