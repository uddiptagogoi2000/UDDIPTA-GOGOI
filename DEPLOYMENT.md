# Deployment Guide

## 🚀 Deploy to Vercel (Recommended)

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Go to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "Add New Project"
   - Import your repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Environment Variables** (Optional):
   - Add `NEXT_PUBLIC_SITE_URL` = `https://your-domain.vercel.app`

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# For production
vercel --prod
```

## 🌐 Deploy to Netlify

### Option 1: Deploy via Netlify Dashboard

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Go to Netlify**:
   - Visit [netlify.com](https://netlify.com)
   - Sign in with GitHub
   - Click "Add new site" → "Import an existing project"
   - Select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy site"

### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy

# For production
netlify deploy --prod
```

## 📝 Pre-Deployment Checklist

- [x] ✅ Build passes (`npm run build`)
- [x] ✅ No TypeScript errors
- [x] ✅ All routes working
- [x] ✅ Images handled with placeholders
- [x] ✅ Environment variables configured (if needed)
- [x] ✅ Git repository initialized
- [x] ✅ `.gitignore` configured properly

## 🔧 Configuration Files

### Vercel
- `vercel.json` - Already created with optimal settings

### Netlify
- `netlify.toml` - Already created with Next.js plugin

### Environment Variables

Create `.env.local` for local development:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Add in Vercel/Netlify dashboard:
- `NEXT_PUBLIC_SITE_URL` = Your production URL

## 📦 Build Settings

### Vercel (Auto-detected)
- Framework: Next.js
- Build Command: `npm run build`
- Output Directory: `.next`

### Netlify
- Build Command: `npm run build`
- Publish Directory: `.next`
- Node Version: `20`

## 🎯 Quick Deploy Commands

### Git Setup (if not done)
```bash
git init
git add .
git commit -m "Initial commit - Portfolio ready for deployment"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

### Push Updates
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

## 🔗 After Deployment

1. **Update metadata** in `src/app/layout.tsx`:
   - Replace `http://localhost:3000` with your production URL

2. **Add custom domain** (optional):
   - Vercel: Settings → Domains
   - Netlify: Site settings → Domain management

3. **Enable Analytics** (optional):
   - Vercel: Built-in analytics
   - Netlify: Add Netlify Analytics

## 🆘 Troubleshooting

### Build Fails
- Check Node version (should be 20+)
- Run `npm install` locally first
- Check for TypeScript errors

### Images Not Loading
- Placeholder images use free APIs (Picsum Photos)
- Will work automatically
- Add real images later in `public/images/`

### Routes Not Working
- Make sure `npm run build` succeeds locally
- Check `next.config.js` settings
- Verify all page files are in correct locations

## 📚 Resources

- [Vercel Next.js Docs](https://vercel.com/docs/frameworks/nextjs)
- [Netlify Next.js Docs](https://docs.netlify.com/integrations/frameworks/nextjs/)
- [Next.js Deployment](https://nextjs.org/docs/app/building-your-application/deploying)
