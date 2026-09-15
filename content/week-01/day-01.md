+++
title = "Day 01 - 15/09/2026"
weight = 1
+++

## Day 1 Summary

Today, I successfully learned and practiced setting up the basic working environment and deploying the reporting website.

### 1. Knowledge Learned
- **Source code management with Git:** Learned how to initialize configuration and connect local code to GitHub.
- **Building Website with Hugo:** Understood the static folder structure, how to clone a repository containing a theme (`submodule`), and how to configure the `config.toml` file.
- **Deploying Website:** Learned how to use GitHub Actions and GitHub Pages to automatically deploy the website to the internet.

### 2. Commonly Used Git Commands (Notes)

```bash
# 1. Clone source code from the internet to local machine (the flag is required to download the theme)
git clone --recurse-submodules <link-repo>

# 2. Change the remote URL to my own repository
git remote set-url origin <my-repo-link>

# 3. Add all modified files to the staging area
git add .

# 4. Record the commit history with a message (Double quotes are required)
git commit -m "Update Day 1 report"

# 5. Push all code and history from local machine to GitHub
git push
``` 

### 3. Challenges & Solutions

```text
# Error 1: Windows blocked the execution of the Hugo command (hugo.exe) due to system security policies.
Solution: Found the root cause to be the Smart App Control feature in Windows 11. Solved by turning off this security restriction to allow the command to run.

# Error 2: The automatic web build process on GitHub Actions failed (red X).
Solution: The error occurred because GitHub did not grant write permissions to the bot. Solved by going to Settings -> Actions -> General and successfully granting "Read and write permissions".
```

### 4. Plans for Tomorrow
- Continue diving deeper into Git Flow (Creating Branches, Pull Requests, and Merging code).
- Complete the conflict resolution practice.