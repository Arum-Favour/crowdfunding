import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import {ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "./index.css";
import { StateContextProvider } from "./context";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThirdwebProvider activeChain="sepolia"  clientId={import.meta.env.VITE_TEMPLATE_CLIENT_ID} 
    >
      <Router>
        <StateContextProvider>
          <App />
        </StateContextProvider>
      </Router>
    </ThirdwebProvider>
  </React.StrictMode>
);
