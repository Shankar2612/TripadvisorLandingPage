import React from 'react';
import './App.css';
import Home from "./Pages/Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Home />
      </div>
    )
  }
}

export default App;
