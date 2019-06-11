import React from 'react';
import './chat.css';
import Timestamp from './Timestamp';

const Bubble = (props) => {
  // Fill in your code here
  return (
    <div>

    {/* <h3>{ props.timestamp } </h3> */}

    
      <p className="entry-name"> { props.sender } </p>
      <div className="entry-bubble">
      <p className="entry-body"> { props.body }</p> 
      <p className="entry-time"> <Timestamp time= { props.time }/></p></div>
      {/* so, note to self, it has to match the name time on Timestamp */}
  </div>
  );
}

export default Bubble;