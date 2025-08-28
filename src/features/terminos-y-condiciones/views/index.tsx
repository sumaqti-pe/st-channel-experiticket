import { Container } from "@/shared/components/container/Container";
import { NavigationList } from "@/shared/components/navigation-list/NavigationList";
import PoliticasNavigation from "@/shared/data/politicas-navigation.json";

export const TerminosAndCondicionesView = () => {
  return (
    <Container className="bg-[#F9EEE8]">
      <section className="grid grid-cols-[auto_1fr] gap-10 py-[100px]  px-[30px] max-lg:grid-cols-1 max-lg:gap-6 max-lg:py-[32px] max-lg:px-[16px]">
        <NavigationList
          items={PoliticasNavigation}
        />
        <div className="bg-[#fff] rounded-xl flex flex-col gap-3 py-6">
          <div className="py-[17px] px-6">
            <h2 className="text-[32px] uppercase font-bold">
              Términos y condiciones
            </h2>
          </div>
          <div className="px-[60px] max-lg:px-6 max-lg:py-8">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-3">1. Introducción</h2>
              <p className="text-gray-700 leading-relaxed">
                Bienvenido a <strong>ExperiTicket</strong>. Al acceder y
                utilizar nuestros servicios aceptas los presentes Términos y
                Condiciones, que regulan el uso de la plataforma para la compra
                y gestión de entradas de eventos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-3">2. Uso del servicio</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  Solo puedes utilizar la plataforma si eres mayor de edad o
                  cuentas con la autorización de un representante legal.
                </li>
                <li>
                  Te comprometes a proporcionar información veraz y actualizada
                  en el registro y proceso de compra.
                </li>
                <li>
                  Está prohibido utilizar la plataforma para actividades
                  fraudulentas, ilegales o que perjudiquen a terceros.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-3">3. Compra de entradas</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  Las entradas adquiridas a través de ExperiTicket son válidas
                  únicamente para el evento, fecha y lugar indicados.
                </li>
                <li>
                  El número máximo de entradas por usuario puede estar limitado
                  por el organizador del evento.
                </li>
                <li>
                  Una vez confirmada la compra, recibirás tus entradas de forma
                  digital al correo registrado y en tu cuenta de usuario.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-3">
                4. Reembolsos y cancelaciones
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Los reembolsos están sujetos a la política del organizador del
                evento. En caso de cancelación, se reembolsará el importe total
                de las entradas adquiridas. Si el evento es reprogramado, tus
                entradas seguirán siendo válidas para la nueva fecha.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-3">
                5. Responsabilidad del usuario
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Eres responsable de mantener la confidencialidad de tu cuenta y
                de todas las actividades que se realicen con ella. ExperiTicket
                no se hace responsable por el mal uso de las entradas una vez
                entregadas al usuario.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-3">
                6. Limitación de responsabilidad
              </h2>
              <p className="text-gray-700 leading-relaxed">
                ExperiTicket actúa como intermediario entre organizadores y
                usuarios. No nos responsabilizamos por cambios en la
                programación, calidad del evento, cancelaciones ajenas a nuestra
                gestión ni por cualquier daño o perjuicio derivado de la
                asistencia al evento.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-3">
                7. Propiedad intelectual
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Todos los contenidos de la plataforma (logos, marcas, textos,
                imágenes, software) son propiedad de ExperiTicket o de terceros
                licenciantes. Queda prohibida su reproducción sin autorización
                expresa.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-3">8. Modificaciones</h2>
              <p className="text-gray-700 leading-relaxed">
                ExperiTicket podrá actualizar estos Términos y Condiciones en
                cualquier momento. Las modificaciones serán publicadas en la
                plataforma y entrarán en vigor en la fecha indicada.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="text-2xl font-bold mb-3">9. Contacto</h2>
              <p className="text-gray-700 leading-relaxed">
                Para consultas relacionadas con estos Términos y Condiciones
                puedes escribirnos a:{" "}
                <a
                  href="mailto:soporte@experiticket.com"
                  className="text-[#ED1C24] underline"
                >
                  soporte@experiticket.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </section>
    </Container>
  );
};
