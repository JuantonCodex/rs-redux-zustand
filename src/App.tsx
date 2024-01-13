import "./styles/global.css";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";
import { Player } from "./pages/Player";
import { HelmetProvider } from "react-helmet-async";

export function App() {
  return (
    <ReduxProvider store={store}>
      <HelmetProvider context={{}}>
        <Player />
      </HelmetProvider>
    </ReduxProvider>
  );
}
