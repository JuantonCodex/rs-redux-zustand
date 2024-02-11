import { Link, Outlet } from "@tanstack/react-router";
import { SEOHead } from "../../shared/components/SEOHead/SEOHead";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useMediaQuery } from "@/hooks/mediaQuery/useMediaQuery";
import { screens } from "@/theme/screens";
import Logo from "@/assets/logo_transparent.png";

export function SidebarLayout() {
  const isTablet = useMediaQuery(`(min-width: ${screens.md})`);
  const direction = isTablet ? "horizontal" : "vertical";
  return (
    <div className="h-full w-full justify-center bg-zinc-950 text-zinc-50">
      <div className="mx-auto flex h-full w-full max-w-[1200px] justify-center">
        <SEOHead title={`Video App`} description={`Video App`} />
        <ResizablePanelGroup direction={direction}>
          <ResizablePanel className="flex max-h-[120px] items-center gap-6 p-3 md:max-h-full md:max-w-[220px] md:flex-col">
            <nav className="flex w-full justify-center">
              <Link to="/">
                <img
                  src={Logo}
                  alt="Video Player"
                  className="inline-block max-w-[100px] md:max-w-full md:p-4"
                />
              </Link>
            </nav>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel>
            <div className="h-full overflow-y-auto scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-600">
              <Outlet />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
}
