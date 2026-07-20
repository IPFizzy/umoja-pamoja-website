# Umoja Pamoja Youth Outreach

A developing website concept for the Umoja Pamoja Youth Outreach project in
Kilwa Masoko, Tanzania. The site presents the mission, local church partnership,
outreach priorities, prayer needs, and a path to Africa Inland Mission's official
donation page.

## Project status

This is an early concept. Photographs, testimonials, campaign totals, and impact
figures are placeholders until the organization provides approved media and
verified reporting. The sample `53 / 47` progress display should not be presented
as a factual ministry result.

## Local development

Install [Node.js](https://nodejs.org/) 22 or newer, then run:

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

## Project structure

```text
src/
  components/     Page sections
  App.tsx         Page composition
  content.ts      Repeated project content and links
  main.tsx        Application entry point
  styles.css      Layout, typography, colors, and responsive rules
public/           Approved images and other static assets
```

## Editing the concept

- Update repeated ministry content and the donation link in `src/content.ts`.
- Edit individual page sections in `src/components/`.
- Replace visual placeholders only with permission-cleared photographs.
- Keep the sample-data notice visible until every impact figure is verified.
- Confirm public copy and fundraising disclosures with the ministry before launch.

## Deployment

The workflow in `.github/workflows/deploy-pages.yml` builds and publishes the
site to GitHub Pages whenever the `main` branch changes. The expected project
address is:

<https://ipfizzy.github.io/umoja-pamoja-website/>

In the repository settings, select **Pages → Build and deployment → GitHub
Actions** to enable the first deployment.
