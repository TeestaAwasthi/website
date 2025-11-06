# ArtbyTeesta

## How to update the site (2 steps)
1. Add image files into the `paintings/` folder (JPG/PNG/WEBP).
2. Commit and push to `main`. GitHub Pages rebuilds automatically.

### Optional: add metadata
Edit `_data/paintings.csv` and add a row for each file with title/price/size/medium/year/available(sold|available)/description.  
If no row exists, the site uses the file name as the title.

## Enable GitHub Pages
Settings → Pages → Build and deployment:
- Source: **Deploy from a branch**
- Branch: **main** and **/** (root)

Your site will be available at `(https://teestaawasthi.github.io/website)` or the custom domain you set.
