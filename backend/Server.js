/*
  Server setup and configuration
  Sets up Express server, Socket.IO, and routes
 */

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const bodyParser = require('body-parser');
const chatController = require('./controllers/chatController');
const feedbackController = require('./controllers/feedbackController');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, { transports: ['websocket'] });

app.use(cors());
app.use(bodyParser.json());

// Chat socket events
io.on('connection', (socket) => {
    socket.on('join', chatController.joinChat(io, socket));
    socket.on('message', chatController.handleMessage(io, socket));
    socket.on('disconnect', chatController.disconnect(io, socket));
});

// Feedback routes
app.post('/feedback', feedbackController.postFeedback);
app.get('/feedback', feedbackController.getFeedback);

// Start the server
server.listen(4000, () => console.log('Server running on port 4000'));
