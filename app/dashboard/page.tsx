"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import AddBookmark from "../../components/AddBookmark"
import BookmarkList from "../../components/BookmarkList"

export default function Dashboard() {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user)
    })
  }, [])

  if (!user) return <div>Loading...</div>

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">My Bookmarks</h1>
      <AddBookmark />
      <BookmarkList />
    </div>
  )
}


