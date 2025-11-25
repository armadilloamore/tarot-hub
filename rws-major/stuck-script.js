document.addEventListener("DOMContentLoaded", () => {
  const drawBtn = document.getElementById("draw-btn");
  const resultBox = document.getElementById("card-result");
  const cardImage = document.getElementById("card-image");
  const cardTitle = document.getElementById("card-title");
  const cardMeaning = document.getElementById("card-meaning");

  // ⭐ Add this line
  const viewAllLink = document.getElementById("view-all-stuck");

  let cardData = [];

  // Load STUCK JSON
  fetch("stuck.json")
    .then(res => res.json())
    .then(data => cardData = data)
    .catch(err => console.error("Error loading stuck.json:", err));

  drawBtn.addEventListener("click", () => {
    if (cardData.length === 0) return;

    const card = cardData[Math.floor(Math.random() * cardData.length)];

    cardImage.src = card.image;
    cardTitle.textContent = card.name;

    cardMeaning.innerHTML = `
      <h3>Internal Block</h3>
      <p>${card.meaning.internal_block}</p>

      <h3>Psychological Frame</h3>
      <p>${card.meaning.psychological_frame}</p>

      <h3>Where You May Be Resisting</h3>
      <ul>
        ${card.meaning.resistance_points.map(item => `<li>${item}</li>`).join("")}
      </ul>

      <h3>Coaching Question</h3>
      <p>${card.meaning.coaching_question}</p>

      <h3>Practice</h3>
      <ul>
        ${card.meaning.practice.map(step => `<li>${step}</li>`).join("")}
      </ul>

      <h3>Core Insight</h3>
      <p>${card.meaning.core_insight}</p>
    `;

    // Show the result container
    resultBox.style.display = "block";

    
  });
});
