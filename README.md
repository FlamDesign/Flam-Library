# Flam Experience Library

A searchable, filterable directory of Flam AR experiences — hosted free on GitHub Pages, pulling live data from Google Sheets.

---

## 🚀 Deploy to GitHub Pages (~10 min, one-time)

### 1 — Create a GitHub account
[github.com/signup](https://github.com/signup) — free.

### 2 — Create a new repository
1. Go to [github.com/new](https://github.com/new)
2. Name it `flam-library` (or anything)
3. Set to **Public**
4. Click **Create repository**

### 3 — Upload the files
1. In your new repo → **Add file → Upload files**
2. Upload `index.html` and `apps-script.js`
3. Click **Commit changes**

### 4 — Enable GitHub Pages
1. Repo → **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: `main`, folder: `/ (root)`
4. Click **Save**

Your tool goes live in ~1 min at:
```
https://YOUR-USERNAME.github.io/flam-library/
```

---

## 🔌 Connect Google Sheet (live data)

### Deploy the Apps Script (one-time)
1. Open your Google Sheet → **Extensions → Apps Script**
2. Delete existing code, paste everything from `apps-script.js`
3. **Save** (Ctrl+S)
4. **Deploy → New deployment**
   - Type: `Web app`
   - Execute as: `Me`  
   - Who has access: `Anyone`
5. Click **Deploy** → authorize → **copy the Web App URL**

### Wire it up
1. Open your GitHub Pages site
2. Click **⚙ Settings** (top right)
3. Go to **Apps Script** tab
4. Paste the URL → **Connect & reload**

Done. The URL saves in the browser — auto-loads every visit.

---

## 📊 Sheet columns

| Column | Purpose |
|--------|---------|
| `Title` | Experience name |
| `Meta Image` | Drive thumbnail link (shown on card) |
| `Category` | Sidebar filter (`Fashion,Retail` works) |
| `Flam Link` | The flamapp.com experience URL |
| `Flam Type` | Air / Image / Ground Tracking |
| `Trigger Image Link` | Drive link — previewed in modal |
| `Mock Videos` | Drive link — plays in modal |

Multiple Drive links in one cell? Separate with a space.

---

## 🔄 Data updates

Sheet updates daily → no action needed. Every page load fetches fresh data via Apps Script. Nothing to redeploy.

---

## 📁 Files

```
flam-library/
├── index.html       ← the entire tool
└── apps-script.js   ← paste into Google Apps Script
```
