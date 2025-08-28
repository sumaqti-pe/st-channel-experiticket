import { ComplaintsBookView } from "@/features/complaints-book/views";
import { MainLayout } from "@/layouts/MainLayout";

export default function LibroDeReclamacionesPage() {
  return (
    <MainLayout>
      <ComplaintsBookView />
    </MainLayout>
  );
}
