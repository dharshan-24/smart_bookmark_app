"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

type Bookmark = {
  id: string
  title: string
  url: string
}

export default function BookmarkList() {
  const [items, setItems] = useState<Bookmark[]>([])

  const load = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return

    const { data } = await supabase
      .from("bookmarks")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })

    setItems(data || [])
  }

  useEffect(() => {
    load()
  }, [])

  const del = async (id: string) => {
    const { error } = await supabase
      .from("bookmarks")
      .delete()
      .eq("id", id)

    if (!error) {
      load() // 🔥 refresh after delete
    }
  }

  return (
    <div className="space-y-2">
      {items.map((b) => (
        <div
          key={b.id}
          className="border p-2 flex justify-between items-center"
        >
          <a href={b.url} target="_blank" className="text-blue-600">
            {b.title}
          </a>

          <button
            onClick={() => del(b.id)}
            className="text-red-500"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}
