# Gen AI for Modern Workforce — Prompt Lib

Live site: https://warasinee-cha.github.io/genai4mf-prompt-lib/
**Password:** `genai2026`

---

## Local preview

```bash
mkdocs serve
```

Open http://127.0.0.1:8000 in your browser. Changes to `docs/` reload automatically.

---

## Deploy to GitHub Pages

> Always use `/usr/bin/git` — the `git` in PATH is Zed's bundled version which lacks HTTPS support.

```bash
mkdocs build
staticrypt site/**/*.html site/*.html -p genai2026 -d site --short
/usr/bin/git rm -r --cached --ignore-unmatch ac-cards ac-infographics ac-interior ac-poster ac-talking-agent ac-video ac-web-application ac-web-presentation ac-website additional-tool assets at-deep-research canva-ai edt-meeting-toolkit edt-presentation-toolkit fun-prompts gamma-app generative-ai-basics images index.html luma-ai-video main-tools notebooklm pe-creativity-boost pe-data-analytics pe-data-analytics-v2 pe-english-communication pe-manager-toolkit pe-personalized-learning pe-personalized-learning-v2 pe-writing-doc pe-writing-task-v2 prompt-engineering search site sitemap.xml sitemap.xml.gz slide stylesheets suno-video talk-to-ai 404.html .staticrypt.json 2>/dev/null
cp -r site/* .
/usr/bin/git add -A
/usr/bin/git commit -m "Deploy"
/usr/bin/git push origin gh-pages
```

---

## Change the password

Replace `genai2026` with the new password in the deploy step above, then update this README.

---

## Adding files (PDFs, images)

- Drop files into `docs/` (not `docs/images/`)
- Use simple ASCII filenames — no spaces, no Thai characters (e.g. `pm25-health-effects.pdf`)
- Then redeploy

---

## Install dependencies (first time only)

```bash
pip install mkdocs-material
npm install -g staticrypt
```
