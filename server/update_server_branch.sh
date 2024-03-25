#!/bin/bash
#chmod +x update_server_branch.sh
#./update_server_branch.sh

# Ensure we're on the server branch
git checkout server

# Pull the latest changes from the server branch (optional but recommended)
git pull origin server --rebase

# Add all changes to staging
git add -A

# Commit the changes
git commit -m "Update server branch with latest changes"

# Force push the changes to GitHub
git push origin server --force