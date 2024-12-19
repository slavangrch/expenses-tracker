# Expenses Tracker

## Overview

Expenses Tracker is a full-stack application for managing daily expenses. It uses **React** on the frontend, **Node.js** on the backend, and **MongoDB** as the database. The app supports user authentication and is responsive for all devices.

## Features

- Add, view, and delete expenses.
- JWT-based user authentication.
- Responsive design for desktop and mobile.
- State management with Redux Toolkit.

## Tech Stack

- **Frontend**: React, Redux Toolkit, TypeScript, Styled Components.
- **Backend**: Node.js, Express.js, MongoDB, Mongoose, JWT.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/slavangrch/expenses-tracker.git
   cd expenses-tracker
   ```
2. Install dependencies:
   Frontend:
   ```bash
    cd client
    npm install
   ```
   Backend:
   ```bash
   cd server
   npm install
   ```
3. Configure environment variables in server/.env:
   MONGO_URL=your_mongo_connection_string
   SECRET_KEY=your_jwt_secret
   PORT=5000
4. Start the application:
   Backend:
   ```bash
       cd server
       npm start
   ```
   Frontend:
   ```bash
       cd client
       npm start
   ```
5. Open the app at http://localhost:3000.
