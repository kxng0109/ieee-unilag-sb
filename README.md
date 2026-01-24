# Contribution Workflow

To ensure we don't break the code, please follow this strict Git flow.

Never push directly to `main` or `dev`. Always use a Pull Request.

### 1. Start Fresh
Always pull the latest code from the development branch before you start working to avoid conflicts.
```bash
git checkout dev
git pull origin dev
```

### 2. Create Your Feature Branch

Name your branch based on the task you are doing (e.g., `feat/navbar`, `feat/event-api`).

```bash
git checkout -b feat/your-feature-name
```

### 3. Work & Commit

Make your changes and commit them with a clear message.

```bash
git add .
git commit -m "Feat: Add [feature name]"
```

### 4. Push & PR

Push your branch to GitHub and create a Pull Request against the `dev` branch.

```bash
git push origin feat/your-feature-name
```

*Go to GitHub and click "Compare & Pull Request".*
