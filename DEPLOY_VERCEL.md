# 🚀 Deploy to Vercel - Project Name: uddipta.js

## ✅ Your code is ready and pushed to GitHub!
Repository: `https://github.com/uddiptagogoi2000/UDDIPTA-GOGOI.git`

## Method 1: Deploy via Vercel Dashboard (EASIEST - RECOMMENDED)

### Steps:

1. **Go to Vercel**:
   - Visit: https://vercel.com
   - Sign in with your **GitHub** account

2. **Create New Project**:
   - Click **"Add New..."** → **"Project"**
   - Find and select repository: `UDDIPTA-GOGOI`
   - Click **"Import"**

3. **Configure Project**:
   - **Project Name**: `uddipta-js` (or `uddipta.js` - Vercel will handle the .js)
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)

4. **Environment Variables** (Optional):
   - Add if needed:
     - `NEXT_PUBLIC_SITE_URL` = `https://uddipta-js.vercel.app`

5. **Deploy**:
   - Click **"Deploy"** button
   - Wait 2-3 minutes
   - Your site will be live! 🎉

6. **Your Live URL**:
   - Will be: `https://uddipta-js.vercel.app`
   - Or: `https://uddipta-js-[random].vercel.app`

## Method 2: Deploy via Vercel CLI

### First time setup:

```bash
# Login to Vercel
vercel login

# Deploy (it will ask for project name)
vercel

# When asked for project name, enter: uddipta-js

# Deploy to production
vercel --prod
```

### Quick deploy command:
```bash
vercel --prod
```

## 📋 What Happens After Deployment:

1. ✅ Vercel will automatically:
   - Install dependencies (`npm install`)
   - Build your project (`npm run build`)
   - Deploy to production

2. ✅ Automatic deployments:
   - Every push to `main` branch = new deployment
   - Preview deployments for pull requests

3. ✅ Your live site will have:
   - All routes working (`/`, `/projects`, `/about`, `/contact`)
   - Free placeholder images working
   - Dark/light theme working
   - Fully responsive design

## 🔗 After Deployment:

1. **Update Metadata** (if needed):
   - Go to your repository
   - Edit `src/app/layout.tsx`
   - Update `metadataBase` with your actual Vercel URL
   - Push changes

2. **Custom Domain** (optional):
   - In Vercel dashboard → Project Settings → Domains
   - Add your custom domain (e.g., `uddipta.dev`)

3. **Analytics** (optional):
   - Vercel provides built-in analytics
   - Enable in Project Settings → Analytics

## 🎯 Current Status:

- ✅ Code pushed to GitHub
- ✅ Build passes locally
- ✅ All routes working
- ✅ Images configured
- ✅ Ready for deployment

## ⚡ Quick Commands:

```bash
# Check status
git status

# View recent commits
git log --oneline -5

# Push new changes (if any)
git add .
git commit -m "Update portfolio"
git push origin main
```

## 📞 Need Help?

If deployment fails:
1. Check Vercel dashboard for error logs
2. Make sure `npm run build` works locally
3. Check Node.js version (should be 20+)
4. Verify all dependencies are in `package.json`

Your portfolio is **100% ready** for deployment! 🚀
