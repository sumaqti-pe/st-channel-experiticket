import { ValidateOTPView } from "@/features/auth/views/validateOtpView";
import { AuthLayout } from "@/layouts/AuthLayout";

export default function ValidacionOtpPage() {
  return (
    <AuthLayout
      title="Reseteo de contraseña"
      video="recovery"
      description={
        <span>
          Hemos enviado un código a <strong>wdelgadoalama@gmail.com</strong>
        </span>
      }
    >
      <ValidateOTPView />
    </AuthLayout>
  );
}
