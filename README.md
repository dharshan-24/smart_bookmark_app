🔖 Smart Bookmark App
<p align="center"> <b>A secure cloud bookmark manager built with Next.js + Supabase + Google OAuth</b><br> Save, manage, and access your personal bookmarks from anywhere. </p> <p align="center"> <img src="https://img.shields.io/badge/Next.js-14-black?logo=nextdotjs"> <img src="https://img.shields.io/badge/Supabase-Auth%20%26%20DB-3ECF8E?logo=supabase&logoColor=white"> <img src="https://img.shields.io/badge/TailwindCSS-Styling-38B2AC?logo=tailwindcss&logoColor=white"> <img src="https://img.shields.io/badge/Vercel-Deployed-black?logo=vercel"> </p>
🌐 Live Application

👉 https://smart-bookmark-app-lemon-eight.vercel.app

📖 Project Overview

The Smart Bookmark App is a full-stack web application that allows users to securely store and manage personal bookmarks in the cloud.

Users authenticate using Google OAuth, and each bookmark (title + URL) is saved in a Supabase PostgreSQL database.
Bookmarks are linked to the logged-in user ID, ensuring complete privacy.

The application supports real-time updates and is deployed globally using Vercel.

✨ Features

✅ Google Authentication
✅ Add Bookmark (Title + URL)
✅ Delete Bookmark
✅ Private per User
✅ Real-time Sync
✅ Responsive UI
✅ Cloud Deployment

🖼️ Application Screenshots
📊 Dashboard Interface
<p align="center"> <img src="https://raw.githubusercontent.com/github/explore/main/topics/bookmark/bookmark.png" width="750"> </p>

Users can add, view, and delete bookmarks after login.

🗄️ Supabase Database Table
<p align="center"> <img src="https://raw.githubusercontent.com/supabase/supabase/master/apps/docs/public/img/guides/database/table-editor.png" width="750"> </p>

Bookmarks stored securely with user_id.

🏗️ Tech Stack
Frontend

Next.js (App Router)

React

Tailwind CSS

Backend

Supabase Auth (Google OAuth)

Supabase PostgreSQL Database

Supabase Realtime API

Deployment

Vercel Cloud Hosting

⚙️ How to Run Locally
git clone https://github.com/YOUR_USERNAME/smart-bookmark.git
cd smart-bookmark
npm install
npm run dev


Open in browser:

http://localhost:3000

🔐 Environment Variables

Create .env.local in root folder:

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

🗄️ Database Schema

Table: bookmarks

Column	Type
id	uuid
user_id	uuid
title	text
url	text
created_at	timestamp

Each bookmark belongs to the authenticated user via user_id.

🔄 Application Flow

1️⃣ User clicks Sign in with Google
2️⃣ Supabase authenticates user
3️⃣ User redirected to dashboard
4️⃣ App fetches user bookmarks
5️⃣ User adds or deletes bookmark
6️⃣ Database updates instantly
7️⃣ UI refreshes in real time

🚀 Deployment
Push to GitHub
git init
git add .
git commit -m "Smart Bookmark App"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/smart-bookmark.git
git push -u origin main

Deploy to Vercel

Open https://vercel.com

Import GitHub repository

Add environment variables

Click Deploy

Vercel generates live URL automatically.

🎓 Seminar Explanation

This project is called Smart Bookmark App.
It is a full-stack web application developed using Next.js and Supabase.

Users log in securely using Google authentication.
After login, they can add and manage personal bookmarks containing a title and URL.

All bookmarks are stored in the Supabase cloud database and linked to the user ID, ensuring privacy.
The interface updates in real time when bookmarks are added or deleted.

The application is deployed on Vercel and accessible online.
This project demonstrates authentication, database integration, and cloud deployment.

⚠️ Challenges & Solutions

OAuth redirect issue
→ Fixed by configuring Vercel redirect URL

User data privacy
→ Implemented user_id filtering

Deployment environment variables
→ Configured in Vercel dashboard

📚 Learning Outcomes

Google OAuth authentication

Supabase database integration

Next.js App Router architecture

Full-stack deployment workflow

Cloud database design

User-based data privacy

👨‍💻 Author

Dharshan Lakshmanan
Junior Web Developer

📌 GitHub Description

Smart Bookmark App — A Next.js + Supabase full-stack web app with Google authentication that allows users to securely store and manage personal bookmarks in the cloud. Deployed on Vercel.
