# Douglas Luz — personal website

[Visit douglasluz.com](https://douglasluz.com)

This repository contains my personal corner of the internet: a place to introduce myself, share what I am learning, document my work, and collect projects that are worth revisiting. It is intentionally small, fast, and content-first.

## What is here

- A homepage with an introduction and highlights from the blog, work history, and projects
- Long-form writing powered by Markdown, with reading-time estimates and draft support
- English posts with optional Brazilian Portuguese translations
- A chronological work history
- Space for project notes, demos, and source-code links
- Light, dark, and system themes
- RSS, sitemap, canonical URLs, and social-sharing metadata

## Available pages

| Page | Path | Description |
| --- | --- | --- |
| Home | [`/`](https://douglasluz.com/) | Introduction, recent writing, work highlights, projects, and contact links |
| Blog | [`/blog`](https://douglasluz.com/blog) | All published English posts, grouped by year |
| Blog post | `/blog/:slug` | A single article, with a language switch when a translation exists |
| Portuguese post | `/pt-BR/blog/:slug` | The Brazilian Portuguese edition of a translated article |
| Work | [`/work`](https://douglasluz.com/work) | Roles and professional experience in reverse chronological order |
| Projects | [`/projects`](https://douglasluz.com/projects) | Project write-ups with optional demo and repository links |
| RSS feed | [`/rss.xml`](https://douglasluz.com/rss.xml) | Updates for published posts and projects |

## Built with

- [Astro](https://astro.build/) and TypeScript
- [Tailwind CSS](https://tailwindcss.com/) for styling
- Astro content collections for blog posts, work entries, and projects
- Markdown for content authoring
- Vercel Analytics and Speed Insights

## Run it locally

You will need a current Node.js release and npm.

```sh
npm install
npm run dev
```

Astro will print the local URL when the development server starts. The most useful commands are:

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Type-check the project and create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

Set `SITE_URL` when building for a different hostname; otherwise canonical URLs and the sitemap use `https://douglasluz.com`.

## Content

Most updates do not require changing a component:

- Blog posts live in `src/content/blog/`. Each post starts in English and can have a `pt-BR.md` translation alongside it.
- Work entries live in `src/content/work/`.
- Project write-ups live in `src/content/projects/`.

Frontmatter schemas for every collection are defined in `src/content/config.ts`. Set `draft: true` on a blog post or project to keep it out of production pages.

## Acknowledgements

The site started from [astro-nano](https://github.com/markhorn-dev/astro-nano) and has since been adapted into a personal portfolio and bilingual blog.
