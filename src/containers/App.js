import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { configureStore } from "store";
import Navbar from "containers/Navbar";
import GamePlayPanel from "components/GamePlayPanel";

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="app">
        <Navbar />
        <GamePlayPanel />
      </div>
    </Router>
  </Provider>
);

export default App;
