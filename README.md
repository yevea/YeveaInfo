# YeveaInfo (WoodContent)

Supplementary Spanish-language content about olive wood — technical guides,
terms of sale, care instructions, and FAQs — for **yevea.com/guides**. It
exists to support the main Yevea e-commerce in **yevea.com/catalog**, not to replace it: its
job is to get found and cited by search and AI answer engines, then send
that traffic to the transactional catalog.

## AEO/GEO-first: the guiding principle

Every page here should be written and structured so that **answer engines
(AI Overviews, ChatGPT, Perplexity, Claude, etc.) and traditional search
crawlers can extract facts from it without executing JavaScript**. In
practice that means:

- **Plain, static HTML — not JSX/React.** Most GEO/AEO crawlers fetch raw
  HTML and don't render client-side JavaScript. Content that only appears
  after a React component mounts (or JSON-LD injected via
  `dangerouslySetInnerHTML`) is invisible to a large share of the crawlers
  we're trying to reach. Since this repo has no build/bundler step either,
  any `.jsx` file here is currently undeliverable as a web page at all.
- **`schema.org` JSON-LD inline in the HTML `<head>`**, present on first
  byte — `TechArticle` for guides, `FAQPage` for FAQs, `ContactPoint` for
  contact info. See `es/madera-olivo/preguntas-frecuentes.html` for the
  reference pattern: fully self-contained, structured data inline, no
  client-side dependency.
- **Direct, quotable answers.** Lead each section/FAQ entry with a
  one-sentence factual claim before the supporting detail — that's the
  sentence most likely to get lifted verbatim into an AI answer.
- **Cross-links back to the transactional catalog** (via a shared
  "related products" block) so an AI citing this content, or a human
  reader following it, lands on a page that can actually sell.

## Current state (as of this audit)

The repo is a **work-in-progress draft, not a deployable site**. Known
issues to resolve before treating any of this as production content:

1. **Mixed authoring formats.** Some pages are genuine React components
   (`es/madera-olivo/index.jsx`, `encimeras-bano.jsx`,
   `components/header.jsx`), others are plain HTML saved with a `.jsx`
   extension (`es/index.jsx`, `condiciones-venta.jsx`,
   `instrucciones-de-uso.jsx`), and `components/footer.jsx` is static
   markup with no export at all. There is no `package.json`, bundler, or
   transpiler anywhere in the repo, so the real React files cannot
   currently render in a browser. The goal is to convert into plain html.
2. **Broken component imports.** `es/madera-olivo/index.jsx` imports
   `../../../components/Header`, `Footer`, `EnlacesCruzados`
   (capitalized); the actual files are lowercase
   (`header.jsx`, `footer.jsx`, `enlaces.jsx`). These won't resolve on a
   case-sensitive filesystem even with a bundler in place.
3. **Inconsistent base paths.** Pages and assets reference at least four
   different deployment roots — `/es/...`, `/doc/...`, `/info/...`,
   `/assets/...` — sometimes more than one in the same file
   (`condiciones-venta.jsx`). None reference `/guides`, the actual target
   path. `assets/js/woodpages.js` (the shared header/footer loader) also
   has no concept of a `/guides` prefix and will fail to fetch fragments
   once deployed there.
4. **Conflicting facts across pages.** E.g. warranty is stated as
   "3 años" in `condiciones-venta.jsx` but "5 años" in
   `preguntas-frecuentes.html`. Content should be reconciled to a single
   source of truth before publishing.
5. **Unfinished pages.** `es/madera-olivo/encimeras-bano.jsx` is still
   full of literal `[PLACEHOLDER: ...]` copy.
6. **No root `index.html`.** There's nothing for a web server to serve at
   `/guides/`, which is also why directory listing was showing through
   even after adding empty `index.html` files in subfolders — the deeper
   issue is the site has no coherent, path-consistent structure yet, not
   just a missing landing page.

## Recommended structure going forward

- **Format:** plain HTML per page, following the
  `preguntas-frecuentes.html` pattern (inline JSON-LD, self-contained,
  root-relative paths that actually match the deployment root).
- **Reuse without JS-at-runtime:** if shared header/footer/cross-link
  blocks are wanted, generate them to static HTML at build time (e.g.
  Astro or 11ty) rather than injecting them client-side via
  `woodpages.js` + `fetch`. If staying build-tool-free, a small script
  that stitches `header.html` + page content + `footer.html` at deploy
  time achieves the same reuse with zero runtime JS dependency for the
  content itself.
- **Paths:** every internal link, asset reference, and hreflang tag
  should be written relative to the real deployment root
  (`yevea.com/guides/...`), consistently, across all pages.
- **One source of truth per fact** (warranty length, shipping zones,
  prices) — duplicated facts across pages should be reconciled or
  templated from a single data source to avoid drift.

## Structure


