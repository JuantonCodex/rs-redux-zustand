import { Route, Router, RootRoute } from "@tanstack/react-router";
import { Home } from "../pages/home";
import { VideoDetail } from "../pages/video-detail";
import { BASE_PATH } from "../configuration/contants";
import { MainLayout, RootLayout, SidebarLayout } from "../layouts";

const rootRoute = new RootRoute({
  component: RootLayout,
});

const mainLayoutRoute = new Route({
  getParentRoute: () => rootRoute,
  id: "mainlayout",
  component: MainLayout,
});

const sidebarLayoutRoute = new Route({
  getParentRoute: () => rootRoute,
  id: "secondarylayout",
  component: SidebarLayout,
});

const homeRoute = new Route({
  getParentRoute: () => sidebarLayoutRoute,
  path: "/",
  component: Home,
});

const videoDetailRoute = new Route({
  getParentRoute: () => mainLayoutRoute,
  path: "/video",
  component: VideoDetail,
});

const routeTree = rootRoute.addChildren([
  mainLayoutRoute.addChildren([videoDetailRoute]),
  sidebarLayoutRoute.addChildren([homeRoute]),
]);
export const router = new Router({ routeTree, basepath: BASE_PATH });
