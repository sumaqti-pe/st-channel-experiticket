import { Accordion } from "@/shared/components/accordion/Accordion";
import { Container } from "@/shared/components/container/Container";
import { NavigationList } from "@/shared/components/navigation-list/NavigationList";
import PoliticasNavigation from "@/shared/data/politicas-navigation.json";

export const FaqsView = () => {
  return (
    <Container className="bg-[#F9EEE8]">
      <section className="grid grid-cols-[auto_1fr] gap-10 py-[100px]  px-[30px] max-lg:grid-cols-1 max-lg:gap-6 max-lg:py-[32px] max-lg:px-[16px]">
        <NavigationList items={PoliticasNavigation} />
        <div className="bg-[#fff] rounded-xl flex flex-col gap-3 py-6">
          <div className="py-[17px] px-6">
            <h2 className="text-[32px] uppercase font-bold">
              preguntas frecuentes
            </h2>
          </div>
          <Accordion label="¿Cómo puedo comprar mis entradas en ExperiTicket?">
            Solo tienes que buscar el evento en el buscador, seleccionar la
            cantidad de entradas y proceder al pago. Recibirás un correo
            electrónico con tu confirmación y tus entradas digitales.
          </Accordion>

          <Accordion label="¿Qué métodos de pago aceptan?">
            Aceptamos tarjetas de crédito y débito (Visa, MasterCard, American
            Express), pagos con billeteras digitales (PayPal, Apple Pay, Google
            Pay) y transferencias en bancos aliados.
          </Accordion>

          <Accordion label="¿Cómo recibo mis entradas después de la compra?">
            Una vez confirmado el pago, tus entradas se enviarán automáticamente
            a tu correo electrónico registrado. También podrás descargarlas
            desde tu cuenta en ExperiTicket.
          </Accordion>

          <Accordion label="¿Puedo pedir un reembolso si no puedo asistir al evento?">
            Depende de la política del organizador del evento. Si el reembolso
            está disponible, podrás solicitarlo desde tu cuenta en la sección
            &quot;Mis Entradas&quot;. Si el evento fue cancelado, el reembolso
            se genera de forma automática.
          </Accordion>

          <Accordion label="¿Qué pasa si el evento se cancela o se pospone?">
            En caso de cancelación, recibirás el reembolso total de tus
            entradas. Si el evento se pospone, tus entradas seguirán siendo
            válidas para la nueva fecha.
          </Accordion>

          <Accordion label="¿Cómo sé si mi compra fue exitosa?">
            Recibirás un correo de confirmación al finalizar la compra. También
            puedes verificar el estado de tu pedido en tu perfil dentro de
            ExperiTicket.
          </Accordion>

          <Accordion label="¿Es seguro comprar en ExperiTicket?">
            Sí. Utilizamos encriptación SSL y pasarelas de pago seguras para
            proteger tu información. Nunca almacenamos los datos completos de
            tus tarjetas.
          </Accordion>

          <Accordion label="¿Puedo transferir mis entradas a otra persona?">
            Sí, siempre que el organizador lo permita. Podrás reenviar la
            entrada digital desde tu cuenta a otro correo electrónico.
          </Accordion>

          <Accordion label="¿Debo imprimir mi entrada o puedo mostrarla desde el móvil?">
            No es necesario imprimirla. Todos nuestros eventos aceptan entradas
            digitales, solo debes mostrar el código QR desde tu móvil en el
            acceso.
          </Accordion>

          <Accordion label="¿Puedo comprar varias entradas en una sola transacción?">
            Sí, puedes seleccionar la cantidad de entradas disponibles antes de
            finalizar la compra. El límite puede variar según las políticas del
            organizador.
          </Accordion>

          <Accordion label="¿Qué hago si no recibí mis entradas por correo electrónico?">
            Primero revisa tu carpeta de spam o promociones. Si no las
            encuentras, inicia sesión en tu cuenta de ExperiTicket y descárgalas
            desde la sección &quot;Mis Entradas&quot;.
          </Accordion>

          <Accordion label="¿Ofrecen entradas físicas además de digitales?">
            La mayoría de nuestros eventos solo emiten entradas digitales. Sin
            embargo, algunos organizadores pueden habilitar el retiro de
            entradas físicas en taquilla.
          </Accordion>

          <Accordion label="¿Puedo cambiar de asiento después de comprar la entrada?">
            No es posible realizar cambios una vez confirmada la compra, salvo
            que el organizador lo permita expresamente.
          </Accordion>

          <Accordion label="¿Qué hago si pierdo acceso a mi cuenta?">
            Puedes recuperar tu cuenta seleccionando la opción &quot;Olvidé mi
            contraseña&quot; en la página de inicio de sesión. Si necesitas más
            ayuda, contáctanos a través de soporte.
          </Accordion>

          <Accordion label="¿Dónde puedo ver mis compras anteriores?">
            En tu perfil de usuario encontrarás la sección &quot;Mis
            Entradas&quot;, donde podrás consultar tus compras pasadas y
            descargar tus tickets nuevamente si lo necesitas.
          </Accordion>
        </div>
      </section>
    </Container>
  );
};
