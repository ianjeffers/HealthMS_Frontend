// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";

// const Login = () => {
//   const { loginWithRedirect } = useAuth0();

//   return <button onClick={() => loginWithRedirect()}>Log In</button>;
// };

// export default Login;

// //Write a React Component for the sign-in page of an application, add Google Sign-In to your React app, you can use the react-google-login library. 
// //Use AuthZero for authentication and authorization

import React, { Component } from 'react';
import LoginButton from '../LoginButton/LoginButton';
import './Login.css';


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div className="container">
                        <form noValidate onSubmit={this.handleSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input type="email" className="form-control" name="email" placeholder="Enter email" value={this.state.email} onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                            </div>
                            <LoginButton/>
                        </form>
            </div>
        )
    }
}

export default Login;