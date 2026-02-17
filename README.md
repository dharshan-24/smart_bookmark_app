📌 **Smart Bookmark App**

A modern bookmark manager that allows users to securely save and manage personal bookmarks in real-time using Google authentication.



🚀 **Live Demo**

🔗 https://your-vercel-url.vercel.app


📖 **Project Overview**

Smart Bookmark App is a full-stack web application where users can sign in with Google and manage their personal bookmarks.
Each user has private bookmark storage with instant real-time updates across sessions.



✨ **Features**

🔐 Google OAuth authentication

➕ Add bookmarks (title + URL)

❌ Delete personal bookmarks

👤 User-specific private data

⚡ Real-time updates (Supabase realtime)

📱 Responsive modern UI

☁️ Deployed on Vercel


🛠️**Tech Stack**

Frontend: Next.js (App Router)

Backend / Database: Supabase

Authentication: Google OAuth (Supabase Auth)

Styling: Tailwind CSS

Deployment: Vercel



🧱 **Architecture**
User → Google Login → Supabase Auth
                    ↓
               Supabase DB
                    ↓
               Next.js UI
                    ↓
                 Vercel

⚙️ Installation & Setup



1️⃣ **Clone the repository**
git clone https://github.com/your-username/smart-bookmark-app.git
cd smart-bookmark-app

2️⃣ **Install dependencies**
npm install

3️⃣ **Configure environment variables**

Create .env.local

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key

4️⃣ **Run locally**

npm run dev


App runs on:

http://localhost:3000


🗄️ **Database Schema (Supabase)**

Table: bookmarks

Column	Type	Description
id	uuid	Primary key
user_id	uuid	Auth user id
title	text	Bookmark title
url	text	Website URL
created_at	timestamp	Created time


🔄 **Real-Time Logic**

Supabase realtime subscription listens for changes in the bookmarks table and updates UI instantly without refresh.


🔒 **Security**

Row Level Security (RLS) enabled

Users can only access their own bookmarks

Google OAuth handled by Supabase


🚀 **Deployment**

Deployed using Vercel

Steps:

Push project to GitHub

Import repo in Vercel

Add environment variables

Deploy


🧪 **Test Instructions**

Open live URL

Login with Google

Add bookmark

Open another tab

Bookmark appears instantly

Delete bookmark


🐞 **Challenges & Solutions**

Problem: Google OAuth redirect issue after deployment
Solution: Updated redirect URL in Supabase Auth settings

Problem: Tailwind not applying styles
Solution: Fixed Tailwind config & global CSS import

Problem: Real-time updates not working
Solution: Enabled Supabase realtime & subscription channel


📌 **Future Improvements**

Edit bookmarks

Tags & categories

Search & filter

Import/export bookmarks

Browser extension


👨‍💻 **Author**

**Dharshan Lakshmanan**


📄 **License**

This project is for educational and assessment purposes.
