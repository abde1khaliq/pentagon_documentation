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