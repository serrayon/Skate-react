import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants';
import "./login.css";

class Login extends Component {
  state = {
    email: '',
    password: '',
    error: null,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const userInfo = this.state;
    axios.post(`${API_URL}/auth/login`, userInfo, { withCredentials: true })
      .then(res => {
        this.props.setCurrentUser(res.data.id);
        this.props.history.push('/parks');
      })
      .catch(err => this.setState({ error: err.message }));
  };

  render() {
    return (
      <>
      
      <div className="row nora">
        <div id="login" className="col-md-6 p-5 mt-5">
        { this.state.error }
          <h1>Login</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input className="form-control form-control-lg" type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="goskate@gmail.com" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input className="form-control form-control-lg " type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
        <div className="col-md-6"></div>
      </div>
     
      </>
    );
  };
};

export default Login;
