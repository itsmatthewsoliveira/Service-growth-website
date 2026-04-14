-- Run this in your Supabase SQL editor (Dashboard > SQL Editor)

CREATE TABLE IF NOT EXISTS growth_lab_waitlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT,
  email TEXT NOT NULL UNIQUE,
  phone TEXT,
  company TEXT,
  state TEXT,
  budget TEXT,
  source TEXT DEFAULT 'growth-blueprint',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS (good practice, admin client bypasses it)
ALTER TABLE growth_lab_waitlist ENABLE ROW LEVEL SECURITY;
