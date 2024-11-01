# Usa una imagen base oficial de Python
FROM python:3.9-slim

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos de requisitos a la imagen del contenedor
COPY requirements.txt .

# Instala las dependencias
RUN pip install --no-cache-dir -r requirements.txt

# Copia el contenido del backend a la imagen del contenedor
COPY back_end/ .

# Copia el archivo de credenciales de Firebase a la imagen del contenedor

# Establece las variables de entorno necesarias
ENV ENV=development
ENV DEV_SQLALCHEMY_DATABASE_URI=sqlite:///development.db


# Establece la variable de entorno PORT que Cloud Run utilizará
ENV PORT=8080

# Expone el puerto en el que la aplicación correrá
EXPOSE 8080

# Comando para ejecutar la aplicación
CMD ["python", "app.py"]