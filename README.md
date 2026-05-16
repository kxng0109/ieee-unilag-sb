# ieee-unilag-sb

Repository for IEEE Unilag Student Branch website and APIs.

## Team

This project is built and maintained by the IEEE UNILAG Student Branch web team.

**Project Lead**
- Webmaster — Otitodilichukwu Osakwe ([@tito-osakwe](https://github.com/tito-osakwe))

**Frontend Developers**
- Eyitayo Obembe
- Femi Oyetade
- Fortune Uchegbu
- Adedamola Adeyemi
- Demilade Ayeku

**Backend Developers**
- Truelife Agada
- Joshua Ike
- Semilore Omotade-Michaels

**UI/UX Design**
- Afolabi Olanrewaju

**Repository Maintainer**
- [@kxng0109](https://github.com/kxng0109)

## Structure

- `backend/` — Node/Express API (TypeScript)
- `frontend/` — Next.js app

## Backend — Quick Start

Requirements: Node 18+ and a MongoDB instance.

1. Install dependencies

```bash
cd backend
npm install
```

2. Copy environment template and update values

```bash
cp .env.example .env
# edit .env and set MONGODB_URI, PORT, NODE_ENV
```

3. Development

```bash
npm run dev
```

4. Build & start (production)

```bash
npm run build
npm start
```

### Useful scripts (in `backend/package.json`)

- `dev` — Run using `ts-node-dev` for fast reloads
- `build` — Compile TypeScript to `dist/`
- `start` — Run compiled `dist/server.js`
- `lint` — Run ESLint over TypeScript files

## Environment variables

Create `backend/.env` from `backend/.env.example`. Required variables:

- `MONGODB_URI` — MongoDB connection string
- `PORT` — server port (default: `5000`)
- `NODE_ENV` — `development` | `production`

See `backend/.env.example` for a template.

## Contribution Workflow

Follow the existing branch/PR workflow:

```bash
git checkout dev
git pull origin dev
git checkout -b feat/your-feature
# work, commit, and push
git push origin feat/your-feature
```

Open a Pull Request targeting `dev` and include a clear description.

## Additional notes

- `.gitignore` in `backend/` now includes common lockfiles (`package-lock.json`, `yarn.lock`, `pnpm-lock.yaml`) so contributors can use their preferred package manager.
- If you need help running the project locally, open an issue or ping the maintainers in the repo.
