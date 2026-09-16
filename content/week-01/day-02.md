+++
title = "Day 02 (Week 2) - September 16, 2026"
weight = 2
+++

## Detailed Work Report: Day 2 - Week 2

Today was a highly productive day as I completed the entire process of building a personal Portfolio website from scratch. Instead of using pre-made templates, I built the UI using Next.js, integrated real data from my personal CV, and established a basic CI/CD pipeline with Vercel.

### 1. Completed Milestones

- **UI/UX Design & Styling (Tailwind CSS):**
  - Moved away from flat designs and applied the trending **Modern Glassmorphism** aesthetic.
  - Utilized `backdrop-blur`, `mix-blend-screen`, and CSS gradients to create deep, glowing background effects.
  - Achieved 100% responsiveness using Flexbox/Grid combined with Tailwind utility classes (`md:flex`, `grid-cols-1 md:grid-cols-2`), ensuring a seamless experience across mobile and desktop devices.
  - Added micro-interactions such as hover cards with subtle lifting effects, avatar glow borders, and a floating navigation bar.

- **Data Structure & TypeScript:**
  - Strictly defined data types using Interfaces (`Profile`, `Skill`, `Project`) to ensure type safety and prevent runtime errors.
  - Completely decoupled the UI logic from the data by extracting real projects and skills from my CV into a Mock Data file (`portfolioData.ts`). This architectural choice makes future content updates and maintenance effortless.

- **Performance Optimization (Next/Image):**
  - Configured `remotePatterns` in `next.config.ts` to authorize image fetching from GitHub's external servers.
  - Replaced the traditional HTML `<img>` tag with Next.js's `<Image>` component to automatically compress sizes, convert formats to WebP, and enable lazy-loading, thereby optimizing the First Load performance.

- **Git Flow & Deployment:**
  - Adhered to standard team workflows: Created a dedicated `feature/trang-ca-nhan` branch for development without risking the stability of the main codebase.
  - Pushed the code, opened a Pull Request (PR), and merged it into the `main` branch on GitHub.
  - Successfully deployed the application to Vercel's cloud infrastructure, taking advantage of its automatic Next.js framework detection.

### 2. Technical Challenges & Solutions

```text
# Challenge 1: Pushing a new local branch to GitHub (No upstream branch error)
- Symptom: Running `git push` on a newly created local branch failed because the remote destination didn't exist.
- Solution: Used the command `git push --set-upstream origin feature/trang-ca-nhan` to force Git to create a matching branch on GitHub and track it for future pushes.

# Challenge 2: Git history synchronization out of sync post-Merge
- Symptom: After merging the Pull Request on GitHub's web interface, the local `main` branch remained outdated. Pushing reports from the feature branch would cause history conflicts.
- Solution: Switched the local repository back to the primary branch (`git switch main`), pulled the latest changes from the remote (`git pull`) to synchronize, and only then committed the daily reports.

# Challenge 3: Vercel failing to detect the Next.js project
- Symptom: The GitHub repository acts as a monorepo containing both a Hugo project and a Next.js project, causing Vercel to throw a 404 error during the build phase.
- Solution: Adjusted the `Root Directory` in Vercel's Import Project settings to explicitly point to the `/portfolio` subfolder, ensuring the build scripts ran in the correct context.
```

### 3. Next Steps (Day 3)
- Thoroughly review the theoretical questions for Week 2 (especially distinguishing between CSR, SSR, SSG, and the inner workings of the Virtual DOM).
- Conduct a live demo for the Mentor, showcasing the page load speed, responsiveness, and codebase architecture.
- Read official documentation regarding Next.js API Routes to prepare for more complex upcoming tasks.

# Challenge 4: Resolving Git Source Code Conflict (Merge Conflict)
- Symptom: During a branch merge practice, the Terminal threw a red "MERGE CONFLICT" error because the same line of code was modified in both branches, pausing the merge process.
- Solution (Tool & Execution):
  1. Tool used: I utilized the built-in visual Merge Editor in my IDE, **Visual Studio Code (VS Code)**.
  2. Detailed Execution:
     - Opened the conflicted file in VS Code. The editor highlighted the conflicting code blocks along with Git's conflict markers (<<<<<<<, =======, >>>>>>>).
     - Reviewed and analyzed the difference between the "Current Change" (code in the currently checked-out branch) and the "Incoming Change" (code from the branch being merged).
     - Used VS Code's UI buttons (or edited manually) to select "Accept Current Change", "Accept Incoming Change", or "Accept Both Changes" depending on the desired code logic.
     - Cleaned up the file to ensure no residual Git markers were left behind and pressed Ctrl + S to save.
     - Ran `git add .` in the Terminal to stage the resolved file.
     - Finally, executed `git commit -m "Resolved merge conflict"` to conclude and successfully finish the merge process.