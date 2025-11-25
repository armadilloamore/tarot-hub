document.addEventListener("DOMContentLoaded", () => {
  const drawBtn = document.getElementById("draw-btn");
  const resultBox = document.getElementById("card-result");
  const cardImage = document.getElementById("card-image");
  const cardTitle = document.getElementById("card-title");
  const cardMeaning = document.getElementById("card-meaning");

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

    // Build STUCK meaning text
    cardMeaning.innerHTML = `
      <strong>Internal Block:</strong> ${card.meaning.internal_block}<br><br>
      <strong>Psychological Frame:</strong> ${card.meaning.psychological_frame}<br><br>
      <strong>Where You May Be Resisting:</strong>
      <ul>
        ${card.meaning.resistance_points.map(p => `<li>${p}</li>`).join("")}
      </ul>
      <strong>Coaching Question:</strong><br>${card.meaning.coaching_question}<br><br>
      <strong>Practice:</strong>
      <ul>
        ${card.meaning.practice.map(step => `<li>${step}</li>`).join("")}
      </ul>
      <strong>Core Insight:</strong><br>${card.meaning.core_insight}
    `;

    resultBox.style.display = "block";
    resultBox.scrollIntoView({ behavior: "smooth" });
  });
});
