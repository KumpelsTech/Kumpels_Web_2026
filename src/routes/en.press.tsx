
import { createFileRoute } from "@tanstack/react-router";
import { PressPage } from "@/components/site/PressPage";

export const Route = createFileRoute("/en/press")({
  component: EnglishPressPage,
});

function EnglishPressPage() {
  return <PressPage lang="en" />;
}
