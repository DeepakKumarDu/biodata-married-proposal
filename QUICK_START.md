# 🚀 Quick Start Guide - GitHub & Vercel Deployment

## Step 1: GitHub पर Code Push करें

### Terminal Commands (Windows):

```powershell
# Project folder में जाएं
cd "C:\Users\DELL\OneDrive\Desktop\BIODATA FOR MARRIED PROPOSAL"

# Git status check करें
git status

# सभी files add करें
git add .

# Commit करें
git commit -m "Initial commit: Biodata Management with Authentication"

# GitHub repository URL add करें (अपना username use करें)
git remote add origin https://github.com/YOUR_USERNAME/biodata-married-proposal.git

# Main branch set करें
git branch -M main

# Push करें
git push -u origin main
```

**Note**: अगर GitHub repository नहीं बना है, तो पहले https://github.com पर जाकर नया repository बनाएं।

## Step 2: Vercel पर Deploy करें

### Method 1: Vercel Website (सबसे आसान)

1. **Vercel.com पर जाएं**: https://vercel.com
2. **GitHub से Sign In** करें
3. **"Add New..." → "Project"** click करें
4. **अपना repository select करें** (`biodata-married-proposal`)
5. **Import** button click करें
6. **Settings** (auto-detect होगा):
   - Framework: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
7. **Deploy** button click करें
8. **2-3 minutes wait करें**
9. **आपका URL मिल जाएगा!** 🎉

### Method 2: Vercel CLI

```powershell
# Vercel CLI install करें
npm install -g vercel

# Login करें
vercel login

# Deploy करें
vercel

# Production deploy
vercel --prod
```

## Step 3: आपका Live URL

Deployment complete होने के बाद आपको यह format में URL मिलेगा:

```
https://biodata-married-proposal-xxxxx.vercel.app
```

या custom domain अगर add किया है।

## Important Commands

### Development:
```powershell
npm install    # Dependencies install करें
npm run dev    # Local development server start करें
```

### Build:
```powershell
npm run build  # Production build बनाएं
```

### Git Commands:
```powershell
git add .                              # Changes add करें
git commit -m "Your message"           # Commit करें
git push                               # GitHub पर push करें
```

## Troubleshooting

### Build Error:
- `npm install` run करें
- `npm run build` manually test करें

### 404 Error:
- `vercel.json` file check करें
- Vercel settings में Framework = Vite verify करें

### Authentication Issues:
- Browser localStorage check करें
- Clear cache और retry करें

---

**Success! 🎉** आपका application अब live है!

