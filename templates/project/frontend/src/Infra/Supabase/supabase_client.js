// TODO: create process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
import { createClient } from '@supabase/supabase-js'
export const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL || "https://d.supabase.co", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "d")