
import { createClient } from '@supabase/supabase-js'

console.log(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

// Create a single supabase client for interacting with your database
export const supabase_client = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);