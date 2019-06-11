import React from 'react';
import './chat.css';
import Bubble from './bubble';

const Chat = (props) => {
  // although why do we have to do props.events? cause itsnt 
  // <Timeline events={timelineData.events} /> already sending it events?
  // side question, how would you debug that?

  const chatComponents = props.chats.map( (chat, i) => {
    //   let classy = 'chat-entry';
      let classy = chat.sender === "Vladimir" ? ' local' : ' remote';


    return (
        
      <div className={`chat-entry ${classy}`} key={i}>
        <Bubble
          sender={ chat.sender }
          body={ chat.body }
          time={ chat.timeStamp } />
      </div>
    );
  });
  
    return (
      <section>
          { chatComponents }
      </section>
    );
  };




export default Chat;