# Web Technology Lab – Combined Projects

This repository contains **9 separate web experiments** combined into a single deployable website for **GitHub Pages**.

## Live Structure

```
/
├── index.html          ← Landing page (links to all experiments)
├── exp1/               ← Personal Portfolio
├── exp2/               ← HTML5 Showcase (media, forms, etc.)
├── exp3/               ← Responsive Web Technology site
├── exp4/               ← FitZone Fitness
├── exp5/               ← Hospital Management JS tools
├── exp6/               ← MediEmergency Dashboard
├── exp7/               ← Car Body Workshop (jQuery)
├── exp8/               ← Student Registration (AngularJS)
└── exp9/               ← CarePlus Hospital SPA (AngularJS + routing)
```

## How to Deploy on GitHub Pages (No 404)

1. Create a new GitHub repository (public).
2. Upload **all contents of this folder** to the **root** of the repository  
   (or put them inside a `docs/` folder).
3. Go to **Settings → Pages**.
4. Under **Source**, select:
   - Branch: `main` (or `master`)
   - Folder: `/ (root)`   **or** `/docs` if you used the docs folder
5. Click **Save**.
6. Wait 1–2 minutes. Your site will be available at:  
   `https://<your-username>.github.io/<repo-name>/`

### Important Notes
- There **must** be an `index.html` at the root of the published folder (this package already has one).
- File and folder names are case-sensitive on GitHub Pages.
- Large media files (video in `exp2/`) may take longer to load.
- AngularJS experiments (exp8 & exp9) require an internet connection for the CDN scripts.

## Local Preview

You can open `index.html` directly in a browser, or use any static server:

```bash
# Python
python -m http.server 8000

# Node
npx serve .
```

Then visit `http://localhost:8000`.

## Original Experiments

All original separate projects have been preserved inside the `exp1`–`exp9` folders with minor fixes:

- Fixed absolute Windows path for the video in EXP2
- Replaced missing `sample.pdf` with a public sample PDF
- Rebuilt a complete `index.html` for EXP9 (AngularJS SPA) so routing works correctly

---

Ready for GitHub Pages 🚀
