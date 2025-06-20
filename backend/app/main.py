from fastapi import FastAPI, Request
from pydantic import BaseModel
from datetime import datetime
import uuid

app = FastAPI()
logs = []

class LogEntry(BaseModel):
    severity: str  # "info", "warning", "error"
    message: str

@app.post("/log")
def submit_log(entry: LogEntry):
    log = {
        "id": str(uuid.uuid4()),
        "timestamp": datetime.utcnow().isoformat(),
        "severity": entry.severity,
        "message": entry.message
    }
    logs.append(log)
    return {"status": "ok", "entry": log}

@app.get("/logs")
def get_logs():
    return logs[-100:]

@app.get("/metrics")
def metrics():
    return (
        "log_service_logs_total {}\n".format(len(logs)),
        {"content-type": "text/plain"}
    )
