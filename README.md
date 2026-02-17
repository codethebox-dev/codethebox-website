# CodeTheBox.dev

> **ITC · Security · Cloud · Infrastructure** — Static e-learning platform hosted on GitHub Pages.

## 🚀 Pages

| Page | Description |
|------|-------------|
| `index.html` | Dashboard — stats, tracks, featured course, recent modules |
| `courses.html` | Course library with filter by track |
| `roadmap.html` | Learning roadmaps per track |
| `labs.html` | Hands-on lab environments |
| `certifications.html` | Certification paths with progress tracking |
| `resources.html` | Cheat sheets, study guides, tools |
| `community.html` | Discussion board + leaderboard |

## 📁 Structure

```
codethebox/
├── index.html
├── courses.html
├── roadmap.html
├── labs.html
├── certifications.html
├── resources.html
├── community.html
├── assets/
│   ├── css/
│   │   └── main.css
│   └── js/
│       └── main.js
└── README.md
```

## 🌐 Deploy to GitHub Pages

1. Push this folder to your GitHub repo
2. Go to **Settings → Pages**
3. Set **Source** to `main` branch, root `/`
4. Your site will be live at `https://USERNAME.github.io/REPO-NAME`

Or if using a custom domain:
- Add a `CNAME` file with `codethebox.dev`
- Configure DNS A records to GitHub Pages IPs

## 🎨 Design

- Dark terminal aesthetic with cyan accent
- Color-coded tracks: Security (red), Cloud (cyan), Infra (purple), Networking (green)
- Responsive sidebar + mobile hamburger menu
- Barlow Condensed + JetBrains Mono fonts
- Pure HTML/CSS/JS — no framework dependencies
- Animated background grid and scan line
