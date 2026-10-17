# The Universe Has Some Explaining To Do ✨

A tiny, interactive cosmic love story made for Varshini. It is a static React site with seven chapters, playful fictional experiments, an optional inside joke, and no tracking or backend.

## Run it locally

You need Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open the local URL Vite prints. To verify the production version:

```bash
npm run build
npm run preview
```

## Personalize it

All personal copy is in `src/config/story.ts`. Edit `recipientName`, `senderName`, the chapter copy, romantic message, final message, and signature there. The recipient is currently `Varshini`; leaving `recipientName` empty is also supported.

Set `insideJokeEnabled` to `false` to remove the bonus intermission, or edit `insideJokeTitle` and `insideJokeText`. Sound is off by default; keep `soundEnabledByDefault: false` for the gentlest first visit. Colors live near the top of `src/index.css` and in `tailwind.config.js`.

## Deploy to GitHub Pages

This project is prepared for **https://github.com/Satyam432/UsKinda**.

1. Commit this project.
2. Push it to the `main` branch:

```bash
git init
git add .
git commit -m "Create our little cosmic story"
git branch -M main
git remote add origin https://github.com/Satyam432/UsKinda.git
git push -u origin main
```

3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, select **GitHub Actions** as the source.
5. The included workflow builds with the repository name as Vite's base path and deploys `dist` using official GitHub Actions.
6. After the workflow succeeds, the live URL will be `https://satyam432.github.io/UsKinda/` and is also shown in **Settings → Pages** and the workflow summary.

For a manual deploy, set the base path first:

```bash
VITE_BASE_PATH=/UsKinda/ npm run deploy
```

## Pre-sharing checklist

- Read every line in `src/config/story.ts` out loud.
- Decide whether the inside-joke intermission feels right.
- Test once on your phone with sound both off and on.
- Check the signature and repository URL.
- Open the deployed link in a private window.
- Remember: a public GitHub repository exposes the source code and all messages inside it. Use a private repository if you prefer to keep the copy private (subject to your GitHub plan's Pages availability).

## Useful commands

```bash
npm run dev        # development server
npm run typecheck  # TypeScript verification
npm run test       # interaction/config tests
npm run build      # production build
npm run preview    # preview the production build
```
