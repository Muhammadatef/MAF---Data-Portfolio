#!/bin/bash

echo "🚀 Deploying Portfolio to GitHub Pages..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Make sure you're in the portfolio project directory."
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the project
echo "🏗️  Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi

# Export static files
echo "📤 Exporting static files..."
npm run export

if [ $? -ne 0 ]; then
    echo "❌ Export failed. Please check the errors above."
    exit 1
fi

# Deploy to GitHub Pages
echo "🌐 Deploying to GitHub Pages..."
npm run deploy

if [ $? -eq 0 ]; then
    echo "✅ Deployment successful!"
    echo "📱 Your portfolio will be available at:"
    echo "   https://YOUR_USERNAME.github.io/portfolio"
    echo ""
    echo "⏰ Note: It may take a few minutes for changes to appear."
else
    echo "❌ Deployment failed. Please check the errors above."
    exit 1
fi