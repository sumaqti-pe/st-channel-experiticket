import { Accordion } from "@/shared/components/accordion/Accordion";
import { NavigationList } from "@/shared/components/navigation-list/NavigationList";

export const FaqsView = () => {
  return (
    <section className="grid grid-cols-[auto_1fr] gap-10 py-[100px] bg-[#F9EEE8] px-[30px] max-lg:grid-cols-1 max-lg:gap-6 max-lg:py-[32px] max-lg:px-[16px]">
      <NavigationList
        items={[
          {
            label: "Preguntas Frecuentes",
            href: "/preguntas-frecuentes",
          },
          {
            label: "Términos y condiciones",
            href: "/terminos-y-condiciones",
          },
          {
            label: "Políticas de privacidad",
            href: "/politicas-de-privacidad",
          },
          {
            label: "Política de cookies",
            href: "/politica-de-cookies",
          },
        ]}
      />
      <div className="bg-[#fff] rounded-xl flex flex-col gap-3 py-6">
        <div className="py-[17px] px-6">
          <h2 className="text-[32px] uppercase font-bold">
            preguntas frecuentes
          </h2>
        </div>
        <Accordion label="Pregunta uno">
          Lorem ipsum dolor sit amet consectetur. Diam dictumst volutpat
          fringilla convallis bibendum sit commodo. Ac lorem mi maecenas est
          euismod laoreet mattis magna. Natoque nec consectetur tincidunt sed
          tempus leo et amet.
        </Accordion>
        <Accordion label="Pregunta dos">
          Lorem ipsum dolor sit amet consectetur. Diam dictumst volutpat
          fringilla convallis bibendum sit commodo. Ac lorem mi maecenas est
          euismod laoreet mattis magna. Natoque nec consectetur tincidunt sed
          tempus leo et amet.
        </Accordion>
      </div>
    </section>
  );
};
