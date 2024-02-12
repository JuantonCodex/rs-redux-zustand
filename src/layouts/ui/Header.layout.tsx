import { Link, Outlet } from "@tanstack/react-router";
import { SEOHead } from "../../shared/components/SEOHead/SEOHead";
import Logo from "@/assets/logo.png";

export function HeaderLayout() {
  return (
    <>
      <SEOHead title={`Video App`} description={`Video App`} />
      <div className="flex h-auto min-h-screen items-start justify-center bg-zinc-950 p-4">
        <div className="flex w-full max-w-[1200px] flex-col gap-6">
          {/* HEADER */}
          <div className="flex items-center justify-start">
            <Link to="/">
              <img
                src={Logo}
                alt="Video Player"
                className="inline-block max-w-[150px] md:max-w-[200px]"
              />
            </Link>
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
