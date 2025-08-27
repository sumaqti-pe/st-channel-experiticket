import { Check, X } from "lucide-react";

type Props = {
  password: string;
  confirmPassword: string;
};

export const PasswordChecklist = ({ password, confirmPassword }: Props) => {
  const rules = [
    {
      label: "Contraseñas coinciden",
      valid: password !== "" && password === confirmPassword,
    },
    {
      label: "8 a 16 caracteres",
      valid: password?.length >= 8 && password?.length <= 16,
    },
    {
      label: "Mínimo una letra mayúscula",
      valid: /[A-Z]/.test(password),
    },
    {
      label: "Mínimo una letra minúscula",
      valid: /[a-z]/.test(password),
    },
    {
      label: "Mínimo un símbolo (“@+?.%&#$!-) ",
      valid: /[@+?.%&#$!\-]/.test(password),
    },
    {
      label: "Mínimo un número",
      valid: /\d/.test(password),
    },
    {
      label: "Sin espacios",
      valid: !/\s/.test(password),
    },
  ];

  return (
    <ul className="flex flex-col gap-2 text-sm">
      {rules.map((rule, i) => (
        <li
          key={i}
          className={`flex items-center gap-2 ${
            rule.valid ? "text-green-600" : "text-gray-500"
          }`}
        >
          {rule.valid ? (
            <Check className="w-4 h-4" />
          ) : (
            <X className="w-4 h-4 text-red-500" />
          )}
          {rule.label}
        </li>
      ))}
    </ul>
  );
};
