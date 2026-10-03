# Riyansh Gupta — digital marketing portfolio

A small, responsive four-page portfolio site: About, Projects & Experience, Certifications, and Contact. It uses semantic HTML, CSS and browser JavaScript, so there are no third-party runtime dependencies or remote font/image requests.

## Run locally

Node.js 20 or newer is enough. From this folder:

```powershell
pnpm dev
```

Open `http://localhost:4173`. To change the local port, set `PORTFOLIO_PORT` before starting the server.

## Build and preview

```powershell
pnpm build
pnpm preview
```

The production-ready static files are written to `dist/`. Upload that folder to a static host such as Netlify, Vercel, GitHub Pages or Cloudflare Pages. Configure these build-time environment variables in the host:

| Variable | Purpose |
| --- | --- |
| `PORTFOLIO_SITE_URL` | Your final `https://` domain. Enables canonical links, Open Graph URLs, `sitemap.xml` and the sitemap line in `robots.txt`. |
| `PORTFOLIO_FORM_ENDPOINT` | A Formspree-compatible form endpoint. Leave blank until an email provider is configured; the site will say the form has not sent and show the direct email fallback. |

There are no required variables. A `.env.example` is included. For local build testing, copy it to `.env` and fill only the values you have. Never put an email provider API secret in this front-end site; use a public form endpoint or add a server-side integration.

## Update content

- Projects, verified metrics, experience, education and certificate details: `data.js`.
- Certificate LinkedIn post URLs: fill each `linkedInPost` with the exact post URL in `data.js`. When a post URL is present, its card opens that LinkedIn post. Until then, the card opens the local certificate scan or PDF and marks the post link as pending.
- LinkedIn and REDiaries links/contact details: `profile` near the top of `data.js`.
- Color palette, page layout and responsive styling: `site.css`.
- Shared navigation, filters, project detail modal and form behavior: `site.js`.

## Add media

Keep original work media in these folders; the folder names are referenced from project data:

- Certificate scans or photos: `public/assets/certificates/`
- Studentsaathi posts, carousels and reels: `public/assets/projects/studentsaathi/`
- Matiz Brite creatives: `public/assets/projects/matiz-brite/`
- REDiaries videos, thumbnails and analytics screenshot: `public/assets/projects/rediaries/`
- Campaign presentation exports: `public/assets/projects/presentations/late-night-delivery/` and `public/assets/projects/presentations/rajasthan-tourism/`

The certificate scans supplied on 30 September 2026 are included in `public/assets/certificates/`, with the original Marketing Automation and Tally PDFs kept alongside their preview images. The Studentsaathi and Matiz Brite internship completion certificates appear on both the Projects & Experience page and the Certifications page. Their full scans open from the cards.

Use optimized `.webp` / `.jpg` images and compressed `.mp4` video for any additional media. Project image/video paths can be added to a project’s `mediaFolder` as media cards are selected. Other project media and the resume PDF are not included yet because they were not available as downloadable files. Do not rename source files until the matching `data.js` path is updated.

To add another project or experience, add an object to `projects` or `experiences` in `data.js`. Only projects with a non-empty, verified `metrics` array display a results panel. Presentation projects are labeled as presentations and do not claim campaign execution or results.

## Four pages

```text
index.html             About / home
projects.html          All project and experience details
certifications.html    Certificates and separate awards section
contact.html           Contact links and validated form
```
