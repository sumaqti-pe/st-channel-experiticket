import { RecoveryPasswordView } from "@/features/auth/views/recoveryPasswordView";
import { AuthLayout } from "@/layouts/AuthLayout";

export default function RecuperarContrasenaPage() {
  return <AuthLayout title="Olvidaste tu contraseña?" video="recovery" description="No te preocupes, te ayudaremos a recuperarla.">
    <RecoveryPasswordView />
  </AuthLayout>
}
