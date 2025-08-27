import * as yup from "yup";

export const checkoutFormSchema = yup.object().shape({
  fullName: yup.string().required("El nombre es obligatorio"),
  email: yup
    .string()
    .email("El correo no es válido")
    .required("El correo es obligatorio"),
  phone: yup
    .string()
    .matches(/^[\d\s+]+$/, "El teléfono solo puede contener números y espacios")
    .required("El teléfono es obligatorio"),
  documentNumber: yup
    .string()
    .matches(/^\d{8}$/, "El número de documento debe tener 8 dígitos")
    .required("El número de documento es obligatorio"),
  documentType: yup.string().required("El tipo de documento es obligatorio"),
});

export type CheckoutFormDto = yup.InferType<typeof checkoutFormSchema>;
