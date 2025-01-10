FROM python:3.9-slim

WORKDIR /app

COPY requirements.txt .

RUN npm install fireworks-js
RUN pip install -r requirements.txt

COPY . .

CMD ["python", "app.py"]