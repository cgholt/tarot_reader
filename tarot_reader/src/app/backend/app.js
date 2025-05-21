import express from "express";
import sqlite from "better-sqlite3";
import cors from "cors";

export const TAROT_DECK = [
  {
    name: "The Fool",
    suit: "Major Arcana",
    upright: "Beginnings, innocence, spontaneity, a free spirit",
    reversed: "Holding back, recklessness, risk-taking",
    image: "fool.jpg",
  },
  {
    name: "The Magician",
    suit: "Major Arcana",
    upright: "Manifestation, resourcefulness, power, inspired action",
    reversed: "Manipulation, poor planning, untapped talents",
    image: "magician.jpg",
  },
  {
    name: "The High Priestess",
    suit: "Major Arcana",
    upright:
      "Intuition, sacred knowledge, divine feminine, the subconscious mind",
    reversed: "Secrets, disconnected from intuition, withdrawal and silence",
    image: "high_priestess.jpg",
  },
  {
    name: "Ace of Cups",
    suit: "Cups",
    upright: "Love, new relationships, compassion, creativity",
    reversed: "Self-love, intuition, repressed emotions",
    image: "ace_of_cups.jpg",
  },
  {
    name: "Ten of Swords",
    suit: "Swords",
    upright: "Painful endings, deep wounds, betrayal, loss, crisis",
    reversed: "Recovery, regeneration, resisting an inevitable end",
    image: "ten_of_swords.jpg",
  },
];

const db = sqlite("data.db");

function initDb() {
  db.prepare(
    "CREATE TABLE IF NOT EXISTS news (id INTEGER PRIMARY KEY, slug TEXT UNIQUE, name TEXT, suit TEXT, upright TEXT, reversed TEXT, image TEXT)"
  ).run();

  const { count } = db.prepare("SELECT COUNT(*) as count FROM news").get();

  if (count === 0) {
    const insert = db.prepare(
      "INSERT INTO news (slug, name, suit, upright, reversed) VALUES (?, ?, ?, ?, ?)"
    );

    TAROT_DECK.forEach((card) => {
      insert.run(
        card.slug,
        card.name,
        card.suit,
        card.upright,
        card.reversed,
        card.image
      );
    });
  }
}

const app = express();

app.use(cors());

app.get("/cards", (req, res) => {
  const cards = db.prepare("SELECT * FROM news").all();
  res.json(cards);
});

initDb();

app.listen(8080);
