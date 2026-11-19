
import { createFileRoute } from "@tanstack/react-router";
import { PressPage } from "@/components/site/PressPage";

export const Route = createFileRoute("/es/prensa")({
  component: PrensaPage,
});

function PrensaPage() {
  return <PressPage lang="es" />;
}
