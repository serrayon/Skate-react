import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

// const Home = () => {
  class Home extends Component {
    
    state={

    }
    render() {
  return (
    <section>
      <h1>Home</h1>
      <Map google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            {/* <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div> */}
        </InfoWindow>
      </Map>
      
    </section>
  );
          }
        }

// export default Home;
export default GoogleApiWrapper({
  apiKey: ('AIzaSyC0Sy6jzOrDP2eNqgMZESXzhZovY1YdlvY')
})(Home)
