import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import NavBar from './components/Layout/NavBar';
import Routes from './config/routes';
import Parks from './components/Parks/Parks';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

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
        <Map google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            {/* <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div> */}
        </InfoWindow>
      </Map>
      </>
    );
  };
};

// export default withRouter(App);

export default GoogleApiWrapper({
  apiKey: ('AIzaSyC0Sy6jzOrDP2eNqgMZESXzhZovY1YdlvY')
})(App)
