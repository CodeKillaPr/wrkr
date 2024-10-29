FROM python:latest

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY back_end/ .

ENV ENV=production
ENV FIREBASE_CREDENTIALS_PATH=/app/testing-fec9a-firebase-adminsdk-h93xm-bbe2a6f5d2.json
ENV FIREBASE_DATABASE_URL=https://testing-fec9a.firebaseio.com/
ENV JWT_SECRET_KEY=tu-clave-secreta

EXPOSE 5000

CMD ["python", "app.py"]