import React from "react";
import ReactDOM from "react-dom/client";

import { InputInfProvider } from "./pages/contexts/EP";
import { NavigationsConPro } from "./pages/contexts/Navigations";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <InputInfProvider>
    <NavigationsConPro>
      <App />
    </NavigationsConPro>
  </InputInfProvider>
);
