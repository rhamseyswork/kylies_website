#!/bin/bash
#chmod +x update_client_branch.sh
#./update_client_branch.sh

# Ensure we're on the server branch
git checkout main

# Pull the latest changes from the server branch (optional but recommended)
git pull origin main --rebase

# Add all changes to staging
git add -A

# Commit the changes
git commit -m "Update server branch with latest changes"

# Force push the changes to GitHub
git push origin main --force

#!/bin/bash

# Delete the remote branch if it exists
git push origin --delete gh-pages || true

# Ensure you are on the main branch
git checkout main

# Pull the latest changes from the main branch
git pull origin main

# Create a new local branch from main
git checkout -B gh-pages

# Build your project
npm run build || { echo "Build failed"; exit 1; }

# Ensure the target directory exists
mkdir -p dist_version_control

# Move the built files to a version-controlled directory with a timestamp
timestamp=$(date +%Y%m%d%H%M%S)
mv dist dist_version_control/dist_$timestamp || { echo "Move failed"; exit 1; }

# Commit and push the changes to the remote branch
git add .
git commit -m "Deploy: $timestamp"
git push origin gh-pages || { echo "Push failed"; exit 1; }

# Deploy to GitHub Pages
gh-pages -d ./dist_version_control -b gh-pages || { echo "Deployment failed"; exit 1; }


# Delete the remote branch if it exists
git push origin --delete gh-pages || true

# Ensure you are on the main branch
git checkout main

# Pull the latest changes from the main branch
git pull origin main

# Create a new local branch from main
git checkout -B gh-pages

# Build your project
npm run build || { echo "Build failed"; exit 1; }

# Ensure the target directory exists
mkdir -p dist_version_control

# Move the built files to a version-controlled directory
mv dist dist_version_control/dist_$(date +%Y%m%d%H%M%S) || { echo "Move failed"; exit 1; }

# Commit and push the changes to the remote branch
git add .
git commit -m "Deploy: $(date)"
git push origin gh-pages || { echo "Push failed"; exit 1; }

# Deploy to GitHub Pages
gh-pages -d ./dist_version_control -b gh-pages || { echo "Deployment failed"; exit 1; }