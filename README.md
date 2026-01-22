# Portfolio Page (Static) — React + Vite + TypeScript + Material UI (MUI)

This repository builds a **single-page, static** portfolio layout matching the provided screenshot:
- Minimal top navigation (Works / Blog / Contact)
- Hero intro (left text + CTA button, right circular avatar)
- “Recent posts” section with two post cards on a tinted background strip
- “Featured works” section with 3 stacked work items (image + details)
- Footer with social icons + copyright

No backend, no forms, no API calls. All content is local/static.

---

## Tech Stack

- **React 18**
- **Vite**
- **TypeScript**
- **Material UI (MUI v5)**:
  - `@mui/material`
  - `@mui/icons-material`
  - `@emotion/react` / `@emotion/styled`
- (Recommended) `@fontsource/heebo` (or Google Fonts import)

---

## UI Overview (What to Build)

### Page Sections (top to bottom)

1. **Top Nav (Header)**
   - Minimal, **right-aligned** text links: `Works`, `Blog`, `Contact`
   - No logo on the left (empty space)
   - Large top whitespace; nav sits near the top

2. **Hero**
   - Two-column layout:
     - **Left**: greeting headline + paragraph + CTA button
     - **Right**: circular avatar image (portrait), ~160–200px
   - CTA button: “Download Resume” (accent pink/red)

3. **Recent Posts Strip**
   - Full-width **tinted** background strip (light blue/cyan tint)
   - Row header:
     - left: “Recent posts”
     - right: “View all” link (blue/teal)
   - Two post cards side-by-side:
     - Title
     - Meta line (date | tags)
     - Short description

4. **Featured Works**
   - Section title: “Featured works”
   - Vertical list of work items (3):
     - Left: thumbnail image (rounded corners)
     - Right: title, year badge (pill), category label, description
   - Each item separated by a thin divider

5. **Footer**
   - Social icons row centered (Facebook / Instagram / Twitter / LinkedIn)
   - Copyright line under icons

---

## Design System (Match the Screenshot)

### Colors (semantic tokens)

Approximate palette to match the screenshot:

- **Background**: `#FFFFFF`
- **Text (primary)**: `#21243D` (deep navy)
- **Text (secondary)**: `#6B7280` / muted gray
- **Accent / Primary button**: `#FF6464` (coral/red-pink)
- **Tinted section background (Recent posts strip)**: `#EDF7FA` (very light cyan)
- **Link color (“View all”)**: `#00A8CC` (teal/blue)
- **Dividers**: `#E0E0E0`

> In MUI, we implement these as `palette` tokens and use them consistently via theme + component variants.

### Typography

The screenshot style strongly resembles a clean modern sans with a slightly “editorial” feel:
- Recommended font: **Heebo** (commonly paired with this layout)
- Headline: large, bold (approx 40–44px desktop)
- Section titles: medium (18–22px)
- Body: 14–16px with comfortable line-height (~1.6)

### Spacing & Layout

- Large whitespace and breathing room
- Content is centered with a max width
- Consistent vertical spacing between sections

---

## Responsive Behavior

- **Desktop (≥900px)**:
  - Hero is 2 columns (text left, avatar right)
  - Recent posts cards are 2 columns
  - Featured works items remain row-based (image left, content right)
- **Mobile (<900px)**:
  - Nav remains top, links may wrap or reduce spacing
  - Hero stacks (avatar above or below text; preferred: avatar below headline)
  - Recent posts cards stack (1 column)
  - Featured works items stack (image on top, text below)

MUI breakpoints to use:
- `xs`, `sm`, `md` (primary responsive target is `md=900px` default)

---

## Project Structure (Senior-Friendly)

Feature-oriented structure + a dedicated `theme/` setup:

```txt
.
├─ index.html
├─ package.json
├─ tsconfig.json
├─ tsconfig.node.json
├─ vite.config.ts
├─ .eslintrc.cjs
├─ .prettierrc
├─ .gitignore
└─ src
   ├─ main.tsx
   ├─ app
   │  ├─ App.tsx
   │  └─ providers
   │     └─ ThemeProvider.tsx
   ├─ theme
   │  ├─ index.ts
   │  ├─ palette.ts
   │  ├─ typography.ts
   │  ├─ components.ts
   │  └─ shadows.ts
   ├─ features
   │  └─ portfolio
   │     ├─ PortfolioPage.tsx
   │     ├─ data
   │     │  └─ portfolio.data.ts
   │     ├─ types
   │     │  └─ portfolio.types.ts
   │     └─ sections
   │        ├─ Header.tsx
   │        ├─ Hero.tsx
   │        ├─ RecentPosts.tsx
   │        ├─ FeaturedWorks.tsx
   │        └─ Footer.tsx
   ├─ components
   │  └─ ui
   │     ├─ Section.tsx
   │     ├─ SectionHeaderRow.tsx
   │     ├─ PostCard.tsx
   │     ├─ WorkItem.tsx
   │     └─ RouterLink.tsx
   ├─ assets
   │  └─ images
   │     ├─ avatar.jpg
   │     ├─ work-1.jpg
   │     ├─ work-2.jpg
   │     └─ work-3.jpg
   └─ styles
      └─ fonts.ts
