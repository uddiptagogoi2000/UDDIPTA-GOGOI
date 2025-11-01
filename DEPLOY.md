# 🚀 Quick Deployment Guide

## Step 1: Push to GitHub

```bash
# Check if remote exists
git remote -v

# If no remote, add one:
# git remote add origin https://github.com/YOUR_USERNAME/portfolio-uddipta.git

# Push all changes
git push origin main
```

## Step 2: Deploy to Vercel (Recommended - Easiest)

### Via Dashboard:
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click **"Add New Project"**
4. Select your repository: `portfolio-uddipta`
5. Click **"Deploy"** (settings auto-detected)
6. Wait 2-3 minutes
7. Your site will be live at: `portfolio-uddipta.vercel.app`

### Via CLI:
```bash
npm i -g vercel
vercel
vercel --prod
```

## Step 3: Deploy to Netlify (Alternative)

### Via Dashboard:
1. Go to [netlify.com](https://netlify.com)
2. Sign in with GitHub
3. Click **"Add new site"** → **"Import an existing project"**
4. Select your repository
5. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
6. Click **"Deploy site"**

### Via CLI:
```bash
npm i -g netlify-cli
netlify deploy
netlify deploy --prod
```

## ✅ Pre-Deployment Checklist

- [x] Git repository initialized
- [x] All files committed
- [x] Build passes (`npm run build`)
- [x] Deployment configs added (vercel.json, netlify.toml)
- [x] Image domains configured in next.config.ts

## 🔧 After Deployment

1. **Update Site URL** in `src/app/layout.tsx`:
   - Replace `http://localhost:3000` with your actual URL

2. **Add Custom Domain** (optional):
   - Vercel: Settings → Domains
   - Netlify: Site settings → Domain management

## 🎯 Commands Summary

```bash
# Push to GitHub
git push origin main

# Deploy to Vercel
vercel --prod

# Deploy to Netlify
netlify deploy --prod
```

Your portfolio is ready! 🎉
