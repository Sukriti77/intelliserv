# IntelliServe – Role-Based Task Management Platform

IntelliServe is a full-stack task and resource management system designed to simulate enterprise workflow environments.

## Features
- JWT-based authentication
- Role-based access control (Admin / Employee)
- Admin dashboard for user and task management
- Employee dashboard for assigned task tracking
- Automatic task assignment based on workload
- RESTful API architecture

## Tech Stack
- Backend: FastAPI, SQLAlchemy, SQLite
- Frontend: React
- Authentication: JWT
- Tools: Git, VS Code

## Setup Instructions

### Backend
```bash
cd backend
pip install -r requirements.txt
python -m uvicorn app.main:app --reload
