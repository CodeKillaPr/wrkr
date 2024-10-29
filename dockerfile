# Use an official Python runtime as a parent image
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the requirements file into the container
COPY back_end/requirements.txt ./

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the backend code into the container
COPY back_end/ .

# Set environment variables
ENV ENV=production
ENV FIREBASE_CREDENTIALS_PATH=back_end/testing-fec9a-firebase-adminsdk-h93xm-bbe2a6f5d2.json
ENV FIREBASE_DATABASE_URL=https://testing-fec9a.firebaseio.com/
ENV JWT_SECRET_KEY=tu-clave-secreta

# Make port 5000 available to the world outside this container
EXPOSE 5000

# Run the application
CMD ["python", "app.py"]