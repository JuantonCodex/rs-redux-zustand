import { Route, Router, RootRoute } from "@tanstack/react-router";
import { HomePage } from "../pages/home";
import { VideoDetailPage } from "../pages/video-detail";
import { BASE_PATH } from "../configuration/contants";
import { HeaderLayout, RootLayout, SidebarLayout } from "../layouts";

const rootRoute = new RootRoute({
  component: RootLayout,
});

// Layouts
const mainLayoutRoute = new Route({
  getParentRoute: () => rootRoute,
  id: "mainlayout",
  component: HeaderLayout,
});

const sidebarLayoutRoute = new Route({
  getParentRoute: () => rootRoute,
  id: "secondarylayout",
  component: SidebarLayout,
});

// Paths
const homeRoute = new Route({
  getParentRoute: () => sidebarLayoutRoute,
  path: "/",
  component: HomePage,
});

const videoPlaylistRoute = new Route({
  getParentRoute: () => sidebarLayoutRoute,
  path: "/video-list/$id",
  component: VideoDetailPage,
});

const videoDetailRoute = new Route({
  getParentRoute: () => mainLayoutRoute,
  path: "/video/$id",
  component: VideoDetailPage,
});

const routeTree = rootRoute.addChildren([
  mainLayoutRoute.addChildren([videoDetailRoute]),
  sidebarLayoutRoute.addChildren([homeRoute, videoPlaylistRoute]),
]);
export const router = new Router({ routeTree, basepath: BASE_PATH });
