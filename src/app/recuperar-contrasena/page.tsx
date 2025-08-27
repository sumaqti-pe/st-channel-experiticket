import { RecoveryPasswordView } from "@/features/auth/views/recoveryPasswordView";
import { AuthLayout } from "@/layouts/AuthLayout";

export default function RecuperarContrasenaPage() {
  return <AuthLayout title="Recuperar Contraseña" video="recovery">
    <RecoveryPasswordView />
  </AuthLayout>
}
