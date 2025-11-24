document.addEventListener("DOMContentLoaded", () => {
  const drawBtn = document.getElementById("draw-btn");
  const resultBox = document.getElementById("card-result");
  const cardImage = document.getElementById("card-image");
  const cardTitle = document.getElementById("card-title");
  const cardMeaning = document.getElementById("card-meaning");

  // Detect the deck mode (jungian or stuck)
  const isJungian = window.location.href.includes("jungian");
  const isStuck = window.location.href.includes("stuck");

  // Choose the right JSON file
  let jsonFile = "";
  if (isJungian) jsonFile = "jungian.json";
  if (isStuck) jsonFile = "stuck.json";

  let cardData = [];

  // Load JSON
  fetch(jsonFile)
    .then(response => response.json())
    .then(data => {
      cardData = data;
    })
    .catch(err => console.error("Error loading JSON:", err));

  // Draw card
  drawBtn.addEventListener("click", () => {
    if (cardData.length === 0) return;

    const randomCard = cardData[Math.floor(Math.random() * cardData.length)];

    cardImage.src = randomCard.image;
    cardTitle.textContent = randomCard.name;

    // -------------------------------
    // ⭐ JUNGIAN MODE ⭐
    // -------------------------------
    if (isJungian) {
      const table = document.getElementById("card-table");
      const tbody = table.querySelector("tbody");

      tbody.innerHTML = "";

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
        const valueCell = document.createElement("td");

        labelCell.textContent = label;
        valueCell.textContent = value;

        row.appendChild(labelCell);
        row.appendChild(valueCell);
        tbody.appendChild(row);
      });

      table.style.display = "table";

      // Show "View All" link
      const viewAll = document.getElementById("view-all-jungian");
      if (viewAll) viewAll.style.display = "block";

      // Hide meaning paragraph
      cardMeaning.style.display = "none";
    }

    // -------------------------------
    // ⭐ STUCK MODE ⭐
    // -------------------------------
    if (isStuck) {
      // STUCK JSON uses nested meaning object
      cardMeaning.innerHTML = `
        <strong>Internal Block:</strong> ${randomCard.meaning.internal_block}<br><br>
        <strong>Psychological Frame:</strong> ${randomCard.meaning.psychological_frame}<br><br>

        <strong>Where You May Be Resisting:</strong>
        <ul>
          ${randomCard.meaning.resistance_points.map(point => `<li>${point}</li>`).join("")}
        </ul>

        <strong>Coaching Question:</strong><br>
        ${randomCard.meaning.coaching_question}<br><br>

        <strong>Practice:</strong>
        <ul>
          ${randomCard.meaning.practice.map(step => `<li>${step}</li>`).join("")}
        </ul>

        <strong>Core Insight:</strong><br>
        ${randomCard.meaning.core_insight}
      `;

      cardMeaning.style.display = "block";

      // Hide Jungian table if present
      const table = document.getElementById("card-table");
      if (table) table.style.display = "none";
    }

    resultBox.style.display = "block";
    resultBox.scrollIntoView({ behavior: "smooth" });
  });
});
