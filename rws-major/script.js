document.addEventListener("DOMContentLoaded", () => {
  const drawBtn = document.getElementById("draw-btn");
  const resultBox = document.getElementById("card-result");
  const cardImage = document.getElementById("card-image");
  const cardTitle = document.getElementById("card-title");
  const cardMeaning = document.getElementById("card-meaning");

  // Detect which JSON to load based on page filename
  let jsonFile = "";

  if (window.location.href.includes("jungian")) {
    jsonFile = "jungian.json";
  } else if (window.location.href.includes("stuck")) {
    jsonFile = "stuck.json";
  }

  let cardData = [];

  // Load the JSON
  fetch(jsonFile)
    .then(response => response.json())
    .then(data => {
      cardData = data;
    })
    .catch(err => console.error("Error loading JSON:", err));

  // Draw a card
  drawBtn.addEventListener("click", () => {
    if (cardData.length === 0) return;

    const randomCard = cardData[Math.floor(Math.random() * cardData.length)];

    cardImage.src = randomCard.image;
    cardTitle.textContent = randomCard.name;
    const table = document.getElementById("card-table");
const tbody = table.querySelector("tbody");

// Clear old rows
tbody.innerHTML = "";

// Map label → JSON key
const fields = [
  ["Archetype", randomCard.archetype],
  ["Psychological Role", randomCard.psychological_role],
  ["Ego Status", randomCard.ego_status],
  ["Symbolic Number", randomCard.symbolic_number],
  ["Shadow Aspect", randomCard.shadow_aspect],
  ["Spiritual Meaning", randomCard.spiritual_meaning],
  ["Unconscious Connection", randomCard.unconscious_connection],
  ["Journey Theme", randomCard.journey_theme],
  ["Jungian Goal", randomCard.jungian_goal]
];

fields.forEach(([label, value]) => {
  const row = document.createElement("tr");

  const labelCell = document.createElement("td");
  labelCell.textContent = label;

  const valueCell = document.createElement("td");
  valueCell.textContent = value;

  row.appendChild(labelCell);
  row.appendChild(valueCell);
  tbody.appendChild(row);
});

table.style.display = "table";


    resultBox.style.display = "block";

        // ⭐ SHOW THE "VIEW ALL JUNGIANS" LINK ⭐
    const viewAll = document.getElementById("view-all-jungian");
    if (viewAll) {
      viewAll.style.display = "block";
    }
    
    resultBox.scrollIntoView({ behavior: "smooth" });
  });
});
