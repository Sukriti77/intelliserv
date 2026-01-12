from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.schemas.task import TaskCreate
from app.models.task import Task, TaskStatus
from app.models.user import User
from app.auth.deps import get_current_user

router = APIRouter(prefix="/tasks", tags=["Tasks"])


# -------------------------
# Create a new task (JWT protected)
# -------------------------
@router.post("/")
def create_task(
    task: TaskCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    new_task = Task(
        title=task.title,
        description=task.description,
        priority=task.priority
    )
    db.add(new_task)
    db.commit()
    db.refresh(new_task)
    return new_task


# -------------------------
# List all tasks (JWT protected)
# -------------------------
@router.get("/")
def list_tasks(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    tasks = (
        db.query(
            Task,
            User.name.label("assigned_name")
        )
        .outerjoin(User, Task.assigned_to == User.id)
        .all()
    )

    result = []
    for task, assigned_name in tasks:
        result.append({
            "id": task.id,
            "title": task.title,
            "description": task.description,
            "status": task.status,
            "priority": task.priority,
            "assigned_to": assigned_name
        })

    return result

# -------------------------
# Assign task intelligently (JWT protected)
# -------------------------
@router.post("/assign/{task_id}")
def assign_task(
    task_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    # Get all employees
    employees = db.query(User).filter(User.role == "EMPLOYEE").all()

    if not employees:
        raise HTTPException(status_code=400, detail="No employees available")

    # Find employee with least active tasks
    workload = []
    for emp in employees:
        count = db.query(Task).filter(
            Task.assigned_to == emp.id,
            Task.status != TaskStatus.done
        ).count()
        workload.append((emp, count))

    selected_employee = min(workload, key=lambda x: x[1])[0]

    # Get task
    task = db.query(Task).filter(Task.id == task_id).first()
    if not task:
        raise HTTPException(status_code=404, detail="Task not found")

    # Assign task
    task.assigned_to = selected_employee.id
    db.commit()

    return {
        "message": "Task assigned",
        "task_id": task_id,
        "assigned_to": selected_employee.name
    }
