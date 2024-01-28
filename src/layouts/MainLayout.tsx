import { Outlet } from "@tanstack/react-router";
import { Button } from "../shared/components/Button";
import { SEOHead } from "../shared/components/SEOHead";

export function MainLayout() {
  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center p-4 items-start">
      <SEOHead title={`Video App`} description={`Video App`} />
      <div className="flex w-[1100px] flex-col gap-6">
        <div className="flex items-center justify-between">
          <Button variant="contained">Deixar feedback</Button>
        </div>
        <div className="flex flex-col relative rounded-lg border border-zinc-800 bg-zinc-900 shadow">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
