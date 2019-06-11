import React from 'react';
import './chat.css';
import Timestamp from './Timestamp';

const Bubble = (props) => {
  // Fill in your code here
  return (
    <section>

    {/* <h3>{ props.timestamp } </h3> */}

    
      <h3 className="entry-name"> { props.sender } </h3>
      <h3 className="entry-bubble">{ props.body }</h3>
      <h6 className="entry-time"> <Timestamp time= { props.time }/></h6>
      {/* so, note to self, it has to match the name time on Timestamp */}
  </section>
  );
}

export default Bubble;