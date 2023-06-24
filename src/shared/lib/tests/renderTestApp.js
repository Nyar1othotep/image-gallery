import { createReduxStore } from "app/store";
import { Provider } from "react-redux";
import { Routing } from "pages";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

export const renderTestApp = (component, options) => {
  const store = createReduxStore(options?.initialState);

  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[options?.route]}>
        <Routing />
      </MemoryRouter>
    </Provider>
  );
};
