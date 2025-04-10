"use client"

import { supabase } from "@/lib/supabase"
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession()
    .then(session => setSession(session.data.session ?? null))
    .catch(err => { console.log("ERROR GET SESSION: ", err) })
  },[])

return (
    <main className="antialiased flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex gap-4 items-center">
        <h1 className="font-semibold">Welcome, {session ? session.user.email : 'Guest!'}</h1>

        {session ? (
          <button className="bg-slate-900 font-semibold rounded px-4 py-2 text-white"
            onClick={async (e) => {
              e.preventDefault()
              setLoading(true);
              const { error } = await supabase.auth.signOut();
              setLoading(false);
              if (!error) setSession(null)
            }}
            disabled={loading}>
            {loading ? 'Loading' : 'Logout'}
          </button>
        ):(
          <Link href="/auth/login" 
            className="bg-slate-900 font-semibold rounded px-4 py-2 text-white">
            Login
          </Link>
        )}        
      </div>
    </main>
  )
}