# 📋 GitHub Setup - Step by Step

## ✅ Step 1: GitHub पर Repository बनाएं

1. **GitHub पर login करें**: https://github.com/login
   - Username: `DeepakKumarDu`
   - Password: `Deepak@321!ns`

2. **New Repository बनाएं**:
   - Top right corner में **"+"** button click करें
   - **"New repository"** select करें

3. **Repository Details**:
   - **Repository name**: `biodata-married-proposal`
   - **Description**: `Married Biodata Management System with Authentication`
   - **Public** या **Private** चुनें (आपकी choice)
   - ⚠️ **IMPORTANT**: 
     - ✅ **"Add a README file"** को **UNCHECK** करें
     - ✅ **"Add .gitignore"** को **UNCHECK** करें
     - ✅ **"Choose a license"** को **None** रखें
   - **"Create repository"** button click करें

## ✅ Step 2: Personal Access Token बनाएं

GitHub password authentication अब काम नहीं करता, Token चाहिए:

1. **Token page पर जाएं**: https://github.com/settings/tokens
2. **"Generate new token"** → **"Generate new token (classic)"** click करें
3. **Token Settings**:
   - **Note**: `biodata-project-token`
   - **Expiration**: `90 days` (या जो चाहें)
   - **Scopes**: 
     - ✅ **repo** (सभी sub-options automatically select हो जाएंगी)
4. **"Generate token"** button click करें
5. **Token को copy करें** और safe जगह save करें
   - ⚠️ यह सिर्फ एक बार दिखेगा!

## ✅ Step 3: Code Push करें

Repository बनने के बाद, terminal में ये commands run करें:

```powershell
# Remote verify करें
git remote -v

# Push करें
git push -u origin main
```

जब credentials मांगे:
- **Username**: `DeepakKumarDu`
- **Password**: आपका **Personal Access Token** (password नहीं!)

## ✅ Step 4: Verify

GitHub पर जाकर check करें:
```
https://github.com/DeepakKumarDu/biodata-married-proposal
```

आपको सभी files दिखनी चाहिए!

---

## 🎯 Quick Summary:

1. ✅ GitHub पर repository बनाएं (`biodata-married-proposal`)
2. ✅ Personal Access Token बनाएं
3. ✅ `git push -u origin main` run करें
4. ✅ Token use करें जब password prompt आए

---

## 💡 Alternative: GitHub Desktop (आसान)

अगर command line confusing है:

1. **GitHub Desktop download करें**: https://desktop.github.com
2. Install करें और login करें
3. **"Add"** → **"Clone Repository"**
4. अपना repository select करें
5. **"Publish repository"** click करें

---

**Repository बनाने के बाद मुझे बताएं, मैं push करने में help करूंगा!** 🚀

