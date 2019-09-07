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
          <a href={park.location} className="btn btn-primary">{park.location}</a>
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


  
  
  