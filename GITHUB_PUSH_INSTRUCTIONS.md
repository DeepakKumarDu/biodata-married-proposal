# 🚀 GitHub Push Instructions

## ⚠️ Important: GitHub Password Authentication

GitHub ने password authentication को disable कर दिया है। आपको **Personal Access Token** use करना होगा।

## Step 1: GitHub पर Repository बनाएं

1. https://github.com पर login करें (DeepakKumarDu)
2. **"New"** या **"+"** button click करें
3. Repository name: `biodata-married-proposal`
4. **Public** या **Private** चुनें
5. **"Create repository"** click करें
6. **README, .gitignore, license add न करें** (हमारे पास already हैं)

## Step 2: Personal Access Token बनाएं

1. GitHub पर जाएं: https://github.com/settings/tokens
2. **"Generate new token"** → **"Generate new token (classic)"** click करें
3. Token name: `biodata-project`
4. Expiration: आप choose कर सकते हैं (90 days recommended)
5. Scopes: **repo** को check करें (सभी sub-options automatically select हो जाएंगी)
6. **"Generate token"** click करें
7. **Token को copy करें** (यह सिर्फ एक बार दिखेगा!)

## Step 3: Code Push करें

### Option 1: Command Line से (Token के साथ)

```powershell
# Remote add करें (अगर नहीं किया है)
git remote add origin https://github.com/DeepakKumarDu/biodata-married-proposal.git

# Push करें
git push -u origin main
```

जब password prompt आए:
- **Username**: `DeepakKumarDu`
- **Password**: आपका **Personal Access Token** (password नहीं!)

### Option 2: GitHub Desktop (आसान)

1. GitHub Desktop install करें: https://desktop.github.com
2. Login करें
3. Repository clone करें या add करें
4. Push करें

### Option 3: VS Code से

1. VS Code में Git extension use करें
2. Source Control panel open करें
3. Push करें
4. Token enter करें जब prompt आए

## Step 4: Verify

GitHub पर जाकर check करें:
```
https://github.com/DeepakKumarDu/biodata-married-proposal
```

---

## 🔐 Security Note

- **Token को safe रखें**
- Token को कभी भी code में commit न करें
- अगर token leak हो जाए, तुरंत revoke करें

---

## ✅ Success!

Code push होने के बाद Vercel पर deploy कर सकते हैं!

