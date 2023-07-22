// Pages
import { Routing } from "./routing";

// Widgets
import { Header } from "widgets/header";

// Shared
// import { createMockServer } from "shared/lib/server";

// Styles
import "./index.scss";

// if (process.env.NODE_ENV === "development") {
//   createMockServer();
// }

const App = () => {
  return (
    <div className="app">
      <div className="_container">
        <Header />
        <Routing />
      </div>
    </div>
  );
};

export default App;
