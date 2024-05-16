import React, { useState, useEffect } from 'react';
import io from 'socket.io-client'; 

// Initializing Socket.IO client
const socket = io('http://localhost:4000', {
  transports: ['websocket'],
});

 
const Chat = () => {
  // State => managing chat states
  const [username, setUsername] = useState('');
  const [usernameSubmitted, setUsernameSubmitted] = useState(false);
  const [activeUsers, setActiveUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState({});

  // Effect hook for setting up socket event listeners
  useEffect(() => {
    socket.on('activeUsers', (users) => {
      setActiveUsers(users.filter((user) => user !== username));
    });
    socket.on('message', (data) => {
      setMessages((prevMessages) => {
        return {
          ...prevMessages,
          [data.sender]: [...(prevMessages[data.sender] || []), { message: data.message, sender: data.sender }],
          [data.recipient]: [...(prevMessages[data.recipient] || []), { message: data.message, sender: data.sender }],
        };
      });
    });
   // Cleaning up -> event listeners on component unmount
    return () => {
      socket.off('activeUsers');
      socket.off('message');
    };
  }, [username]);

  // Handling username submission
  const handleUsernameSubmit = () => {
    if (username.trim() !== '') {
      socket.emit('join', username);
      setUsernameSubmitted(true);
    }
  };

  //Send message to selected user
  const sendMessage = () => {
    if (selectedUser && message) {
      socket.emit('message', { recipient: selectedUser, message });
      // Add the message to the sender's message list
      setMessages((prevMessages) => {
        return {
          ...prevMessages,
          [selectedUser]: [...(prevMessages[selectedUser] || []), { message, sender: username }],
        };
      });
      setMessage(''); // Clear the message input
    }
  };
  
   // Select user to chat with
  const selectUser = (user) => {
    setSelectedUser(user);
  };
   // Rendering the username input form => if username is not submitted
  if (!usernameSubmitted) {
    return (
      <div className="chat-container">
        <h2>Enter your username to start chatting</h2>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="username-input"
        />
        <button onClick={handleUsernameSubmit} className="submit-button">Set Username</button>
      </div>
    );
  }

  // Rendering chat interface 
  return (
    <div className="chat-container">
      <h2>Welcome, {username}!</h2>
      <div className="active-users">
        <h3>Active Users:</h3>
        <ul>
          {activeUsers.map((user) => (
            <li key={user} onClick={() => selectUser(user)} className="active-user">
              {user}
            </li>
          ))}
        </ul>
      </div>
      {selectedUser && (
        <div className="chat-box">
          <h3>Chat with {selectedUser}</h3>
          <div className="messages">
            <ul>
              {messages[selectedUser] &&
                messages[selectedUser].map((msg, index) => (
                  <li key={index} className="message">
                    <strong>{msg.sender === username ? 'You' : msg.sender}:</strong> {msg.message}
                  </li>
                ))}
            </ul>
          </div>
          <input
            type="text"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="message-input"
          />
          <button onClick={sendMessage} className="send-button">Send</button>
        </div>
      )}
    </div>
  );
};

export default Chat;
