// Pages
import { Routing } from "./routing";

// Widgets
import { HeaderLayout } from "widgets/header";

// Shared
// import { createMockServer } from "shared/lib";

import "./index.scss";

// if (process.env.NODE_ENV === "development") {
//   createMockServer();
// }

const App = () => {
  return (
    <div className="app">
      <div className="_container">
        <HeaderLayout />
        <Routing />
      </div>
    </div>
  );
};

export default App;
