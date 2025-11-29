# Portfolio Website - Deployment Guide

## Free Hosting Options

### 1. GitHub Pages (Recommended - Free)

**Steps:**
1. Create a GitHub account at https://github.com
2. Create a new repository (name it something like `portfolio-website` or `ramanathan-portfolio`)
3. Upload all your files (index.html, styles.css, script.js, images folder)
4. Go to repository Settings → Pages
5. Under "Source", select "main" branch and "/ (root)" folder
6. Click Save
7. Your site will be live at: `https://yourusername.github.io/repository-name`

**Note:** Make sure your repository is public for free hosting.

### 2. Netlify (Free - Very Easy)

**Steps:**
1. Go to https://www.netlify.com
2. Sign up for free account
3. Drag and drop your entire `RS PORTFOLIO PROJECT` folder onto Netlify
4. Your site will be live instantly with a random URL
5. You can customize the domain name in settings

### 3. Vercel (Free - Easy)

**Steps:**
1. Go to https://vercel.com
2. Sign up for free account
3. Click "New Project"
4. Import your GitHub repository or upload files
5. Deploy - your site will be live in seconds

### 4. GitHub Pages via Command Line

If you prefer using Git:

```bash
# Navigate to your project folder
cd "RS PORTFOLIO PROJECT"

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial portfolio website"

# Create GitHub repository first, then:
git remote add origin https://github.com/yourusername/your-repo-name.git
git branch -M main
git push -u origin main
```

Then enable GitHub Pages in repository settings.

## Custom Domain (Optional)

All platforms above allow you to connect a custom domain:
- Buy a domain from Namecheap, GoDaddy, or Google Domains
- Follow platform-specific instructions to connect it
- Your site will be accessible at `yourname.com`

## Important Notes

1. **Make sure all file paths are relative** (they already are - using `./images/profile.jpg`)
2. **Test locally first** - Open `index.html` in browser to ensure everything works
3. **Update resume download path** - Make sure the resume file is accessible if you want the download button to work
4. **Check mobile responsiveness** - Test on different devices

## Quick Start Recommendation

**For beginners:** Use Netlify - just drag and drop your folder!

**For developers:** Use GitHub Pages - it's free, reliable, and integrates with version control.

