# React CW08 Assignment

A React application with filtering and search functionality for a produce list.

## What's Included

This project has:
- HelloWorld component that displays a greeting
- Counter component that increments when you click a button
- FilteredList component with search and dropdown filter
- List component that shows the filtered items

## Setup Instructions

### 1. Fix PowerShell (Windows Users Only)

If you get a script error, run PowerShell as Administrator and type:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### 2. Create React App

Open terminal in VS Code and run:
```bash
npx create-react-app my-app
cd my-app
```

### 3. Add the Project Files

Copy these files to the `src` folder:
- HelloWorld.jsx
- Counter.jsx
- FilteredList.jsx
- List.jsx
- App.js (replace existing)
- App.css (replace existing)

Copy this file to the `public` folder:
- index.html (replace existing)

Replace the `package.json` in the root folder with the provided one.

### 4. Install Dependencies

```bash
npm install
```

### 5. Run the App

```bash
npm start
```

The app will open in your browser at http://localhost:3000

## How to Use

- **HelloWorld**: Shows a greeting message
- **Counter**: Click the "Increment" button to increase the count
- **Produce List**: 
  - Type in the search box to filter items
  - Use the dropdown to filter by type (All/Fruit/Vegetable)
  - Both filters work together

## Deploy to GitHub Pages

### Step 1: Update package.json

Change the homepage line to your GitHub info:
```json
"homepage": "https://your-username.github.io/your-repo-name"
```

### Step 2: Create GitHub Repo

1. Go to github.com
2. Click "New repository"
3. Name it (like "react-cw08")
4. Make it Public
5. Click "Create repository"

### Step 3: Push to GitHub

In VS Code terminal:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-username/your-repo-name.git
git branch -M main
git push -u origin main
```

### Step 4: Deploy

```bash
npm run deploy
```

### Step 5: Get Your URL

1. Go to your GitHub repo
2. Click Settings
3. Click Pages (left side)
4. Copy the URL shown
5. Submit this URL for your assignment

## Troubleshooting

**Blank page when opening index.html directly?**
- Don't open index.html directly - use `npm start` instead

**npm command not found?**
- Install Node.js from nodejs.org

**PowerShell script error?**
- Run PowerShell as admin and fix execution policy (see step 1)

**Port already in use?**
- Something else is using port 3000
- Close other React apps or use a different port

**Changes not showing up?**
- Save all files (Ctrl+S)
- Refresh browser (Ctrl+R)
- Check the terminal for errors




