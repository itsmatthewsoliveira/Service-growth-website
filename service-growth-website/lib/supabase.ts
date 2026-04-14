import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// Server-side admin client — never expose to browser
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

// ─── Types ──────────────────────────────────────────────────────────────────

export interface GrowthLabWaitlistEntry {
  name?: string;
  email: string;
  phone?: string;
  company?: string;
  state?: string;
  budget?: string;
  source?: string;
}
