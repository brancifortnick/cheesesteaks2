# Build stage for React app
FROM node:18-alpine AS build-stage
WORKDIR /react-app
COPY react-app/package*.json ./
RUN npm install
COPY react-app/. .
ENV REACT_APP_BASE_URL=https://steaklocate-app-2025-375d8b40dba2.herokuapp.com
RUN npm run build

# Production stage for Flask app
FROM python:3.9.4
ENV FLASK_APP=app
ENV FLASK_ENV=production
ENV PYTHONUNBUFFERED=1
EXPOSE 8000

WORKDIR /var/www
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
RUN pip install --no-cache-dir psycopg2-binary

COPY . .
COPY --from=build-stage /react-app/build/* app/static/

CMD ["gunicorn", "-b", "0.0.0.0:8000", "app:app"]

