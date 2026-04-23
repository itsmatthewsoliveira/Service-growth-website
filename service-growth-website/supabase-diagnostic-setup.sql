-- Diagnostic leads — captured by the AI sales agent (Alex) on /growth-blueprint
-- Run once in the Supabase SQL editor.

create table if not exists public.diagnostic_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),

  -- Prospect
  name text not null,
  business_name text,
  service_type text,
  location text,
  revenue_band text,
  lead_sources text,
  speed_to_lead text,
  bottleneck text,
  phone text,
  email text,

  -- Routing decisions
  qualified boolean not null default false,
  cta_variant text not null check (cta_variant in ('phone', 'calendly')),
  summary text not null,

  -- Full chat transcript for later review / training
  transcript jsonb
);

create index if not exists diagnostic_leads_created_at_idx
  on public.diagnostic_leads (created_at desc);

create index if not exists diagnostic_leads_qualified_idx
  on public.diagnostic_leads (qualified, created_at desc);

create index if not exists diagnostic_leads_variant_idx
  on public.diagnostic_leads (cta_variant, qualified);

-- Server-side writes only (service-role key). No public read/write.
alter table public.diagnostic_leads enable row level security;

-- Seed an explicit deny for anon — we only ever write from the API route
-- using the SERVICE_ROLE_KEY, which bypasses RLS.
drop policy if exists "deny anon access" on public.diagnostic_leads;
create policy "deny anon access"
  on public.diagnostic_leads
  for all
  to anon
  using (false)
  with check (false);
