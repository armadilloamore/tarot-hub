document.addEventListener("DOMContentLoaded", () => {
  const drawBtn = document.getElementById("draw-btn");
  const resultBox = document.getElementById("card-result");
  const cardImage = document.getElementById("card-image");
  const cardTitle = document.getElementById("card-title");

  // All Jungian outputs appear in the table
  const table = document.getElementById("card-table");
  const tbody = table.querySelector("tbody");
  const viewAllLink = document.getElementById("view-all-jungian");

  let cardData = [];

  // Load JUNGIAN JSON
  fetch("jungian.json")
    .then(res => res.json())
    .then(data => cardData = data)
    .catch(err => console.error("Error loading jungian.json:", err));

  drawBtn.addEventListener("click", () => {
    if (cardData.length === 0) return;

    const card = cardData[Math.floor(Math.random() * cardData.length)];

    cardImage.src = card.image;
    cardTitle.textContent = card.name;

    // Build table
    tbody.innerHTML = "";

    const fields = [
      ["Archetype", card.archetype],
      ["Psychological Role", card.psychological_role],
      ["Ego Status", card.ego_status],
      ["Symbolic Number", card.symbolic_number],
      ["Shadow Aspect", card.shadow_aspect],
      ["Spiritual Meaning", card.spiritual_meaning],
      ["Unconscious Connection", card.unconscious_connection],
      ["Journey Theme", card.journey_theme],
      ["Jungian Goal", card.jungian_goal]
    ];

    fields.forEach(([label, value]) => {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${label}</td><td>${value}</td>`;
      tbody.appendChild(row);
    });

    table.style.display = "table";
    viewAllLink.style.display = "block";
    resultBox.style.display = "block";
    resultBox.scrollIntoView({ behavior: "smooth" });
  });
});
