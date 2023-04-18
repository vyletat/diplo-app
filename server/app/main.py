import uvicorn
from fastapi import FastAPI
from app.api.predictions_api import predictions
from app.api.customer_effort_api import customers
from app.service.prepare_service import init_models
from fastapi.middleware.cors import CORSMiddleware

init_models()

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(predictions)
app.include_router(customers)

@app.get("/")
async def root():
    return {"message": "DiploApp - backend"}

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=4444)
    # uvicorn.run(app, host="10.6.0.6", port=4444)
