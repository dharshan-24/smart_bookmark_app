Smart Bookmark App 🔖

A full-stack cloud bookmark manager built with Next.js, Supabase, Google OAuth, and Tailwind CSS.
Users can securely log in with Google and manage their private bookmarks from anywhere.

🌐 Live Demo

👉 https://smart-bookmark-app-lemon-eight.vercel.app

📖 Project Overview

The Smart Bookmark App is a personal bookmark management web application that allows users to store and manage bookmarks in the cloud.

Users authenticate using Google OAuth, and each bookmark (title + URL) is stored securely in a Supabase PostgreSQL database.
Bookmarks are private and visible only to the logged-in user.

The application supports real-time updates and is deployed online using Vercel.

✨ Features

🔐 Google OAuth Login

➕ Add Bookmark

🗑️ Delete Bookmark

👤 User-specific private data

⚡ Real-time database updates

☁️ Cloud hosted (Vercel)

📱 Responsive UI

🖼️ Application Screenshots
Dashboard UI
<img src="https://raw.githubusercontent.com/github/explore/main/topics/bookmark/bookmark.png" width="700">

Users can add and manage bookmarks after login.

Supabase Database Table
<img src="https://raw.githubusercontent.com/supabase/supabase/master/apps/docs/public/img/guides/database/table-editor.png" width="700">

Bookmarks stored with user_id ensuring privacy.

🏗️ Tech Stack

Frontend

Next.js (App Router)

React

Tailwind CSS

Backend

Supabase Auth (Google OAuth)

Supabase PostgreSQL Database

Supabase Realtime

Deployment

Vercel

⚙️ How to Run Locally

Clone repository:

git clone https://github.com/YOUR_USERNAME/smart-bookmark.git
cd smart-bookmark
npm install
npm run dev


Open browser:

http://localhost:3000

🔐 Environment Variables

Create .env.local file in root:

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

Each bookmark belongs to a specific user via user_id.

🔄 Application Flow

User clicks Sign in with Google

Supabase authenticates user

User redirected to dashboard

App fetches user bookmarks

User can add/delete bookmarks

UI updates instantly

🚀 Deployment (GitHub + Vercel)
Push to GitHub
git init
git add .
git commit -m "Smart Bookmark App"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/smart-bookmark.git
git push -u origin main

Deploy to Vercel

Go to https://vercel.com

Import GitHub repository

Add environment variables

Click Deploy

Vercel automatically generates a live URL.

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

OAuth redirect error
→ Fixed by setting correct Vercel redirect URL

User data privacy
→ Solved using user_id filtering

Deployment environment variables
→ Configured in Vercel dashboard

📚 Learning Outcomes

Google OAuth authentication

Supabase integration

Next.js App Router

Full-stack deployment

Cloud database design

User-based data privacy

👨‍💻 Author

Dharshan Lakshmanan

📌 GitHub Description

Smart Bookmark App — A Next.js + Supabase full-stack web app with Google authentication that allows users to securely store and manage personal bookmarks in the cloud. Deployed on Vercel.
