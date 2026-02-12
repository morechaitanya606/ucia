# Vercel Deployment Guide for UCAI Website

This guide outlines the steps to deploy the `ucai-nextjs` project to Vercel.

## Step 1: Push to GitHub
Ensure your code is pushed to a GitHub repository.

## Step 2: Import Project to Vercel
1. Go to [Vercel](https://vercel.com/new).
2. Find your repository and click **Import**.

## Step 3: Configure Project
1. **Root Directory**: Select `ucai-nextjs` as the root directory.
2. **Framework Preset**: Vercel should automatically detect **Next.js**.
3. **Build Settings**:
   - Build Command: `next build` (standard for Next.js)
   - Output Directory: `out` (Since `output: 'export'` is used, Next.js will put static files in the `out` folder).

## Step 4: Environment Variables
If you later add a backend or external APIs, add your environment variables in the **Environment Variables** section.

## Step 5: Deploy
Click **Deploy**. Vercel will build the project and provide you with a production URL.

---

> [!NOTE]
> We have removed the `/ucia` base path. Your website will now be accessible directly at the root of your domain (e.g., `https://your-website.vercel.app/`).
