FROM node:22.12 AS build-stage
WORKDIR /react-app
COPY react-app/. .
# You have to set this because it should be set during build time.
ENV REACT_APP_BASE_URL=https://steakout-db59827f2430.herokuapp.com/
# Build our React App
RUN npm install
RUN npm run build
FROM python:3.9
# Setup Flask environment
ENV FLASK_APP=app
ENV FLASK_ENV=production
ENV SQLALCHEMY_ECHO=True
EXPOSE 8000
WORKDIR /var/www
COPY . .
COPY --from=build-stage /react-app/build/* app/static/
# Install Python Dependencies
RUN pip install -r requirements.txt
RUN pip install psycopg2
FROM ubuntu:22.04
RUN ["/bin/bash", "-c", "apt update && apt install curl -y && curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash && source ~/.nvm/nvm.sh && nvm install --lts && npm install -g npm"]
# Run flask environment
CMD gunicorn app:app

