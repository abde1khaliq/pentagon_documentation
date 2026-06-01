import { DiPython } from "react-icons/di";
import { SiGnubash } from "react-icons/si";

export const introCode = {
  code: `import sys
import os
from pentagon import Pentagon
from pentagon.worker import run_app
from config import setup_app

app = Pentagon(title="Pentagon Project", description="Project made using Pentagon for Python.")

if __name__ == "__main__":
    sys.modules['runserver'] = sys.modules['__main__']
    
    setup_app(app)
    run_app(app, watch=True)`,

  language: "python",
  title: "app.py",
  icon: DiPython,
};

export const installationCommand = {
  code: `pip install pentagon-framework`,
  language: "bash",
  title: "bash",
  icon: SiGnubash,
};

export const confirmationCommand = {
  code: `penta-admin`,
  language: "bash",
  title: "bash",
  icon: SiGnubash,
};

export const projectCreationCommand = {
  code: `penta-admin init project --name my_project`,
  language: "bash",
  title: "bash",
  icon: SiGnubash,
};

export const projectCreationCommandResponse = {
  code: `╭────────────────────────────────────────────────────────────────────────────╮
│                                                                            │
│      PENTAGON FRAMEWORK                                                    │
│                                                                            │
╰──────────────────────── CLI v0.1.0 ────────────────────────────────────────╯

Initializing project my_project

my_project/
├── runserver.py
├── README.md
├── config.py
└── app/
    ├── __init__.py
    ├── database/
    │   ├── __init__.py
    │   └── connection.py
    ├── models/
    │   └── __init__.py
    ├── router/
    │   ├── __init__.py
    │   └── index.py
    ├── services/
    │   └── __init__.py
    ├── schemas/
    │   └── __init__.py
    └── utils/
        └── __init__.py

──────────────────────────────────────────────────────────────────────────────

✔ Project created! ./my_project

Next steps:
  cd my_project
  python runserver.py
`,
  language: "bash",
  title: "bash",
  icon: SiGnubash,
};

export const runServerCommand = {
  code: `cd my_project 
python runserver.py`,
  language: "bash",
  title: "bash",
  icon: SiGnubash,
};

export const runServerCommandResponse = {
    code: `──────────────────────────── Loading components ──────────────────────────────
  ✔ router app.router.index
──────────────────────────────────────────────────────────────────────────────

✔ 1 loaded  ⬠ 2 endpoints registered

╭─────────────────────────────────────────────────────────────────────────────╮
│                                                                             │
│    ⬠  PENTAGON DEV SERVER                                                  
│                                                                             │
╰──────────────────────── CLI v0.1.11 ────────────────────────────────────────╯
⚡ File watcher active — auto-reload on .py changes
──────────────────────────────────────────────────────────────────────────────
✔ Serving on http://127.0.0.1:8000
Press Ctrl+C to stop
──────────────────────────────────────────────────────────────────────────────
`,
language: "bash",
title: "bash",
icon: SiGnubash,
}

// Tutorial Initialization Snippets
export const tutorialInitCommand = {
  code: `mkdir task_api
cd task_api
penta-admin init project --name task_manager`,
  language: "bash",
  title: "bash",
  icon: SiGnubash,
};

export const tutorialNextSteps = {
  code: `cd task_manager
python runserver.py`,
  language: "bash",
  title: "bash",
  icon: SiGnubash,
};

export const basicRoutingCode = {
  code: `from runserver import app

@app.get("/", group="General", description="Home page")
def index(request):
    return "Welcome to Pentagon!"

@app.post("/submit", group="Actions")
def submit(request):
    return {"message": "Data received"}`,
  language: "python",
  title: "app/router/index.py",
  icon: DiPython,
};

export const dynamicRoutingCode = {
  code: `@app.get("/users/<user_id>", group="Users")
def get_user(request, user_id):
    return {"user_id": user_id, "status": "active"}`,
  language: "python",
  title: "app/router/users.py",
  icon: DiPython,
};

export const requestHandlingCode = {
  code: `@app.post("/echo")
def echo(request):
    return {
        "method": request.method,
        "path": request.path,
        "headers": request.headers,
        "body": request.body.decode()
    }`,
  language: "python",
  title: "app/router/echo.py",
  icon: DiPython,
};

export const databaseConnectionCode = {
  code: `from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os

DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./pentagon.db")

engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()`,
  language: "python",
  title: "app/database/connection.py",
  icon: DiPython,
};

export const serviceLayerCode = {
  code: `from app.database.connection import SessionLocal
from app.models.user import User

class UserService:
    @staticmethod
    def get_user_by_id(user_id: int):
        db = SessionLocal()
        try:
            return db.query(User).filter(User.id == user_id).first()
        finally:
            db.close()`,
  language: "python",
  title: "app/services/user_service.py",
  icon: DiPython,
};

export const schemaValidationCode = {
  code: `from pydantic import BaseModel

class UserBase(BaseModel):
    username: str
    email: str

class UserCreate(UserBase):
    password: str

class UserResponse(UserBase):
    id: int
    is_active: bool

    class Config:
        orm_mode = True`,
  language: "python",
  title: "app/schemas/user_schema.py",
  icon: DiPython,
};

export const generalModelCode = {
  code: `from sqlalchemy import Column, Integer, String, DateTime
from datetime import datetime
from app.database.connection import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    email = Column(String, unique=True, index=True)
    created_at = Column(DateTime, default=datetime.utcnow)`,
  language: "python",
  title: "app/models/user.py",
  icon: DiPython,
};

export const docsMetadataCode = {
  code: `@app.get("/users", group="Users", description="List all users")
def list_users(request):
    return [{"id": 1, "username": "admin"}]`,
  language: "python",
  title: "app/router/users.py",
  icon: DiPython,
};

export const runserverFileCode = {
  code: `import sys
import os
from pentagon import Pentagon
from pentagon.worker import run_app
from config import setup_app

app = Pentagon(title="Pentagon Project", description="Project made using Pentagon for Python.")

if __name__ == "__main__":
    sys.modules['runserver'] = sys.modules['__main__']

    setup_app(app)
    run_app(app, watch=True)`,
  language: "python",
  title: "runserver.py",
  icon: DiPython,
};

export const configFileCode = {
  code: `import importlib
import os
import sys
from rich.console import Console
from rich.rule import Rule

console = Console()

def setup_app(app):
    """Automatically links all routers and models to the Pentagon app."""
    components = ['router', 'models']

    if os.getcwd() not in sys.path:
        sys.path.append(os.getcwd())

    base_path = os.path.join(os.path.dirname(__file__), 'app')

    console.print(Rule("[dim]Loading components[/dim]", style="dim"))

    loaded, failed = [], []

    for component in components:
        comp_path = os.path.join(base_path, component)

        if not os.path.exists(comp_path):
            continue

        for file in os.listdir(comp_path):
            if file.endswith('.py') and file != '__init__.py':
                module_name = f"app.{component}.{file[:-3]}"
                try:
                    importlib.import_module(module_name)
                    loaded.append((component, module_name))
                    console.print(f"  [green]✔[/green] [dim]{component}[/dim] [white]{module_name}[/white]")
                except Exception as e:
                    failed.append((component, module_name, str(e)))
                    console.print(f"  [red]✖[/red] [dim]{component}[/dim] [white]{module_name}[/white] [red dim]— {e}[/red dim]")

    console.print(Rule(style="dim"))

    # Summary line
    endpoint_count = len(app.router)
    console.print(
        f"\\n[bold green]✔ {len(loaded)} loaded[/bold green]  "
        + (f"[bold red]✖ {len(failed)} failed[/bold red]  " if failed else "")
        + f"[bold cyan]⬠ {endpoint_count} endpoints registered[/bold cyan]\\n"
    )`,
  language: "python",
  title: "config.py",
  icon: DiPython,
};

export const connectionFileCode = {
  code: `from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os

DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./pentagon.db")

engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False} if "sqlite" in DATABASE_URL else {})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def init_db():
    Base.metadata.create_all(bind=engine)`,
  language: "python",
  title: "app/database/connection.py",
  icon: DiPython,
};

export const indexRouterFileCode = {
  code: `from runserver import app
from pentagon.utils import render_welcome

@app.get("/", group="General", description="Home page")
def index(request):
    return render_welcome(app.title, app.description)`,
  language: "python",
  title: "app/router/index.py",
  icon: DiPython,
};

// Tutorial Snippets
export const tutorialModelCode = {
  code: `from sqlalchemy import Column, Integer, String, Boolean
from app.database.connection import Base

class Task(Base):
    __tablename__ = "tasks"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    description = Column(String, nullable=True)
    completed = Column(Boolean, default=False)`,
  language: "python",
  title: "app/models/task.py",
  icon: DiPython,
};

export const tutorialSchemaCode = {
  code: `from pydantic import BaseModel
from typing import Optional

class TaskBase(BaseModel):
    title: str
    description: Optional[str] = None

class TaskCreate(TaskBase):
    pass

class TaskResponse(TaskBase):
    id: int
    completed: bool

    class Config:
        orm_mode = True`,
  language: "python",
  title: "app/schemas/task.py",
  icon: DiPython,
};

export const tutorialServiceCode = {
  code: `from sqlalchemy.orm import Session
from app.models.task import Task
from app.schemas.task import TaskCreate

class TaskService:
    @staticmethod
    def create_task(db: Session, task_data: TaskCreate):
        task = Task(**task_data.dict())
        db.add(task)
        db.commit()
        db.refresh(task)
        return task

    @staticmethod
    def get_tasks(db: Session):
        return db.query(Task).all()`,
  language: "python",
  title: "app/services/task_service.py",
  icon: DiPython,
};

export const tutorialRouterCode = {
  code: `from runserver import app
from app.database.connection import SessionLocal
from app.services.task_service import TaskService
from app.schemas.task import TaskCreate, TaskResponse

@app.get("/tasks", group="Tasks", description="List all tasks")
def list_tasks(request):
    db = SessionLocal()
    try:
        tasks = TaskService.get_tasks(db)
        return [TaskResponse.from_orm(t).dict() for t in tasks]
    finally:
        db.close()

@app.post("/tasks", group="Tasks", description="Create a new task")
def create_task(request):
    db = SessionLocal()
    try:
        # Simple JSON parsing for the example
        import json
        data = json.loads(request.body)
        task_data = TaskCreate(**data)

        task = TaskService.create_task(db, task_data)
        return TaskResponse.from_orm(task).dict()
    finally:
        db.close()`,
  language: "python",
  title: "app/router/tasks.py",
  icon: DiPython,
};