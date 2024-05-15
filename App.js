import React, { useState } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleMessageSubmit = (event) => {
    event.preventDefault();
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage }]);
      setNewMessage('');
    }
  };

  return (
    <div className="App">
      <h1>SMS APP</h1>
      <div className="message-container">
        {messages.map((message, index) => (
          <div key={index} className="message">
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleMessageSubmit} className="message-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={handleMessageChange}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
