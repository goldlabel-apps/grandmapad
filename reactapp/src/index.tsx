import React from "react";
import ReactDOM from "react-dom/client";
import Start from "./Start";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Start id="grandmaPad" />
  </React.StrictMode>
);
