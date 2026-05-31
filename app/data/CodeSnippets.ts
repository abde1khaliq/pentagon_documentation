import { DiPython } from "react-icons/di"
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
    icon: DiPython
}


export const installationCommand = {
    code: `pip install pentagon-framework`,
    language: "bash",
    title: "bash",
    icon: SiGnubash
}

export const confirmationCommand = {
    code: `penta-admin`,
    language: "bash",
    title: "bash",
    icon: SiGnubash
}