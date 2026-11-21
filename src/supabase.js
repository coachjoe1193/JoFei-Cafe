import { createClient } from '@supabase/supabase-js';

// Publishable browser configuration; this key grants no administrative access.
export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL || 'https://okeinstowfebcxrkawth.supabase.co',
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || 'sb_publishable_nLCxU10yFuxsDXKMOp-ulA_xUmpFOO1',
  { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } },
);
export const authRedirect = 'https://jofeicafe.vercel.app/';
