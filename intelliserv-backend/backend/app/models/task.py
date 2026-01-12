from sqlalchemy import Column, Integer, String, Enum, ForeignKey, DateTime
from app.database import Base
import enum
from datetime import datetime

class TaskStatus(str, enum.Enum):
    todo = "TODO"
    in_progress = "IN_PROGRESS"
    done = "DONE"

class TaskPriority(str, enum.Enum):
    low = "LOW"
    medium = "MEDIUM"
    high = "HIGH"

class Task(Base):
    __tablename__ = "tasks"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    description = Column(String)
    priority = Column(Enum(TaskPriority), nullable=False)
    status = Column(Enum(TaskStatus), default=TaskStatus.todo)
    assigned_to = Column(Integer, ForeignKey("users.id"), nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
