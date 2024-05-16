let users = {};

// Handles user joining the chat
const joinChat = (io, socket) => (username) => {
    users[socket.id] = username;
    io.emit('activeUsers', Object.values(users));
};

//Handles sending messages between users

const handleMessage = (io, socket) => ({ recipient, message }) => {
    const recipientSocketId = Object.keys(users).find(id => users[id] === recipient);
    if (recipientSocketId) {
        io.to(recipientSocketId).emit('message', {
            sender: users[socket.id],
            message: message
        });
    }
};

// Handles user disconnecting from the chat
const disconnect = (io, socket) => () => {
    delete users[socket.id];
    io.emit('activeUsers', Object.values(users));
    console.log('User disconnected');
};

module.exports = {
    joinChat,
    handleMessage,
    disconnect
};
