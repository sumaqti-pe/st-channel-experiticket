import { HomeView } from "@/features/home/views";
import { MainLayout } from "@/layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <HomeView />;
    </MainLayout>
  );
}
