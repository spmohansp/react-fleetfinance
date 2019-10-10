import React from 'react';
import './Login.css';
import DB from '../Db';
// import Home from '../Owner/Master/Client/ClientPage';


export default class Login extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    	this.state = { email: '9443947839',password: '9443947839','TransportName':''};
    	this.LoginSubmit = this.LoginSubmit.bind(this);
    	this.HandleChange = this.HandleChange.bind(this);
    }

    HandleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }


	LoginSubmit(event){
		event.preventDefault();
		const FormValue = new FormData(event.target);
		DB.post('login',FormValue).then(data=>{
			if(data.data.status==='success'){
	            localStorage.setItem("FleetUserData", JSON.stringify(data.data.data))
	            console.log(JSON.parse(localStorage.getItem('FleetUserData')));
	            this.setState({TransportName : data.data.data.transportName});
                this.props.history.push('/home');
			}else{
				console.log('error');
			}
		}).catch(err=>{
			console.log(err);
		})
	}

  render() {
        const { email, password } = this.state;
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
		                                <label className="col-md-4 col-form-label text-md-right">E-Mail Address</label>
		                                <div className="col-md-6">
		                                    <input type="text" className="form-control" value={email} onChange={this.HandleChange} name="email"/>
		                                </div>
		                            </div>
		                            <div className="form-group row">
		                                <label className="col-md-4 col-form-label text-md-right">Password</label>
		                                <div className="col-md-6">
		                                    <input type="password" className="form-control" value={password} onChange={this.HandleChange} name="password"/>		                                
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

