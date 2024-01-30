from fastapi import FastAPI, Response
from fastapi.middleware.cors import CORSMiddleware
import httpx

app = FastAPI()

origins = ["http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/hello")
async def say_hello():
    return Response(content="Hello from Python", media_type="text/plain")

@app.get("/hello-from-go")
async def say_hello_from_go():
    async with httpx.AsyncClient() as client:
        response = await client.get("http://go-service:8081/hello")
        return Response(content=response.text, media_type=response.headers["Content-Type"])
