#!/bin/bash

# Deploy to Heroku using Docker
echo "🚀 Deploying Steaklocate App to Heroku..."

# Set Heroku CLI path
export PATH="$HOME/.nvm/versions/node/v16.20.2/bin:$PATH"

# App name
APP_NAME="steaklocate-app-2025-375d8b40dba2"

# Check if we're logged in to Heroku
echo "📝 Checking Heroku login status..."
heroku auth:whoami || {
    echo "❌ Not logged in to Heroku. Please login first:"
    echo "   heroku login"
    exit 1
}

# Tag the image for Heroku
echo "🏷️  Tagging Docker image for Heroku..."
docker tag steaklocate:latest registry.heroku.com/$APP_NAME/web

# Login to Heroku Container Registry
echo "🔐 Logging into Heroku Container Registry..."
heroku container:login

# Push to Heroku
echo "📤 Pushing to Heroku Container Registry..."
docker push registry.heroku.com/$APP_NAME/web

# Release the app
echo "🎉 Releasing the app..."
heroku container:release web --app $APP_NAME

echo "✅ Deployment complete!"
echo "🌐 Your app should be available at: https://$APP_NAME.herokuapp.com"
