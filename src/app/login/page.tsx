import { LoginView } from "@/features/auth/views/loginView";
import { AuthLayout } from "@/layouts/AuthLayout";

export default function LoginPage() {
  return (
    <AuthLayout title="Bienvenido de nuevo" video="concert">
      <LoginView />
    </AuthLayout>
  );
}
