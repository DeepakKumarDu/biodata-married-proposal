# 🚀 Deployment Guide - GitHub & Vercel

## Step 1: GitHub पर Repository बनाएं

1. **GitHub पर जाएं**: https://github.com
2. **New Repository** बनाएं:
   - Repository name: `biodata-married-proposal` (या कोई भी नाम)
   - Public या Private चुनें
   - **Initialize with README** को uncheck करें (हमारे पास already README है)
   - **Create repository** पर click करें

## Step 2: Git Initialize करें और Push करें

Terminal में ये commands run करें:

```bash
# Git initialize करें
git init

# सभी files add करें
git add .

# First commit करें
git commit -m "Initial commit: Biodata Management System with Authentication"

# GitHub repository को remote के रूप में add करें
# (YOUR_USERNAME को अपने GitHub username से replace करें)
git remote add origin https://github.com/YOUR_USERNAME/biodata-married-proposal.git

# Main branch set करें
git branch -M main

# Code को GitHub पर push करें
git push -u origin main
```

## Step 3: Vercel पर Deploy करें

### Option 1: Vercel Website से (Recommended)

1. **Vercel पर जाएं**: https://vercel.com
2. **Sign up / Login** करें (GitHub account से login कर सकते हैं)
3. **"Add New Project"** पर click करें
4. **Import Git Repository**:
   - अपना GitHub repository select करें (`biodata-married-proposal`)
   - Click करें **"Import"**
5. **Project Settings**:
   - Framework Preset: **Vite** (auto-detect होगा)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (auto-detect होगा)
   - Output Directory: `dist` (auto-detect होगा)
6. **Environment Variables** (अगर जरूरत हो):
   - अभी के लिए कोई जरूरत नहीं है
7. **Deploy** button पर click करें
8. **Wait for deployment** (2-3 minutes)
9. **Your URL** मिल जाएगा! 🎉

### Option 2: Vercel CLI से

```bash
# Vercel CLI install करें
npm i -g vercel

# Project directory में जाएं
cd "BIODATA FOR MARRIED PROPOSAL"

# Deploy करें
vercel

# Production deploy के लिए
vercel --prod
```

## Step 4: Vercel URL मिलने के बाद

Deployment complete होने के बाद आपको एक URL मिलेगा:
- Format: `https://biodata-married-proposal.vercel.app` (या similar)
- यह URL automatically generate होगा
- आप custom domain भी add कर सकते हैं

## Important Notes

1. **Environment**: Vercel automatically detect करेगा कि यह Vite project है
2. **Build**: `npm run build` automatically run होगा
3. **Routing**: `vercel.json` file में SPA routing configure है
4. **Updates**: जब भी आप GitHub पर push करेंगे, Vercel automatically redeploy करेगा

## Troubleshooting

### अगर Build Fail हो:
- Check करें कि `package.json` में सभी dependencies हैं
- Terminal में `npm install` और `npm run build` manually run करें

### अगर Routing Issues हों:
- `vercel.json` file check करें
- Vercel dashboard में Settings > Build & Development Settings verify करें

### अगर 404 Error आए:
- `vercel.json` में rewrites rule check करें
- Vercel project settings में Framework Preset = Vite verify करें

## Your Live URL

Deployment complete होने के बाद, Vercel dashboard में आपको यह URL मिलेगा:

```
https://your-project-name.vercel.app
```

या custom domain अगर add किया है:

```
https://your-custom-domain.com
```

---

**Success! 🎉** आपका application अब live है!

