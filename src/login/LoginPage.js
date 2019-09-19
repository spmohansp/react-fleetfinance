import React, { Component } from 'react';
import './Login.css';
import DB from '../Db';


export default class Login extends Component {
	constructor(props) {
    	super(props); 
    	this.state = { email: '9443947839',password: '9443947839','TransportName':''};
    	this.LoginSubmit = this.LoginSubmit.bind(this);
    }

	LoginSubmit(event){
		event.preventDefault();
		const FormValue = new FormData(event.target);
		DB.post('login',FormValue).then(data=>{
			if(data.data.status==='success'){
	            localStorage.setItem("FleetUserData", JSON.stringify(data.data.data))
	            console.log(JSON.parse(localStorage.getItem('FleetUserData')));
	            this.setState({TransportName : data.data.data.transportName});
			}else{
				console.log('error');
			}
		}).catch(data1=>{
			console.log(data1);
		})
	}

  render() {

    return (
		<main className="login-form">
		{this.state.TransportName}
		    <div className="cotainer">
		        <div className="row justify-content-center">
		            <div className="col-md-8">
		                <div className="card">
		                    <div className="card-header">Owner Login</div>
		                    <div className="card-body">
		                        <form onSubmit={this.LoginSubmit}>
		                            <div className="form-group row">
		                                <label for="email_address" className="col-md-4 col-form-label text-md-right">E-Mail Address</label>
		                                <div className="col-md-6">
		                                    <input type="text" className="form-control" value={this.state.email} name="email"/>
		                                </div>
		                            </div>
		                            <div className="form-group row">
		                                <label for="password" className="col-md-4 col-form-label text-md-right">Password</label>
		                                <div className="col-md-6">
		                                    <input type="password" className="form-control" value={this.state.password} name="password"/>
		                                </div>
		                            </div>
		                            <div className="col-md-6 offset-md-4">
		                                <button type="submit" className="btn btn-primary">Login</button>
		                            </div>
		                        </form>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </div>
		</main>


    );
  }
}

