# Septimo Piso - Project Summary

## Overview

`Septimo Piso` is a static editorial site focused initially on Chilean national politics, with the first content track centered on weekly coverage of President Jose Antonio Kast. The long-term goal is to grow this into a broader news-style portal with additional sections such as technology, sports, opinion, and archives.

The publishing rhythm will be a weekly edition released every Sunday night or Monday morning. Each edition will summarize the most important stories from the previous editorial week.

## Editorial Model

### Editorial cadence
- One weekly edition per week.
- Editorial week runs from `Monday to Sunday`.
- Publication happens on `Sunday night` or `Monday morning`.
- Titles should always display the explicit weekly range.

Example:
- `Semana del 9 al 15 de marzo de 2026`

### Date convention
When referring to "the week of a given date", it should be interpreted as the calendar week containing that date, from `Monday through Sunday`.

Example:
- `la semana del 11 de marzo de 2026`
- Interpreted as: `Monday, March 9, 2026` through `Sunday, March 15, 2026`

### Initial topic focus
At first, the site will cover:
- Chilean national politics
- Weekly news about President Jose Antonio Kast

### Future expansion
The project should be designed from day one to support future sections such as:
- Politica
- Tecnologia
- Deportes
- Opinion
- Archivo

## Product Direction

The site should feel like a portal or editorial medium, not just a raw archive of generated pages.

Current brand direction:
- Public brand name: `Septimo Piso`
- Repository name: `septimo-piso-site`

The name should support future growth beyond a single political subject.

## Content Format

Each weekly article or page should be written in a clear editorial/blog style rather than a dashboard-like report.

Preferred content style:
- Narrative and readable
- Strong section headings
- Explicit date references
- Clear distinction between confirmed facts and interpretation where needed
- Sources clearly listed at the bottom of the page

### Example content types
- Weekly summary of major stories about the president
- Single-topic explainers based on recent news
- Event summaries with source attribution
- Section landing pages by topic in the future

## Research Requirements

When preparing weekly content:
- Search by exact date range whenever possible
- Verify that stories belong to the intended editorial week
- Prefer official sources and major news outlets
- When relevant, distinguish between official statements and press interpretation
- Always include visible source links in the final page

The workflow should support requests like:
- "Find the most important news of the week of March 11, 2026"
- "Summarize the top political stories from June 1 to June 6, 2026"

## Site Structure Direction

The home page should be organized primarily by `weekly editions`, not just raw publication dates.

Recommended navigation model:
- Home page highlights the latest weekly edition
- Below that, an archive of weekly editions
- Each week links to one or more posts published for that editorial cycle

### Recommended structure
- `index.html`
  - Main home page
  - Highlights the latest edition
  - Lists previous weekly editions
- `weeks/<week-slug>/index.html`
  - Landing page for a specific weekly edition
- `posts/<year>/<week-or-date>/<slug>.html`
  - Individual article pages
- `assets/css/`
  - Shared styling
- `assets/images/`
  - Shared media assets

Example structure:

```text
index.html
weeks/2026-03-09_2026-03-15/index.html
posts/2026/2026-03-09_2026-03-15/kast-semana.html
posts/2026/2026-03-09_2026-03-15/bancoestado-explicacion.html
assets/css/base.css
assets/css/layout.css
assets/css/components.css
assets/css/theme.css
```

## CSS / Frontend Architecture

A key requirement is to keep CSS strongly separated from HTML so that visual redesigns are easy later.

### Rules
- Avoid inline styles
- Avoid embedding large `<style>` blocks inside content pages in the long term
- Use semantic HTML
- Use predictable, reusable CSS classes
- Centralize design tokens in CSS variables

### Recommended CSS split
- `base.css`
  - reset, typography, variables, global defaults
- `layout.css`
  - containers, grids, page shell, spacing structure
- `components.css`
  - cards, notes, badges, article blocks, navigation pieces
- `theme.css`
  - color system, light/dark themes, visual skin

Possible future expansion:
- `pages.css` for page-specific adjustments
- `archive.css` for weekly archive layouts

## Visual / UX Direction

The site should look like an editorial product, not a generic corporate dashboard.

Desired feel:
- Strong identity
- Readable long-form layout
- Easy archive navigation
- Capable of growing into a full portal with sections

The site can begin with politics-focused weekly pages, but the design should already anticipate future top-level sections.

## Hosting / Deployment

The site will be deployed on an existing VPS that already has `nginx` installed.

### Deployment assumptions
- Static site deployment
- No backend required initially
- No database required initially
- Site files served directly by `nginx`

### Simple deployment model
- Local generation of HTML/CSS/assets
- Commit to git
- Push to repository
- Pull on VPS
- Serve from nginx document root

Possible server path example:
- `/var/www/septimo-piso`

### Recommended production setup
- Linux VPS
- `nginx`
- SSH access
- HTTPS with Let's Encrypt
- Git-based deployment

## Automation Vision

The project should be easy to automate later.

Future automation ideas:
- Every Sunday or Monday, generate a new weekly edition
- Create new week folders automatically
- Update the home page or archive automatically
- Deploy after push, either manually or via CI/CD

Potential future automation steps:
- script to create a new weekly edition skeleton
- script to update archive/index pages
- deployment script or GitHub Actions workflow

## Initial Build Priorities

### Phase 1
- Create the base project structure
- Create shared CSS files
- Create a reusable HTML article template
- Create a reusable weekly edition template
- Create a simple home page listing weekly editions

### Phase 2
- Add the first politics section pages
- Add the first weekly edition pages
- Standardize source blocks at the bottom of every article
- Improve archive navigation

### Phase 3
- Add more sections beyond politics
- Add automation for weekly generation
- Add deployment automation
- Add richer design system and templates

## Working Rules For This Project

- Use explicit date ranges in content.
- Treat weekly editions as Monday-to-Sunday periods.
- Write articles in blog/editorial format.
- Put all sources clearly at the bottom.
- Keep CSS separate from page content.
- Build the project so it can grow from a single politics section into a full portal.
- Prefer static site simplicity first, then automate.

## Immediate Next Step

The next practical step is to scaffold the site inside this repository with:
- base folders
- shared CSS files
- homepage
- weekly edition page template
- article template
- first sample content pages

