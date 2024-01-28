import { Outlet } from "@tanstack/react-router";
import { router } from "../routes/router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export function RootLayout() {
  return (
    <>
      <Outlet />
      <TanStackRouterDevtools router={router} />
    </>
  );
}
