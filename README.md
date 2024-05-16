# Chat Application

## Overview
This is a chat application that allows users to join and chat with other active users. It also includes a feedback system where users can submit and view feedback.

## Project Structure
- **Backend**: Express server with Socket.io for real-time chat and REST endpoints for feedback.
- **Frontend**: React application with routing using React Router.

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
