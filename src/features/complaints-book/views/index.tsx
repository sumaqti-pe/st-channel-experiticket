"use client";
import { Button } from "@/shared/components/button/Button";
import { Checkbox } from "@/shared/components/checkbox/Checkbox";
import { Container } from "@/shared/components/container/Container";
import Divider from "@/shared/components/divider/Divier";
import { NavigationList } from "@/shared/components/navigation-list/NavigationList";
import { CustomSelect } from "@/shared/components/select/Select";
import { Textfield } from "@/shared/components/textfield/Textfield";
import { Textarea } from "@/shared/components/textfield/TextfieldTextarea";
import { Helper } from "@/shared/components/helper/Helper";
import PoliticasNavigation from "@/shared/data/politicas-navigation.json";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Link from "next/link";

const schema = yup.object({
  fullName: yup.string().required("El nombre es obligatorio"),
  email: yup
    .string()
    .email("Correo inválido")
    .required("El correo es obligatorio"),
  docType: yup.string().required("El tipo de documento es obligatorio"),
  docNumber: yup.string().required("El número de documento es obligatorio"),
  department: yup.string().required("El departamento es obligatorio"),
  province: yup.string().required("La provincia es obligatoria"),
  district: yup.string().required("El distrito es obligatorio"),
  address: yup.string().required("La dirección es obligatoria"),

  legalRep: yup.boolean().optional(),

  repName: yup.string().when("legalRep", {
    is: true,
    then: (schema) =>
      schema.required("El nombre del representante es obligatorio"),
    otherwise: (schema) => schema.optional(),
  }),
  repEmail: yup.string().when("legalRep", {
    is: true,
    then: (schema) =>
      schema
        .email("Correo inválido")
        .required("El correo del representante es obligatorio"),
    otherwise: (schema) => schema.optional(),
  }),
  repDocType: yup.string().when("legalRep", {
    is: true,
    then: (schema) =>
      schema.required("El tipo de documento del representante es obligatorio"),
    otherwise: (schema) => schema.optional(),
  }),
  repDocNumber: yup.string().when("legalRep", {
    is: true,
    then: (schema) =>
      schema.required(
        "El número de documento del representante es obligatorio"
      ),
    otherwise: (schema) => schema.optional(),
  }),

  orderNumber: yup.string().required("El número de pedido es obligatorio"),
  eventName: yup.string().required("El nombre del evento es obligatorio"),
  amount: yup.string().optional(),
  goodType: yup.string().required("El tipo de bien es obligatorio"),
  complaintType: yup.string().required("El tipo de reclamo es obligatorio"),
  description: yup.string().required("La descripción es obligatoria"),
  detail: yup.string().required("El detalle es obligatorio"),
  request: yup.string().required("El pedido es obligatorio"),

  declaration: yup
    .boolean()
    .oneOf([true], "Debes aceptar la declaración")
    .required(),
  terms: yup
    .boolean()
    .oneOf([true], "Debes aceptar los términos y condiciones")
    .required("Debes aceptar los términos y condiciones"),
});

type FormValues = {
  fullName: string;
  email: string;
  docType: string;
  docNumber: string;
  department: string;
  province: string;
  district: string;
  address: string;
  legalRep: boolean;
  repName?: string;
  repEmail?: string;
  repDocType?: string;
  repDocNumber?: string;
  orderNumber: string;
  eventName: string;
  amount: string;
  goodType: string;
  complaintType: string;
  description: string;
  detail: string;
  request: string;
  declaration: boolean;
  terms: boolean;
};

export const ComplaintsBookView = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormValues>({
    resolver: yupResolver(schema) as never,
    defaultValues: {
      legalRep: false,
      declaration: false,
      terms: false,
    },
  });

  const legalRep = watch("legalRep");

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <Container className="bg-[#F9EEE8]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="grid grid-cols-[auto_1fr] gap-10 py-[100px] px-[30px] max-lg:grid-cols-1 max-lg:gap-6 max-lg:py-[32px] max-lg:px-[16px]">
          <NavigationList items={PoliticasNavigation} />
          <div className="bg-white rounded-xl flex flex-col gap-3 py-6">
            <div className="py-[17px] px-6 w-full max-lg:text-center">
              <h2 className="text-[32px] uppercase font-bold">
                libro de reclamaciones
              </h2>
            </div>
            <div className="py-[17px] flex flex-col gap-4 px-[60px] max-lg:px-4">
              <span className="max-lg:text-justify">
                La empresa Experiticket S.A.C., con RUC N° 20512345678, pone a
                disposición el libro de reclamaciones con el fin de que los
                consumidores y usuarios puedan presentar sus quejas y reclamos
                de manera formal.
              </span>

              <Divider
                orientation="horizontal"
                variant="solid"
                className="my-4"
              />

              <h2 className="text-[24px] uppercase max-lg:text-center">
                Información del consumidor
              </h2>
              <div className="grid grid-cols-2 gap-10 max-lg:grid-cols-1 max-lg:gap-5">
                <Textfield
                  label="Nombres y apellidos *"
                  placeholder="Ingrese su nombre completo"
                  {...register("fullName")}
                  error={!!errors.fullName?.message}
                  helper={errors.fullName?.message}
                />
                <Textfield
                  label="Correo electrónico *"
                  placeholder="Ingrese su correo electrónico"
                  {...register("email")}
                  error={!!errors.email?.message}
                  helper={errors.email?.message}
                />
              </div>
              <div className="grid grid-cols-2 gap-10 max-lg:grid-cols-1 max-lg:gap-5">
                <Textfield
                  label="Tipo de documento *"
                  placeholder="Ingrese su tipo de documento"
                  {...register("docType")}
                  error={!!errors.docType?.message}
                  helper={errors.docType?.message}
                />
                <Textfield
                  label="Número de documento *"
                  placeholder="Ingrese su número de documento"
                  {...register("docNumber")}
                  error={!!errors.docNumber?.message}
                  helper={errors.docNumber?.message}
                />
              </div>
              <div className="grid grid-cols-2 gap-10 max-lg:grid-cols-1 max-lg:gap-5">
                <Textfield
                  label="Departamento *"
                  placeholder="Ingrese su departamento"
                  {...register("department")}
                  error={!!errors.department?.message}
                  helper={errors.department?.message}
                />
                <Textfield
                  label="Provincia *"
                  placeholder="Ingrese su provincia"
                  {...register("province")}
                  error={!!errors.province?.message}
                  helper={errors.province?.message}
                />
              </div>
              <div className="grid grid-cols-2 gap-10 max-lg:grid-cols-1 max-lg:gap-5">
                <Textfield
                  label="Distrito *"
                  placeholder="Ingrese su distrito"
                  {...register("district")}
                  error={!!errors.district?.message}
                  helper={errors.district?.message}
                />
                <Textfield
                  label="Dirección *"
                  placeholder="Ingrese su dirección"
                  {...register("address")}
                  error={!!errors.address?.message}
                  helper={errors.address?.message}
                />
              </div>

              <div className="border rounded-lg border-gray-300">
                <div className="flex items-start gap-2 bg-[#F5F5F5] p-4 rounded-lg">
                  <Checkbox id="legalRep" {...register("legalRep")} />
                  <label
                    htmlFor="legalRep"
                    className="uppercase text-sm leading-snug"
                  >
                    ¿Presenta el reclamo en representación de un tercero?
                  </label>
                </div>
                {legalRep && (
                  <div className="flex flex-col gap-3 py-4 px-6">
                    <h2 className="text-[18px] uppercase text-center mb-4">
                      Información del tercero
                    </h2>
                    <div className="grid grid-cols-2 gap-10 max-lg:grid-cols-1 max-lg:gap-5">
                      <Textfield
                        label="Nombre completo *"
                        placeholder="Ingrese su nombre completo"
                        {...register("repName")}
                        error={!!errors.repName?.message}
                        helper={errors.repName?.message}
                      />
                      <Textfield
                        label="Correo electrónico *"
                        placeholder="Ingrese su correo electrónico"
                        {...register("repEmail")}
                        error={!!errors.repEmail?.message}
                        helper={errors.repEmail?.message}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-10 max-lg:grid-cols-1 max-lg:gap-5">
                      <Textfield
                        label="Tipo de documento *"
                        placeholder="Ingrese su tipo de documento"
                        {...register("repDocType")}
                        error={!!errors.repDocType?.message}
                        helper={errors.repDocType?.message}
                      />
                      <Textfield
                        label="Número de documento *"
                        placeholder="Ingrese su número de documento"
                        {...register("repDocNumber")}
                        error={!!errors.repDocNumber?.message}
                        helper={errors.repDocNumber?.message}
                      />
                    </div>
                  </div>
                )}
              </div>

              <Divider
                orientation="horizontal"
                variant="solid"
                className="my-4"
              />

              <h2 className="text-[24px] uppercase">
                Detalle del reclamo / queja
              </h2>
              <div className="grid grid-cols-2 gap-10 max-lg:grid-cols-1 max-lg:gap-5">
                <Textfield
                  label="Número de pedido / ticket *"
                  placeholder="Ingrese su número de pedido"
                  {...register("orderNumber")}
                  error={!!errors.orderNumber?.message}
                  helper={errors.orderNumber?.message}
                />
                <Textfield
                  label="Nombre del evento *"
                  placeholder="Ingrese su nombre del evento"
                  {...register("eventName")}
                  error={!!errors.eventName?.message}
                  helper={errors.eventName?.message}
                />
              </div>
              <div className="grid grid-cols-2 gap-10 max-lg:grid-cols-1 max-lg:gap-5">
                <Textfield
                  label="Monto involucrado (si corresponde)"
                  placeholder="Ingrese el monto"
                  {...register("amount")}
                  error={!!errors.amount?.message}
                  helper={errors.amount?.message}
                />
                <CustomSelect
                  label="Tipo de bien *"
                  placeholder="Seleccione el tipo de bien"
                  options={[
                    { label: "Entrada a evento", value: "entrada_evento" },
                    {
                      label: "Servicio adicional",
                      value: "servicio_adicional",
                    },
                  ]}
                  {...register("goodType")}
                  error={!!errors.goodType?.message}
                  helper={errors.goodType?.message}
                />
              </div>
              <CustomSelect
                label="Tipo de reclamo *"
                placeholder="Seleccione el tipo de reclamo"
                options={[
                  { label: "Reclamo", value: "reclamo" },
                  { label: "Queja", value: "queja" },
                ]}
                {...register("complaintType")}
                error={!!errors.complaintType?.message}
                helper={errors.complaintType?.message}
              />

              <Textarea
                label="Descripción breve *"
                placeholder="Ingrese una breve descripción"
                rows={2}
                {...register("description")}
                error={!!errors.description?.message}
                helper={errors.description?.message}
              />
              <Textarea
                label="Detalle *"
                placeholder="Explica lo sucedido"
                {...register("detail")}
                error={!!errors.detail?.message}
                helper={errors.detail?.message}
              />
              <Textarea
                label="Pedido *"
                placeholder="La solución que solicita"
                {...register("request")}
                error={!!errors.request?.message}
                helper={errors.request?.message}
              />

              <div className="flex items-start gap-2">
                <Checkbox id="declaration" {...register("declaration")} />
                <label htmlFor="declaration" className="text-sm leading-snug">
                  Declaro que los datos consignados son verídicos y autorizo la
                  comunicación vía correo electrónico.
                </label>
              </div>
              {errors.declaration && (
                <Helper error>{errors.declaration.message}</Helper>
              )}

              <div className="flex items-start gap-2">
                <Checkbox id="terms" {...register("terms")} />
                <label htmlFor="terms" className="text-sm leading-snug">
                  He leído y aceptado los{" "}
                  <span className="font-bold text-[#ED1C24] underline cursor-pointer">
                    Términos y condiciones
                  </span>{" "}
                  y la{" "}
                  <Link href="/politicas-de-privacidad">
                    <span className="font-bold text-[#ED1C24] underline cursor-pointer">
                      Política de privacidad
                    </span>
                  </Link>
                </label>
              </div>
              {errors.terms && <Helper error>{errors.terms.message}</Helper>}
              <Divider
                orientation="horizontal"
                variant="solid"
                className="my-4"
              />
              <div className="flex flex-col gap-2">
                {" "}
                <h2 className="text-lg font-semibold">Notas:</h2>{" "}
                <p>
                  {" "}
                  El proveedor debe dar respuesta al reclamo en un plazo no
                  mayor a quince (15) días hábiles, el cual podrá ser extendido
                  de manera excepcional.{" "}
                </p>{" "}
                <p>
                  {" "}
                  De no obtener respuesta, el consumidor podrá acudir a otras
                  vías para resolver su controversia e incluso presentar una
                  denuncia ante INDECOPI.{" "}
                </p>{" "}
                <div className="flex flex-col gap-2">
                  {" "}
                  <span>
                    {" "}
                    <strong>Razón Social:</strong> EXPERITICKET S.A.C.{" "}
                  </span>{" "}
                  <span>
                    {" "}
                    <strong>RUC:</strong> 20512345678{" "}
                  </span>{" "}
                  <span>
                    {" "}
                    <strong>Dirección:</strong> Av. Siempre Viva 123{" "}
                  </span>{" "}
                  <span>
                    {" "}
                    <strong>Correo:</strong> contacto@experiticket.com{" "}
                  </span>{" "}
                </div>{" "}
              </div>
              <div className="flex justify-end max-lg:pt-2">
                <Button color="red" type="submit" className="max-lg:hidden">
                  Enviar
                </Button>
                <Button
                  color="red"
                  type="submit"
                  className="min-lg:hidden"
                  isBlock
                >
                  Enviar
                </Button>
              </div>
            </div>
          </div>
        </section>
      </form>
    </Container>
  );
};
