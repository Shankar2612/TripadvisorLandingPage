import React from 'react';
import './App.css';
import Home from "./Pages/Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
