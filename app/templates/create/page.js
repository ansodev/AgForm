"use client";

import { supabase_client } from "@/lib/supabase-client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateTemplate() {
  const [templateName, setTemplateName] = useState('');
  const [sending, setSending] = useState(false);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
   
    if (templateName) {
      setSending(true);
      const { data, error } = await supabase_client.from('templates').insert({ name: templateName }).select();

      console.log(data)
  
      if (error) {
        alert(error);
        console.log(error);
        return;
      }

      setTemplateName('');
      setSending(false)
      router.push(`create/create-fields/${data[0].template_id}/`)
    }
  }

  return (
    <div className="antialiased flex min-h-screen flex-col justify-center items-center bg-slate-100">
      <form onSubmit={handleSubmit}> 
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-black">
              Template name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={templateName}
              onChange={(e) => setTemplateName(e.target.value)}
              className="px-3 py-2 w-[500px] text-sm text-slate-400 border border-slate-300 rounded outline-none"
            />
          </div>
          <button className="bg-slate-900 font-semibold rounded py-2 text-white">
            {sending ? '...' : 'Criar'}
          </button>
        </div>
      </form>
    </div>
  );
}
