import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Login from './login/LoginPage';
// import Db from './Db';



class App extends Component {

// constructor(props) {
//     super(props); 
// }


componentDidMount(){
	// Db.put('update/43692',{"name":"Aakash Welcome","salary":"123","age":"23"}).then(data=>{
	// 	console.log(data.data);
	// }).catch(data1=>{
	// 	console.log(data1);
	// })
}

// handleClick(event){
//   event.preventDefault();
//   console.log(1);
// }


  render() {
    return (
      <div className="App">


          <div>Login Page<Login />.</div>

      </div>



    );
  }
}

export default App;
