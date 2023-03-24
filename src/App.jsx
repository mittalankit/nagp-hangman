import React from "react";
import ReactDOM from "react-dom";
import HangmanGame from "./components/HangmanGame";

import "./index.scss";

const App = () => (
  <div className="container">
    <HangmanGame/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
