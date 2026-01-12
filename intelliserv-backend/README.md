# IntelliServe Backend

This directory contains the backend implementation of IntelliServe, a role-based task and resource management platform.

The backend is built using FastAPI and exposes secure RESTful APIs for authentication, user management, task creation, assignment, and retrieval.

## Tech Stack

- FastAPI
- SQLAlchemy
- SQLite
- JWT Authentication
- Python

## Project Structure

backend/
├── app/
│   ├── auth/        # Authentication, JWT, and security utilities
│   ├── models/      # SQLAlchemy database models
│   ├── routes/      # API route definitions
│   ├── schemas/     # Pydantic request/response schemas
│   ├── database.py  # Database configuration
│   └── main.py      # Application entry point
├── requirements.txt
└── README.md

## Running the Backend Locally

Create and activate a virtual environment (recommended), then install dependencies:

```bash
pip install -r requirements.txt

Start the FastAPI server:

python -m uvicorn app.main:app --reload


The backend will run at:

http://127.0.0.1:8000

API Documentation

Interactive Swagger documentation is available at:

http://127.0.0.1:8000/docs

Authentication & Authorization

JWT-based authentication is used for securing APIs.

Protected routes require a valid token.

Role-based access control is enforced at the API layer:

Admin: user and task management

Employee: access to assigned tasks only

Database

SQLite is used as the default database for simplicity.

Database file is created automatically on first run.

The design allows easy migration to PostgreSQL or other relational databases.

Notes

Backend enforces access control and task visibility server-side.

Designed to support scalable workflow automation and future enhancements.