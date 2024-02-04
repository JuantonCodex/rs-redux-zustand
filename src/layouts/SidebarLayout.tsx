import { Outlet } from "@tanstack/react-router";
import { SEOHead } from "../shared/components/SEOHead/SEOHead";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useMediaQuery } from "@/hooks/mediaQuery/useMediaQuery";
import { screens } from "@/theme/screens";

export function SidebarLayout() {
  const isTablet = useMediaQuery(`(min-width: ${screens.md})`);
  const direction = isTablet ? "horizontal" : "vertical";
  return (
    <div className="h-full w-full justify-center bg-zinc-950 text-zinc-50">
      <div className="mx-auto flex h-full w-full max-w-[1100px] justify-center">
        <SEOHead title={`Video App`} description={`Video App`} />
        <ResizablePanelGroup direction={direction}>
          <ResizablePanel className="flex max-h-[70px] flex-col p-3 md:max-h-full md:max-w-[220px] ">
            <div className="pb-6 pt-4 text-center">
              <h2 className="text-sm uppercase">Menu</h2>
            </div>
            <div className="flex flex-col gap-3"></div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel>
            <Outlet />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
}
