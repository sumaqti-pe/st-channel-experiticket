import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().email().required("El correo es obligatorio"),
  password: yup.string().required("La contraseña es obligatoria"),
});

export type LoginFormDto = yup.InferType<typeof loginSchema>;
