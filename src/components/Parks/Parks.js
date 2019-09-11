import React from 'react';
// import PostSummary from '../components/Posts/PostSummary';

const Parks = ({ parks }) => {
  const parksList = parks.map(park => {
    return (
      <div className="card" >
      <img src={park.image} className="card-img-top" alt="saktepark"/>
        <div className="card-body">
          <h5 className="card-title">{park.name}</h5>
          <p className="card-text">{park.description}</p>
          <a href={park.href} className="btn btn-primary">{park.location}</a>
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


  
  
  
