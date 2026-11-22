# Seán Mac Ginnea — CV & Portfolio Website

A lightweight, responsive three-page static website. No build tools or dependencies are required.

## Files
- `index.html` — home, introduction, selected projects, experience and Accio Work campus ambassador role
- `projects.html` — six projects, with category filters
- `contact.html` — email and GitHub contact options
- `styles.css` — shared navy design and responsive layout
- `script.js` — project filters and copy-email interaction
- `favicon.svg` — site icon

## Publish on GitHub Pages
1. Open the repository `SMG2006-HTML/Se-ns-CV`.
2. Upload **the contents of this folder** into the repository root, alongside the existing `.github` folder. Do not upload the outer `sean-cv-portfolio` folder as an additional directory.
3. Replace the old `index.html`. Add the other five files, keeping the filenames unchanged.
4. Commit to `main` and allow your existing GitHub Pages workflow to run. In Settings > Pages, ensure the intended deployment source is selected.
5. The expected site URL is `https://smg2006-html.github.io/Se-ns-CV/` once deployment succeeds.

All internal navigation uses relative URLs, so it will work under the repository's GitHub Pages project path.

## Things to review before publishing
- Confirm your public contact email (`smacginnea@gmail.com`).
- Check that the descriptions and dates of your work, studies, ambassador role and projects are up to date.
- The site deliberately does not show a mobile phone number publicly. Add it to `contact.html` only if you want it exposed.
- Add project-specific GitHub repository links when you have published and verified them.
- The Flask and Unity projects are described as work in progress/learning projects.

## Local preview
Open `index.html` in a web browser, or run `python -m http.server 8000` from the folder and visit `http://localhost:8000`.
