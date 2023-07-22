import React from "react";
import ReactDOM from "react-dom/client";

import App from "./app";
import { store, persistedStore } from "app/store";
import { PersistGate } from "redux-persist/integration/react";

// Providers
import { Provider as ReduxProvider } from "react-redux";
import { HashRouter as RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./entities/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <ThemeProvider>
          <RouterProvider>
            <App />
          </RouterProvider>
        </ThemeProvider>
      </PersistGate>
    </ReduxProvider>
  </React.StrictMode>
);
