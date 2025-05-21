const fs = require("fs");
const path = require("path");

// Path to JSON file
const jsonPath = path.join(__dirname, "tarot_cards.json");
const tarotDeck = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));

// Escape single quotes for SQL
function sqlEscape(str) {
  return str.replace(/'/g, "''");
}

// Generate values string
const values = tarotDeck
  .map(
    (card) =>
      `('${sqlEscape(card.name)}', '${sqlEscape(card.slug)}', '${sqlEscape(
        card.image
      )}', '${sqlEscape(card.upright)}', '${sqlEscape(card.reversed)}')`
  )
  .join(",\n");

const sql = `INSERT INTO tarot.cards (name, slug, image, upright, reversed) VALUES\n${values};\n`;

// Write to SQL file
const outputPath = path.join(__dirname, "../init/03_seed_cards.sql");
fs.writeFileSync(outputPath, sql);

console.log("SQL seed file created at:", outputPath);
