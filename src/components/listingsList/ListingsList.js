import Listing from'../listing/Listing';
import React from 'react'

const ListingsList = () => {
  let words = ["Hello", "World", "How are you?"];
  
  return (
    <div>
      <h2>Real Estate & Homes for Rent</h2>
      {words.map(item => 
        <Listing value={item} key={item}/>)}
    </div>
  )
}

export default ListingsList