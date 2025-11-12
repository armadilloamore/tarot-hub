# Tarot Portal

A mobile-friendly, visually intuitive web app for drawing cards from three tarot and oracle decks. Built with HTML, CSS, and JavaScript, styled in calming purple gradients, and designed for reflection, archetypal exploration, and self-insight.

---

## 🔮 Decks Available

1. **Rider-Waite-Smith – Major Arcana Only (22 cards)**  
   - Used with a Jungian archetype lens  
   - Ideal for quick psychological insights and deep symbolic reflection

2. **Rider-Waite-Smith – Full Deck (78 cards)**  
   - Includes both Major and Minor Arcana  
   - Planned support for multiple reading styles (e.g., block readings, daily draws)

3. **Seasons of the Heart Oracle Deck (30 cards)**  
   - Original deck based on Japanese-inspired values  
   - Keywords: emotional flow, balance, inner seasons

---

## 🗺️ Site Structure

index.html ← Homepage (choose a deck)
css/style.css ← Custom styles using purple palette
rws-major/
├── index.html ← Info page for Major Arcana deck
├── draw-1.html ← Draw 1 card from Major Arcana
├── draw-3.html ← Draw 3 cards (future)
└── browse.html ← Static gallery of cards

rws-full/
└── ... (same structure, future support)

seasons/
└── ... (same structure, future support)

js/
└── main.js ← Script to draw cards, build table views, etc.

data/
└── rws-major.json ← 22-card deck data with Jungian fields
└── rws-full.json ← Full 78-card tarot deck
└── seasons.json ← Custom oracle deck

---

## 🎯 Features

- Draw 1-card readings from each deck
- Responsive mobile layout
- Hover animations and clear visual flow
- Color palette inspired by shades of violet and amethyst
- JSON-powered card data for flexible interpretation modes

---

## 🛠️ To Do

- [ ] Add 3-card spread functionality
- [ ] Add toggle for reading styles (Jungian, Energetic Blocks, etc.)
- [ ] Add Pinterest-friendly static card pages
- [ ] Add animations or transitions between states
- [ ] Add audio / guided prompts (optional)

---

## 👩‍💻 Made with love by

Armadillo Amore
