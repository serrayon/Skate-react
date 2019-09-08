import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import NavBar from './components/Layout/NavBar';
import Routes from './config/routes';
import Parks from './components/Parks/Parks';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

import { API_URL } from './constants';
import './App.css';

class App extends Component {
  state = {
    currentUser: localStorage.getItem('uid'),
  }

  setCurrentUser = (userId) => {
    localStorage.setItem('uid', userId)
    this.setState({ currentUser: userId });
  }

  handleLogout = () => {
    localStorage.removeItem('uid');
    axios.post(`${API_URL}/auth/logout`, { withCredentials: true })
      .then(() => {
        this.setState({ currentUser: null });
        this.props.history.push('/login');
      });
  };

  render() {
    return (
      <>
      <NavBar logout={this.handleLogout} currentUser={this.state.currentUser} />
        <div className="container">
          <Routes setCurrentUser={this.setCurrentUser} currentUser={this.state.currentUser}  />
        </div>
        
      </>
    );
  };
};

 export default withRouter(App);


