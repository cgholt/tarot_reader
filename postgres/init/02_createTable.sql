CREATE TABLE IF NOT EXISTS tarot.cards (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    image TEXT,
    upright TEXT,
    reversed TEXT
);

CREATE TABLE IF NOT EXISTS tarot.users (
    id SERIAL PRIMARY KEY,
    email TEXT UNIQUE,
    password TEXT
);

CREATE TABLE IF NOT EXISTS tarot.sessions (
    id SERIAL PRIMARY KEY,
    expires_at INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    FOREIGN KEY (user_id) references tarot.users(id)
);
