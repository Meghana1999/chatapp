# Chat Application

## Overview
This is a chat application that allows users to join and chat with other active users. It also includes a feedback system where users can submit and view feedback.

## Project Structure
- **Backend**: Express server with Socket.io for real-time chat and REST endpoints for feedback.
- **Frontend**: React application with routing using React Router.

## Backend Components
### Server.js

1. Sets up the Express server and integrates Socket.io for real-time communication.
2. Configures middleware for CORS and JSON body parsing.
3. Defines routes for feedback submission and retrieval.
4. Manages socket events for user connections, messaging, and disconnections.

### chatController.js

1. Handles user joining, messaging, and disconnection logic.
2. Maintains a list of active users and broadcasts this list to all connected clients.

### feedbackController.js

1. Manages in-memory storage of feedback messages.
2. Provides endpoints to post new feedback and retrieve all feedback messages.

### logger.js

1. Middleware for logging HTTP requests to the console.

### errorHandler.js

1. Middleware for handling and responding to server errors.

## Frontend Components
### App.js

1. Main application component that sets up routes using React Router.
2. Renders different components based on the current route (Home, Feedback, Chat).

### NavigationBar.js

1. Component for the navigation bar, providing links to Home, Feedback, and Chat pages.

### Home.js

1. Home page component displaying a welcome message, rotating testimonials, and feature descriptions.

### FeedBack.js

1. Feedback page component where users can submit feedback and view all previously submitted feedback.
2. Uses fetch API to communicate with the backend.

### Chat.js

1. Chat component allowing users to enter a username, see active users, and send messages.
2. Uses Socket.io for real-time messaging and updates.

### App.css

1. Contains styles for the application components, ensuring a consistent look and feel.


## Setup Instructions

### Backend
1. Navigate to the `backend` directory:
    ```sh
    cd backend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the server:
    ```sh
    node Server.js
    ```

The server will run on http://localhost:4000.

### Frontend
1. Navigate to the `frontend` directory:
    ```sh
    cd frontend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the React application:
    ```sh
    npm start
    ```
The application will run on http://localhost:3000.

## Usage

1. Open http://localhost:3000 in your browser.
2. Use the navigation bar to switch between the Home, Feedback, and Chat pages.
3. On the Chat page, enter your username to join the chat. You can see active users and send messages to them.
4. On the Feedback page, submit your feedback and view feedback from other users.
