from sqlalchemy import Column, Integer, String
from app.database import Base
import enum

class RoleEnum(str, enum.Enum):
    ADMIN = "ADMIN"
    EMPLOYEE = "EMPLOYEE"

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, unique=True, index=True)
    role = Column(String, nullable=False)   # ✅ FIXED
    hashed_password = Column(String, nullable=False)
