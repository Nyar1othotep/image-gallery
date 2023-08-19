import React from "react";
import ReactDOM from "react-dom/client";

import App from "./app";
import { store, persistedStore } from "app/store";

// Providers
import { Provider as ReduxProvider } from "react-redux";
import { HashRouter as RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./entities/theme";
import { PersistGate as PersistProvider } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <PersistProvider loading={null} persistor={persistedStore}>
        <ThemeProvider>
          <RouterProvider>
            <App />
          </RouterProvider>
        </ThemeProvider>
      </PersistProvider>
    </ReduxProvider>
  </React.StrictMode>
);
