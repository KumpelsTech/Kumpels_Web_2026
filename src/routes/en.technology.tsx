import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/en/technology")({
  beforeLoad: () => {
    throw redirect({ to: "/en/solutions", statusCode: 301, replace: true });
  },
  component: () => null,
});
