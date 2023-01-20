import React from "react";
import App from "./App";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

declare global {
  interface Window {
    INITIAL_DATA: {
      url: string;
    };
  }
}

const root = hydrateRoot(
  document.querySelector("#root"),
  <BrowserRouter>
    <App url={window.INITIAL_DATA.url} />
  </BrowserRouter>
);
