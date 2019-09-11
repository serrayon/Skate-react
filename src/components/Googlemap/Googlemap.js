import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
// import Footer from '../Layout/Footer';


class Googlemap extends Component {
  render() {
    return (
      <>
        <h1 className='spots'>Spots</h1>
        {/*     
    <div className="row">
      <div className="col-md-12"> */}
        <Map google={this.props.google} style={{ width: '70vw', height: '75vh', position: 'absolute' }}
          className={'map'} zoom={13}>

          <Marker
            title={'The marker`s title will appear as a tooltip.'}
            name={'SOMA'}
            position={{ lat: 37.7702491, lng: -122.4218772 }} />
          <Marker
            name={'3rd & Cesar Chavez (Army)'}
            position={{ lat: 37.7479, lng: -122.3902 }} />
          <Marker />
          <Marker
            name={'Fort Miley'}
            position={{ lat: 37.7821, lng: -122.5078 }} />
          <Marker />
          <Marker
            name={'24th/mission wallrides'}
            position={{ lat: 37.752551, lng: -122.41832099999999 }} />
          <Marker />
          <Marker
            name={'Washington Wallride'}
            position={{ lat: 37.777707, lng: -122.492001 }} />
          <Marker />
          <Marker
            name={'Ulloa Elementary'}
            position={{ lat: 37.736584, lng: 122.499388 }} />
          <Marker />
          <Marker
            name={'Lincoln High School'}
            position={{ lat: 37.747234, lng: -122.481337 }} />
          <Marker />
          

          <InfoWindow onClose={this.onInfoWindowClose}>
            {/* <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div> */}
          </InfoWindow>
        </Map>
      </>
    )
  }
}

// export default Map; 
export default GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_API_KEY}`,
})(Googlemap)