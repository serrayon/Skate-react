import React from 'react';
// import PostSummary from '../components/Posts/PostSummary';

const Parks = ({ parks }) => {
  const parksList = parks.map(park => {
    return (
      //  <div className="parkCard">
      //      <h1>{park.name}</h1>
      //      <h3>{park.description}</h3>
      //      <h3>{park.location}</h3>
      //      <img src={park.image} alt='skateparks' />
      //    </div> 
      <div className="card" >
      <img src={park.image} className="card-img-top" alt="saktepark"/>
        <div className="card-body">
          <h5 className="card-title">{park.name}</h5>
          <p className="card-text">{park.description}</p>
          <a href="https://www.google.com/maps/place/Balboa+Skatepark/@37.7231911,-122.4472613,17z/data=!3m1!4b1!4m5!3m4!1s0x808f7e81b70cc2fb:0xf93786674031524e!8m2!3d37.7231869!4d-122.4450726" className="btn btn-primary">Directions</a>
        </div>
</div>
        )
      })
        return(
        <>
          <div className="Parks">
            {parksList}
          </div>
        </>
        )
  }
  
  export default Parks;


  
  
  
