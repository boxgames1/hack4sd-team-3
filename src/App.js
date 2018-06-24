import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import "./css/Base.css";
import PrincipalScreen from "./screens/PrincipalScreen"
import InitScreen from "./screens/InitScreen";
import MapScreen from "./screens/MapScreen";
import ResultsScreen from "./screens/ResultsScreen";

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Route exact path="/" component={PrincipalScreen} />
      <Route exact path="/init/" component={InitScreen} />
      <Route path="/map/:season" component={MapScreen} />
      <Route path="/results/:coordinates/" component={ResultsScreen} />
    </div>
  </BrowserRouter>
);

export default App;
