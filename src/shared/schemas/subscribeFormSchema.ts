import * as yup from "yup";

export const subscribeFormSchema = yup.object({
  email: yup
    .string()
    .email("Dirección de correo electrónico inválida")
    .required("Este campo es obligatorio"),
  terms: yup
    .boolean()
    .oneOf([true], "Debes aceptar los términos y condiciones")
    .required("Debes aceptar los términos y condiciones"),
});

export type SubscribeFormData = yup.InferType<typeof subscribeFormSchema>;
