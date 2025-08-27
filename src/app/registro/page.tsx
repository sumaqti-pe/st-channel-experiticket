import { RegisterView } from "@/features/auth/views/registerView";
import { AuthLayout } from "@/layouts/AuthLayout";

export default function RegistroPage() {
  return (
    <AuthLayout title="Crea tu cuenta" video="register-1">
      <RegisterView />
    </AuthLayout>
  );
}
