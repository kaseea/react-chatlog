import React, { Component } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import Chat from './components/chat';


// class App extends Component {
//   render() {
//     when do I need to do this?

const App = () => {
  console.log(chatMessages);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Bot Fights</h1>
      </header>
      <main className="App-main">
        <div className="chat-log">

        <Chat chats={chatMessages} />
        </div>
        
      </main>
    </div>
  );
};

export default App;
