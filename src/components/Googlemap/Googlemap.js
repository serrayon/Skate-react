import React, { Component }  from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Footer from '../Layout/Footer';

class Googlemap extends Component {
render() {
  return (
    <>
    <h1>Home</h1>
{/*     
    <div className="row">
      <div className="col-md-12"> */}
      <Map google={this.props.google} style={{width: '100%', height: '75vh', position: 'absolute'}}
    className={'map'} zoom={12}>
 
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
      {/* </div>
    </div> */}
   
    
      
    
    
    </>

  )
}

  
}

// export default Map; 
export default GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_API_KEY}`,
})(Googlemap)