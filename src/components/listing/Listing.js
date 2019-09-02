import React from 'react';
import './Listing.css';
import apt from '../../media/apartments.jpg';

const Listing = (props) => {
  return (
    <div className="listing">
      <img src={apt} />
      <p>Hi from this little listing {props.value}</p>
    </div>
  )
}
export default Listing