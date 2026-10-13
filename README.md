# Hashim Aziz | Project Portfolio

Live site: https://hashimaziz46.github.io/

Personal portfolio for Hashim Aziz, Project Manager & Scrum Master. Built with React 19, TypeScript, Vite, Emotion and Framer Motion, based on the [portfolio-01](https://github.com/simpleC0de/portfolio-01) template (MIT).

## Development

Requires Node 18+ (Node 20 recommended).

```bash
npm install
npm run dev     # http://localhost:5173/
npm run build   # production build into dist/
npm run lint
```

## Editing content

- Name, summary, links, hero stats, section list: `src/data/profile.ts`
- Experience: `src/components/sections/Experience.tsx`
- Projects: `src/components/sections/Projects.tsx`
- Skills: `src/components/sections/Skills.tsx`
- Education: `src/components/sections/Education.tsx`
- Resume PDF: replace `public/Hashim-Aziz-Resume.pdf` (keep the file name)

## Deployment

Every push to `main` builds the site and deploys it to GitHub Pages via `.github/workflows/main.yml`. The `base` in `vite.config.ts` must match the repository name.
