import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { LoginFormDto, loginSchema } from "../schemas/loginSchema";

export const useLogin = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<LoginFormDto>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormDto) => {};

  return {
    errors,
    register,
    handleSubmit,
    onSubmit,
  };
};
