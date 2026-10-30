import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/es/tecnologia")({
  beforeLoad: () => {
    throw redirect({ to: "/es/soluciones", statusCode: 301, replace: true });
  },
  component: () => null,
});
