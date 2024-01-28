import { Outlet } from "@tanstack/react-router";
import { Button } from "../shared/components/Button";
import { SEOHead } from "../shared/components/SEOHead/SEOHead";

export function MainLayout() {
  return (
    <>
      <SEOHead title={`Video App`} description={`Video App`} />
      <div className="flex h-auto min-h-screen items-start justify-center bg-zinc-950 p-4 text-zinc-50">
        <div className="flex w-full max-w-[1100px] flex-col gap-6">
          {/* HEADER */}
          <div className="flex items-center justify-end">
            <Button variant="contained" color="warning">
              Contactar
            </Button>
          </div>
          {/* CONTENT */}
          <div className="relative flex flex-col rounded-lg border border-zinc-800 bg-zinc-900 shadow">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
