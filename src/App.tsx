import "./styles/global.css";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";
import { HelmetProvider } from "react-helmet-async";
import { AppRouterProvider } from "./routes/components/AppRouterProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
const queryClient = new QueryClient();
export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReduxProvider store={store}>
        <HelmetProvider context={{}}>
          <AppRouterProvider />
        </HelmetProvider>
      </ReduxProvider>
    </QueryClientProvider>
  );
}
