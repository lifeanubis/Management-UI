import "./App.css";

import React from "react";
import MovieMain from "./movie/MovieMain";
import Weather from "./weather/Weather";
import DashBoard from "./dashboard/DashBoard";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Task from "./dashboard/Task";
import Email from "./dashboard/Email";
import Chat from "./dashboard/Chat";
import Deals from "./dashboard/Deals";
import Contact from "./dashboard/Contact";
import Account from "./dashboard/Account";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={DashBoard} exact />
          <Route path="/task" component={Task} />
          <Route path="/chat" component={Chat} />
          <Route path="/contact" component={Contact} />
          <Route path="/account" component={Account} />
        </Switch>
      </Router>
      {/* <DashBoard /> */}
    </div>
  );
}

export default App;
