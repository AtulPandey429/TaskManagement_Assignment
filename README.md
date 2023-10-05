# Task Management Application - README

## Table of Contents

- [Introduction](#introduction)
- [Setup and Installation](#setup-and-installation)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Contributing](#contributing)

## Introduction

This is a Task Management Application developed as an assignment. It is a web-based application built using Node.js, Express.js, EJS (Embedded JavaScript), and MongoDB. The application allows users to manage their tasks, including creating, updating, and deleting tasks. This README provides detailed instructions on setting up and running the application, understanding its structure, and using the available API endpoints.

## Setup and Installation

Follow these steps to set up and run the Task Management Application:

### Prerequisites

Before you begin, ensure you have the following prerequisites installed:

- [Node.js](https://nodejs.org/): Ensure you have Node.js installed on your machine.
- [MongoDB](https://www.mongodb.com/try/download/community): Install MongoDB and ensure it's running on your system.

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/task-management.git
   ```

2. Navigate to the project directory:

   ```bash
   cd task-management
   ```

3. Install the application's dependencies using npm (Node Package Manager):

   ```bash
   npm install
   ```

4. Create a `.env` file in the project's root directory. Define the following environment variables in the `.env` file:

   ```env
   PORT
   URL
   SECRET_KEY
   ```

   Replace `your-secret-key` with a secret key of your choice for session management.

5. Start the application:

   ```bash
   npm start
   ```

6. The application will be accessible in your web browser at `http://localhost:3000`.

## Project Structure

The project follows a standard Express.js application structure with additional directories for views and static assets. Here's an overview of the project structure:

- `server.js`: The main application entry point.
- `config/`: Configuration files for Passport.js and other settings.
- `models/`: MongoDB data models for tasks and users.
- `public/`: Static assets such as stylesheets and client-side JavaScript.
- `routes/`: Route handlers for different application routes.
- `views/`: EJS templates for rendering HTML views.

## API Endpoints

The Task Management Application provides the following API endpoints:

- `GET /tasks`: Retrieve a list of all tasks.
- `GET /tasks/:id`: Retrieve a specific task by its unique ID.
- `POST /tasks/create`: Create a new task.
- `POST /tasks/edit/:id`: Update an existing task.
- `POST /tasks/delete/:id`: Delete a task.
- `GET /auth/login`: Display the login page.
- `POST /auth/login`: Authenticate a user.
- `GET /auth/signup`: Display the signup page.
- `POST /auth/signup`: Create a new user account.
- `GET /auth/logout`: Log out the current user.

## Usage

1. **User Registration/Login**:

   - You can register for a new account by visiting the signup page (`/auth/signup`) or log in with an existing account on the login page (`/auth/login`).

2. **Managing Tasks**:

   - After logging in, you can manage your tasks using the application.
   - Create new tasks by filling out the "Create a New Task" form.
   - Edit and delete tasks as needed.

3. **Logout**:
   - To log out, simply click the "Logout" link in the dashboard.

## Contributing

Contributions to this assignment project are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add feature'`.
4. Push your changes to your forked repository: `git push origin feature-name`.
5. Create a pull request to the original repository.
