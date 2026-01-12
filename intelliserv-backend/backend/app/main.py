from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes import auth, tasks
from app.database import Base, engine

Base.metadata.create_all(bind=engine)

app = FastAPI(title="IntelliServe API")

# ✅ ADD THIS BLOCK (VERY IMPORTANT)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3001",
                   "http://localhost:3000"],  # React app
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router)
app.include_router(tasks.router)

@app.get("/")
def root():
    return {"message": "IntelliServe backend running"}
