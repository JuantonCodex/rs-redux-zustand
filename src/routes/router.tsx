import { Route, Router, RootRoute } from "@tanstack/react-router";
import { Home } from "../pages/Home.page";
import { VideoDetail } from "../pages/video-detail/VideoDetail.page";
import { BASE_PATH } from "../configuration/contants";
import { MainLayout, RootLayout } from "../layouts";

const rootRoute = new RootRoute({
  component: RootLayout,
});

const mainLayoutRoute = new Route({
  getParentRoute: () => rootRoute,
  id: "layout",
  component: MainLayout,
});

const homeRoute = new Route({
  getParentRoute: () => mainLayoutRoute,
  path: "/",
  component: Home,
});

const videoDetailRoute = new Route({
  getParentRoute: () => mainLayoutRoute,
  path: "/video",
  component: VideoDetail,
});

const routeTree = rootRoute.addChildren([
  mainLayoutRoute.addChildren([homeRoute, videoDetailRoute]),
]);
export const router = new Router({ routeTree, basepath: BASE_PATH });
