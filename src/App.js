import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,AuthenticatedRoute, Route, Link } from "react-router-dom";
import Login from './login/index';
import Db from './Db';



class App extends Component {

componentDidMount(){
	Db.put('update/43692',{"name":"Aakash Welcome","salary":"123","age":"23"}).then(data=>{
		console.log(data.data);
	}).catch(data1=>{
		console.log(data1);
	})
}


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
