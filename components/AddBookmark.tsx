"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"

export default function AddBookmark() {
  const [title, setTitle] = useState("")
  const [url, setUrl] = useState("")

  const add = async () => {
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      alert("Not logged in")
      return
    }

    const { error } = await supabase.from("bookmarks").insert({
      title,
      url,
      user_id: user.id,
    })

    if (error) {
      alert(error.message)
    } else {
      setTitle("")
      setUrl("")
    }
  }

  return (
    <div className="flex gap-2 mb-4">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="border p-2"
      />
      <input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="URL"
        className="border p-2"
      />
      <button
        onClick={add}
        className="bg-blue-500 text-white px-4"
      >
        Add
      </button>
    </div>
  )
}
