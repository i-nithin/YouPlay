import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CombinedProvider } from "./frontend/Provider/CombinedProvider";
import { makeServer } from "./server";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

makeServer();

root.render(
  <StrictMode>
    <CombinedProvider>
      <App />
    </CombinedProvider>
  </StrictMode>
);
