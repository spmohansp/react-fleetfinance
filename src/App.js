import React from 'react';
import './App.css';
import Login from './login/LoginPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Owner/Master/Client/ClientPage';

class App extends React.Component {

constructor(props) {
    super(props); 
    console.log(props);
}


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
          <BrowserRouter>
              <Switch>
                <Route exact path="/home" component={Home} />
              </Switch>
            </BrowserRouter>
          <div>Login Page<Login />.</div>
      </div>



    );
  }
}

export default App;
