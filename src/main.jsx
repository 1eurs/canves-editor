import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppProvider } from "./components/context/AppProvider.jsx";
import { Provider } from "@layerhub-io/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider>
    <AppProvider>
      <App />
    </AppProvider>
  </Provider>
);
