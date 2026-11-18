# rijulchadha.com

Source for my personal site: **https://www.rijulchadha.com**

A minimal single-page portfolio covering my work, projects, process and education.

## Stack

- React 18 + Vite
- Plain CSS (light/dark themes, no UI framework)
- Vercel hosting and Web Analytics

## Editing content

All text, projects, stats and links live in [`src/data.js`](src/data.js). Change that file and push to `main`, and Vercel redeploys automatically.

`public/llms.txt` is a plain-text version of the profile for AI tools. Keep it in sync when the content changes.

## Run locally

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
```
