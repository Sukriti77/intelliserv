# IntelliServe Frontend

This directory contains the frontend implementation of IntelliServe, a role-based task and resource management platform.

The frontend is built using React and communicates with the FastAPI backend through REST APIs. It provides role-specific dashboards for Admin and Employee users.

## Tech Stack

- React
- JavaScript
- Axios
- HTML
- CSS

## Project Structure

frontend/
├── src/
│   ├── api/          # Axios configuration
│   ├── components/   # Reusable UI components
│   ├── pages/        # Admin and Employee dashboards
│   ├── App.js
│   └── index.js
├── package.json
└── README.md

## Running the Frontend Locally

Ensure the backend server is running before starting the frontend.

```bash
cd frontend
npm install
npm start
The application runs at:

http://localhost:3000

Authentication Flow

Users log in using email and password.

The backend returns a JWT token on successful authentication.

The token is stored locally and attached to API requests using Axios interceptors.

The UI renders different dashboards based on user role:

Admin: user and task management

Employee: view assigned tasks only

Notes

The frontend is configured to work with a locally running backend.

API base URL is defined in the Axios configuration file.

Styling is intentionally minimal to focus on functionality.