import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,AuthenticatedRoute, Route, Link } from "react-router-dom";
import Login from './login/index';


class App extends Component {
  render() {
    return (
      <div className="App">
         <button className="btn btn-primary">Owner Login</button>
         <button className="btn btn-primary">Manager Login</button>

          <div>You need to <Login />.</div>

      </div>



    );
  }
}

export default App;
