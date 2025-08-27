import { ResetPasswordView } from "@/features/auth/views/resetPasswordView";
import { AuthLayout } from "@/layouts/AuthLayout";

export default function ReseteoContrasenaPage() {
  return (
    <AuthLayout title="Restablecer Contraseña"
      video="recovery" description="Restablece tu contraseña de forma segura"
    >
      <ResetPasswordView />
    </AuthLayout>
  );
}
