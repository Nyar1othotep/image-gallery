import React from "react";
import ReactDOM from "react-dom/client";

import reportWebVitals from "./reportWebVitals";

import App from "./app";
import { createReduxStore } from "app/store";

// Providers
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter as RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ReduxProvider store={createReduxStore()}>
      <RouterProvider>
        <App />
      </RouterProvider>
    </ReduxProvider>
  </React.StrictMode>
);

reportWebVitals();
