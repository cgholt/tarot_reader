CREATE TABLE IF NOT EXISTS tarot.cards (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    image TEXT,
    upright TEXT,
    reversed TEXT
);
