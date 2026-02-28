CREATE TABLE IF NOT EXISTS accounts (
  id UUID PRIMARY KEY,
  email TEXT UNIQUE,
  mobile TEXT UNIQUE,
  google_sub TEXT UNIQUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS shops (
  id UUID PRIMARY KEY,
  account_id UUID REFERENCES accounts(id),
  name TEXT NOT NULL,
  persona TEXT DEFAULT 'friendly',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS platform_connections (
  id UUID PRIMARY KEY,
  shop_id UUID REFERENCES shops(id),
  platform TEXT NOT NULL,
  access_token TEXT,
  refresh_token TEXT,
  status TEXT DEFAULT 'connected',
  synced_at TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS reviews (
  id UUID PRIMARY KEY,
  shop_id UUID REFERENCES shops(id),
  platform TEXT NOT NULL,
  author_name TEXT,
  rating INT,
  content TEXT,
  sentiment TEXT,
  created_at TIMESTAMPTZ,
  imported_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS cases (
  id UUID PRIMARY KEY,
  review_id UUID REFERENCES reviews(id),
  status TEXT DEFAULT 'open',
  urgency TEXT,
  opened_at TIMESTAMPTZ DEFAULT NOW(),
  resolved_at TIMESTAMPTZ
);
