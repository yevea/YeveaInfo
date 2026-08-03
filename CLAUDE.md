# CLAUDE.md — YeveaInfo

Instructions for AI agents working in this repository. Read this before editing anything.

## What this repo is

YeveaInfo is the static, Spanish-language knowledge base for **yevea.com/guides/** —
technical guides about olive wood, care instructions, terms of sale and FAQs.

It exists to **support** the transactional catalog at `yevea.com/catalog`, not to replace it.
Its job: get found and cited by search engines and AI answer engines, then send that traffic
to a page that can sell.

Anything that does not serve that goal does not belong here.

## Hard constraints — do not violate without asking

1. **yevea.com currently ranks first in its sector. SEO preservation outranks every other
   consideration.** Never change, move or delete a URL that is already live. If a page must
   move, the PR description must state the old URL, the new URL, and the 301 redirect needed.
2. **Plain static HTML only.** No React, no JSX, no npm, no `package.json`, no bundler, no
   build step. There is no transpiler on the server — a `.jsx` file cannot be served as a web
   page. Any file that ends in `.jsx` is a bug to be fixed, not a pattern to be copied.
3. **No content that requires JavaScript to appear.** Many AI crawlers fetch raw HTML and do
   not execute JS. If a fact only exists after a script runs, that fact is invisible to the
   crawlers this repo is built for. This includes JSON-LD injected at runtime and
   header/footer fragments loaded via `fetch()`.
4. **Do not add analytics, trackers, cookie banners, fonts from a CDN, or any third-party
   script.** Ask first.
5. **Do not invent facts.** Warranty length, shipping zones, delivery times, prices and
   dimensions are business facts. If a needed fact is missing or contradictory, stop and ask
   in the PR description. Never pick the more attractive number.

## Deployment

- Deployment root is **`yevea.com/guides/`**, served from `/public_html/guides` on cPanel
  shared hosting.
- Deployment is a `git pull` on `main` via cPanel → Git Version Control. There is no build
  step between the repo and the live site: **what is in the repo is what is served.**
- Therefore every internal link, asset reference, `hreflang` and canonical URL must be written
  against the real root: `/guides/...`, never `/es/...`, `/doc/...` or `/info/...`.
- `robots.txt` and `llms.txt` currently sit inside `/guides` while the project is in
  development. They move to the site root at launch. Do not relocate them without being asked.

## Structure

```
/guides/                       → index.html (landing page — required, do not leave empty)
/guides/madera-olivo/          → the main guide section; most content goes here
/guides/assets/                → css, js, images (referenced as /guides/assets/...)
```

`es/madera-olivo/preguntas-frecuentes.html` is the **reference pattern**: self-contained plain
HTML, inline JSON-LD, no client-side dependency. When in doubt, copy its shape.

Content is Spanish (`es_ES`). Do not add other languages unless asked — the storefront handles
multilingual separately.

## How to write a page

Every page must have, present on first byte in the raw HTML:

- `<title>` and `<meta name="description">`, written for a human, not stuffed with keywords.
- A `<link rel="canonical">` pointing at the real `https://yevea.com/guides/...` URL.
- Inline `schema.org` JSON-LD in `<head>`: `TechArticle` for guides, `FAQPage` for FAQ pages,
  `ContactPoint` for contact details.
- One `<h1>`, then a sane `<h2>`/`<h3>` hierarchy. Semantic elements (`<article>`, `<nav>`),
  breadcrumbs, and Spanish `alt` text on every image.
- **A direct, quotable answer first.** Open each section or FAQ entry with a single factual
  sentence, then the supporting detail. That first sentence is what gets lifted into an AI
  answer — write it so it stands alone and is still true out of context.
- A cross-link block back to the relevant `/catalog` product pages.

Write like someone who works with the wood: concrete, specific, honest about limitations.
No marketing superlatives, no filler introductions ("En el mundo actual de la madera...").
Specifics — grain, hardness, moisture behaviour, real dimensions — are what get cited.

## Shared header / footer

Reuse is fine, but it must resolve **before** the file reaches the server, not in the browser.
Either duplicate the markup into each page, or add a small deploy-time stitching script.
Do not reintroduce `assets/js/woodpages.js`-style runtime fragment loading.

## One source of truth per fact

Warranty length, shipping zones and prices are currently contradictory across pages (e.g.
warranty appears as both 3 and 5 years). Until that is reconciled, **do not copy a disputed
fact into a new page.** Flag it instead.

## Known cleanup backlog

Work through these as small, separate PRs — do not attempt them all at once:

1. Convert every `.jsx` file to plain `.html` (some are already HTML with the wrong extension).
2. Fix broken component imports in `es/madera-olivo/index.jsx` (capitalisation mismatch).
3. Normalise all paths to the `/guides/...` root.
4. Add the root `index.html` landing page.
5. Reconcile the conflicting warranty/shipping facts — needs a decision from Martin, not a
   guess.
6. Finish `es/madera-olivo/encimeras-bano.jsx` (still contains `[PLACEHOLDER: ...]` copy).

## Working agreement

- **One concern per pull request.** A PR that converts three pages and renames a folder is
  hard to review and hard to roll back.
- No mass renames, no repo-wide reformatting, no "while I was in there" changes.
- Do not delete existing content, even if it looks obsolete. Move it or flag it.
- In the PR description, always state: which URLs are created, changed or removed; whether any
  redirect is needed; and any fact you were unsure about.
- Martin is not a programmer and reviews these PRs in the browser. Explain changes in plain
  language, and keep diffs small enough to read.
