import { Container } from "@/shared/components/container/Container";
import { NavigationList } from "@/shared/components/navigation-list/NavigationList";
import PoliticasNavigation from "@/shared/data/politicas-navigation.json";

export const PoliticasView = () => {
  return (
    <Container className="bg-[#F9EEE8]">
      <section className="grid grid-cols-[auto_1fr] gap-10 py-[100px]  px-[30px] max-lg:grid-cols-1 max-lg:gap-6 max-lg:py-[32px] max-lg:px-[16px]">
        <NavigationList items={PoliticasNavigation} />
        <div className="bg-[#fff] rounded-xl flex flex-col gap-3 py-6">
          <div className="py-[17px] px-6">
            <h2 className="text-[32px] uppercase font-bold">
              políticas de privacidad
            </h2>
          </div>
          <div className="px-[60px] max-lg:px-6 max-lg:py-8">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-3">1. Introducción</h2>
              <p className="text-gray-700 leading-relaxed">
                En <strong>ExperiTicket</strong> respetamos tu privacidad y
                estamos comprometidos con la protección de los datos personales
                que compartes con nosotros al utilizar nuestros servicios.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-3">
                2. Datos que recopilamos
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  Datos de registro: nombre, correo electrónico, contraseña.
                </li>
                <li>
                  Datos de pago: número de tarjeta, información de facturación.
                </li>
                <li>
                  Datos de uso: historial de compras, eventos visitados,
                  búsquedas.
                </li>
                <li>Datos técnicos: dirección IP, navegador, dispositivo.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-3">
                3. Finalidad del tratamiento
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Utilizamos tus datos para:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
                <li>Gestionar la compra y entrega de entradas.</li>
                <li>
                  Enviar confirmaciones, recordatorios y comunicaciones sobre
                  eventos.
                </li>
                <li>Ofrecer soporte y resolver incidencias.</li>
                <li>
                  Enviarte información sobre promociones y novedades (si lo
                  autorizas).
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-3">4. Base legal</h2>
              <p className="text-gray-700 leading-relaxed">
                Tratamos tus datos conforme a la legislación aplicable en
                protección de datos, en base a tu consentimiento, la ejecución
                de un contrato o el cumplimiento de obligaciones legales.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-3">
                5. Compartición de datos
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Tus datos no serán vendidos ni cedidos a terceros. Únicamente
                podrán compartirse con:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
                <li>Proveedores de servicios de pago y bancos.</li>
                <li>Promotores de eventos para la gestión de accesos.</li>
                <li>Autoridades competentes en caso de requerimiento legal.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-3">
                6. Conservación de datos
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Conservaremos tus datos personales mientras mantengas una cuenta
                activa en ExperiTicket o durante el tiempo necesario para
                cumplir con nuestras obligaciones legales.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-3">
                7. Derechos del usuario
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Puedes ejercer tus derechos en cualquier momento:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
                <li>Acceder a tus datos.</li>
                <li>Rectificar datos incorrectos.</li>
                <li>Solicitar la eliminación de tus datos.</li>
                <li>Oponerte al tratamiento con fines comerciales.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                Para ejercerlos, envía una solicitud a:{" "}
                <a
                  href="mailto:soporte@experiticket.com"
                  className="text-[#ED1C24] underline hover:text-[#ED1C24]"
                >
                  soporte@experiticket.com
                </a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-3">8. Seguridad</h2>
              <p className="text-gray-700 leading-relaxed">
                Implementamos medidas de seguridad técnicas y organizativas para
                proteger tus datos contra accesos no autorizados, pérdida o
                alteración.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-3">
                9. Cambios en esta política
              </h2>
              <p className="text-gray-700 leading-relaxed">
                ExperiTicket se reserva el derecho de actualizar esta política
                en cualquier momento. Publicaremos los cambios en esta página
                con fecha de actualización.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="text-2xl font-bold mb-3">10. Contacto</h2>
              <p className="text-gray-700 leading-relaxed">
                Si tienes dudas sobre nuestra Política de Privacidad, escríbenos
                a:{" "}
                <a
                  href="mailto:soporte@experiticket.com"
                  className="text-[#ED1C24] underline hover:text-[#ED1C24]"
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
