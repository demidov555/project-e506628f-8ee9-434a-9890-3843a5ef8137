from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["*"],
)

@app.get("/agents/available")
def get_available_agents():
    return {
        "list": []
    }

@app.get("/")
def home():
    return {"message": "Привет с Render!"}

@app.get("/test")
def test():
    return {"status": "ok"}
