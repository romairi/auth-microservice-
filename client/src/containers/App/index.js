import { BrowserRouter as Router } from "react-router-dom";
import routes from "../../routes";

import "./index.scss";

const App = () => {
  return (
    <div className="app-container">
      <Router>{routes}</Router>
    </div>
  );
};

export default App;
