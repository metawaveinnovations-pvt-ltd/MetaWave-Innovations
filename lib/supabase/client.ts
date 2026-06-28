import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  const metaEnv = typeof import.meta !== 'undefined' ? (import.meta as any).env : null;
  
  const url = (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_SUPABASE_URL) || 
              (metaEnv?.VITE_SUPABASE_URL) || 
              (metaEnv?.NEXT_PUBLIC_SUPABASE_URL) || 
              '';
              
  const key = (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY) || 
              (metaEnv?.VITE_SUPABASE_PUBLISHABLE_KEY) || 
              (metaEnv?.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY) || 
              '';

  return createBrowserClient(url, key)
}
