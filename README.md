# Sneha Yadav — Portfolio Website

A modern, animated personal portfolio website built for GitHub Pages.

## 🚀 How to Deploy on GitHub Pages

1. **Create a new GitHub repository** named `sneha-yadav-portfolio` (or your preferred name)
2. **Upload all files** from this folder to the repository root
3. Go to **Settings → Pages**
4. Under "Source", select **Deploy from a branch** → `main` → `/ (root)`
5. Click **Save** — your site will be live at:
   ```
   https://yourusername.github.io/sneha-yadav-portfolio
   ```

## 📁 File Structure

```
sneha-portfolio/
├── index.html         ← Home page
├── about.html         ← About page
├── projects.html      ← Projects page
├── contact.html       ← Contact page
├── css/
│   └── style.css      ← All styles & animations
├── js/
│   └── script.js      ← Interactions, cursor, scroll effects
└── README.md
```

## 🖼️ Adding Your Photo

To add your real photo, replace the SVG avatar placeholder:
1. Add your photo as `images/profile.jpg`
2. In each HTML file, find the `.profile-img-wrap` div and replace its inner content with:
   ```html
   <img src="images/profile.jpg" alt="Sneha Yadav" style="width:100%;height:100%;object-fit:cover;"/>
   ```

## ✨ Features

- 🎨 Custom animated cursor
- 📱 Fully responsive (mobile, tablet, desktop)
- ✨ Scroll reveal animations
- 🏃 Marquee skill ticker
- 📊 Count-up stat animations
- 🌑 Dark theme with purple accent
- 📬 Contact form with validation
- 🔗 Smooth page transitions
- 🌀 Rotating rings profile visual
- 💳 Floating info cards

## 🛠️ Built With

- Pure HTML5, CSS3, JavaScript (no frameworks needed!)
- Google Fonts: Syne + DM Mono
- CSS custom properties for theming
- IntersectionObserver for scroll effects
