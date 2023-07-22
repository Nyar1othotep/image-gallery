import { createReduxStore } from "app/store";
import { Provider } from "react-redux";
import { Routing } from "app/routing";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

export const renderTestApp = (component, options) => {
  const store = createReduxStore(options?.initialState);

  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[options?.route]}>
        {component || <Routing />}
      </MemoryRouter>
    </Provider>
  );
};
