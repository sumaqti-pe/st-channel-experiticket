import { CustomSelect } from "@/shared/components/select/Select";
import { Textfield } from "@/shared/components/textfield/Textfield";
import { Carnet } from "@/shared/icons/Carnet";
import { useFormContext } from "react-hook-form";

export const PaymentForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="w-[600px] flex flex-col gap-8 max-lg:w-full">
      <span className="uppercase font-bold text-2xl flex items-center gap-3">
        <Carnet />
        datos
      </span>
      <Textfield
        label="Nombres y apellidos"
        placeholder="Ingresa tu nombre completo"
        {...register("fullName")}
        error={!!errors.fullName?.message}
        helper={errors.fullName?.message as string}
      />
      <Textfield
        label="Correo electrónico"
        placeholder="Ingresa tu correo"
        {...register("email")}
        error={!!errors.email?.message}
        helper={errors.email?.message as string}
      />
      <Textfield
        label="Télefono celular"
        placeholder="Ingresa tu celular"
        {...register("phone")}
        error={!!errors.phone?.message}
        helper={errors.phone?.message as string}
      />
      <div className="flex justify-between gap-[31px] max-lg:flex-col">
        <div className="w-[450px] max-lg:w-full">
          <CustomSelect
            label="tipo de documento"
            placeholder="Escoge un documento"
            options={[
              {
                value: "dni",
                label: "DNI",
              },
            ]}
            {...register("documentType")}
            error={!!errors.documentType?.message}
            helper={errors.documentType?.message as string}
          />
        </div>
        <div className="w-full">
          <Textfield
            label="Número de documento"
            placeholder="Ingresa tu documento de identidad"
            {...register("documentNumber")}
            error={!!errors.documentNumber?.message}
            helper={errors.documentNumber?.message as string}
          />
        </div>
      </div>
    </div>
  );
};
