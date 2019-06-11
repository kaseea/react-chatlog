import React from 'react';
import './chat.css';
import Bubble from './bubble';

const Chat = (props) => {
  // although why do we have to do props.events? cause itsnt 
  // <Timeline events={timelineData.events} /> already sending it events?
  // side question, how would you debug that?

  const chatComponents = props.chats.map( (chat, i) => {
    return (
      <div  key={i}>
        <Bubble
          sender={ chat.sender }
          body={ chat.body }
          time={ chat.timeStamp } />
      </div>
    );
  });
  
    return (
      <section >
        <div className="chat-entry local">
          { chatComponents }
        </div>
      </section>
    );
  };




export default Chat;