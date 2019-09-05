import React from 'react';
// import PostSummary from '../components/Posts/PostSummary';

const Parks = ({parks}) => {
   const parksList= parks.map(park=>{
      return(
      <div>
        <h1>{park.name}</h1>
        <h3>{park.description}</h3>
        <h3>{park.location}</h3>
        <img src={park.image}/>
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