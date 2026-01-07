# CI/CD Cloud Training Demo

A static HTML/CSS/JS website demonstrating CI/CD concepts with a fun DevOps meme feature.

## Features

- Beautiful Bootstrap-styled interface
- Responsive design with gradient backgrounds
- Random DevOps meme display
- Pure HTML/CSS/JavaScript - no backend required
- CI/CD themed content

## Setup

1. Add your DevOps memes to the `assets/memes/` folder (PNG, JPG, JPEG, GIF, WebP formats)

2. Update the memes array in `assets/js/app.js` with your meme filenames:
```javascript
const memes = [
    'meme1.webp',
    'meme2.webp',
    'meme3.webp'
];
```

3. Open `index.html` in your browser or serve with any web server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8000
```

4. Visit `http://localhost:8000` in your browser

## Project Structure

```
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css      # Custom styles
│   ├── js/
│   │   └── app.js         # JavaScript functionality
│   └── memes/             # Folder for DevOps meme images
└── README.md
```

## Adding Memes

1. Drop your DevOps meme images into the `assets/memes/` folder
2. Update the `memes` array in `assets/js/app.js` with the filenames
3. Refresh the page and click "Get DevOps Meme" button

## Deployment

This is a static website and can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- AWS S3 + CloudFront
- Any static hosting service

Simply upload all files to your hosting provider!