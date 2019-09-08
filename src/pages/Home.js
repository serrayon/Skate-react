import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


// const Home = () => {
  class Home extends Component {
    
    state={
      
    }
    render() {
  return (
    <>
    <section>
    <a target="_blank" href="http://www.google.com">help</a>
      <h1>Home</h1>
      
      
      <Map google={this.props.google} style={{width: '100%', height: '100%', position: 'relative'}}
    className={'map'} zoom={14}>
 
        <Marker 
          title={'The marker`s title will appear as a tooltip.'}
    name={'SOMA'}
    position={{lat: 37.778519, lng: -122.405640}} />
  <Marker
    name={'Dolores park'}
    position={{lat: 37.759703, lng: -122.428093}} />
  <Marker />
  
      
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            {/* <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div> */}
        </InfoWindow>
      </Map>
      
    </section>
    </>
  );
          }
        }

// export default Home;
export default GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_API_KEY}`,
})(Home)
// style={{width: '100%', height: '100%', position: 'relative'}}
//     className={'map'}
//     zoom={14}>
//   <Marker
  //   title={'The marker`s title will appear as a tooltip.'}
  //   name={'SOMA'}
  //   position={{lat: 37.778519, lng: -122.405640}} />
  // <Marker
  //   name={'Dolores park'}
  //   position={{lat: 37.759703, lng: -122.428093}} />
  // <Marker />
  // <Marker
  //   name={'Your position'}
  //   position={{lat: 37.762391, lng: -122.439192}}
  //   icon={{
  //     url: "/path/to/custom_icon.png",
  //     anchor: new google.maps.Point(32,32),
  //     scaledSize: new google.maps.Size(64,64)
  //   }} />




// onClick={this.onMarkerClick}
//                 name={'Current location'} 