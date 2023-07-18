// Pages
import { Routing } from "pages";

// Widgets
import { Header } from "widgets/header/ui/header";

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
