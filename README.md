📌 **Smart Bookmark App**

<p align="center"> <img src="https://skillicons.dev/icons?i=nextjs" height="50" alt="Next.js"/> <img src="https://skillicons.dev/icons?i=supabase" height="50" alt="Supabase"/> <img src="https://skillicons.dev/icons?i=tailwind" height="50" alt="Tailwind CSS"/> <img src="https://skillicons.dev/icons?i=vercel" height="50" alt="Vercel"/> <img src="https://skillicons.dev/icons?i=google" height="50" alt="Google OAuth"/> </p>

A modern bookmark manager that allows users to securely save and manage personal bookmarks in real-time using Google authentication.

---

🚀 **Live Demo**

🔗 https://smart-bookmark-app-lemon-eight.vercel.app/login

---

📖 **Project Overview**

The Smart Bookmark App is a full-stack web application designed to help users securely save, organize, and manage their personal web bookmarks in one place. The application uses Google OAuth authentication to provide a seamless and secure login experience without requiring traditional email/password registration.

Once authenticated, users can add bookmarks with a title and URL, view them instantly, and delete them when no longer needed. All bookmarks are private and accessible only to the respective user, ensuring complete data isolation and security.

A key feature of the application is real-time synchronization powered by Supabase. Any bookmark added or removed is immediately reflected across multiple open sessions or browser tabs without requiring a page refresh. The system is built using modern web technologies including Next.js App Router, Supabase backend services (authentication, database, and realtime), and Tailwind CSS for responsive UI design. The application is deployed on Vercel for fast and reliable cloud hosting.

This project demonstrates practical implementation of authentication, database design, real-time data handling, and modern deployment workflows in a production-ready environment. 




---

✨ **Features**

**Sign in with Google**

<p align="center">
<img width="1920" height="1080" alt="Screenshot 2026-02-17 155819" src="https://github.com/user-attachments/assets/ba89c6cb-df34-4fc6-9b1c-6ea59f1e1c73" />

---

**🔐 Google OAuth authentication**

<img width="1920" height="1080" alt="Screenshot 2026-02-17 160651" src="https://github.com/user-attachments/assets/92c00a4a-e963-4f78-9e95-bfada40af653" />

---

**➕ Add bookmarks (title + URL)**

<p align="center">
<img width="1920" height="1080" alt="Screenshot 2026-02-17 155837" src="https://github.com/user-attachments/assets/349acfcf-b064-4c5b-8873-999351fdcbf1" />


---

**❌ Delete personal bookmarks**

<p align="center">

<img width="1920" height="1080" alt="Screenshot 2026-02-17 160547" src="https://github.com/user-attachments/assets/3ac704fe-5493-4911-8dd6-6cc6843c769d" />


---



**DataBase Store Data**

<p align="center">

<img width="1920" height="1080" alt="Screenshot 2026-02-17 160713" src="https://github.com/user-attachments/assets/da52efee-2c63-4408-8498-622327933861" />

<img width="1920" height="1080" alt="Screenshot 2026-02-17 160947" src="https://github.com/user-attachments/assets/7740639e-787b-448b-846e-3aa6eaa556f8" />


---


**👤 User-specific private data**



---

**⚡ Real-time updates (Supabase realtime)**

<p align="center">

<img width="1920" height="1080" alt="Screenshot 2026-02-17 162827" src="https://github.com/user-attachments/assets/c3c9d169-f11b-4ddc-8199-a82605eef8c9" />


---

**📱 Responsive modern UI**

<p align="center">
<img width="1920" height="1080" alt="Screenshot 2026-02-17 155837" src="https://github.com/user-attachments/assets/d280382b-8c3b-4984-8f6b-bbb304a6b401" />


---

**☁️ Deployed on Vercel**

<p align="center">

<img width="1920" height="1080" alt="Screenshot 2026-02-17 163510" src="https://github.com/user-attachments/assets/1b299a48-ed6d-44a2-9b9f-51a01bd81fbc" />


---


🛠️**Tech Stack**

Frontend: Next.js (App Router)

Backend / Database: Supabase

Authentication: Google OAuth (Supabase Auth)

Styling: Tailwind CSS

Deployment: Vercel


---




🧱 **Architecture**
User → Google Login → Supabase Auth
                    ↓
               Supabase DB
                    ↓
               Next.js UI
                    ↓
                 Vercel

⚙️ Installation & Setup



---

1️⃣ **Clone the repository**
git clone https://github.com/dharshan-24/smart_bookmark_app.git
cd smart-bookmark-app

---

2️⃣ **Install dependencies**
npm install

---

3️⃣ **Configure environment variables**

Create .env.local

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key

---

4️⃣ **Run locally**

npm run dev

App runs on:

http://localhost:3000

---

🗄️ **Database Schema (Supabase)**

Table: bookmarks

Column	Type	Description
id	uuid	Primary key
user_id	uuid	Auth user id
title	text	Bookmark title
url	text	Website URL
created_at	timestamp	Created time

---

🔄 **Real-Time Logic**

Supabase realtime subscription listens for changes in the bookmarks table and updates UI instantly without refresh.


---

🔒 **Security**

Row Level Security (RLS) enabled

Users can only access their own bookmarks

Google OAuth handled by Supabase


---

🚀 **Deployment**

Deployed using Vercel

Steps:

Push project to GitHub

Import repo in Vercel

Add environment variables

Deploy


---

🧪 **Test Instructions**

Open live URL

Login with Google

Add bookmark

Open another tab

Bookmark appears instantly

Delete bookmark


---

🐞 **Challenges & Solutions**

Problem: Google OAuth redirect issue after deployment
Solution: Updated redirect URL in Supabase Auth settings

Problem: Tailwind not applying styles
Solution: Fixed Tailwind config & global CSS import

Problem: Real-time updates not working
Solution: Enabled Supabase realtime & subscription channel


---

📌 **Future Improvements**

Edit bookmarks

Tags & categories

Search & filter

Import/export bookmarks

Browser extension

---


👨‍💻 **Author**

**Dharshan Lakshmanan**


---

📄 **License**

This project is for educational and assessment purposes.
