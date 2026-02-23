import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { TradProvider } from "./context/TradContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TradProvider>
      <App />
    </TradProvider>
  </StrictMode>,
);
