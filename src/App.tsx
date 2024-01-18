import "./styles/global.css";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";
import { Course } from "./pages/Course.page";
import { HelmetProvider } from "react-helmet-async";

export function App() {
  return (
    <ReduxProvider store={store}>
      <HelmetProvider context={{}}>
        <Course />
      </HelmetProvider>
    </ReduxProvider>
  );
}
