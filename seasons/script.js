document.addEventListener("DOMContentLoaded", () => {
  const drawBtn = document.getElementById("draw-btn");
  const resultBox = document.getElementById("card-result");
  const cardImage = document.getElementById("card-image");
  const cardTitle = document.getElementById("card-title");
  const cardMeaning = document.getElementById("card-meaning");

  if (!drawBtn || !resultBox || !cardImage || !cardTitle || !cardMeaning) {
    console.error("Seasons deck: one or more DOM elements not found.");
    return;
  }

  let cardData = [];

  // Load Seasons of the Heart data (same folder)
  fetch("seasons.json")
    .then(response => response.json())
    .then(data => {
      cardData = data;
    })
    .catch(err => console.error("Error loading seasons.json:", err));

  // Draw a card
  drawBtn.addEventListener("click", (event) => {
    event.preventDefault();

    if (cardData.length === 0) {
      console.warn("Seasons deck: card data not loaded yet.");
      return;
    }

    const randomCard = cardData[Math.floor(Math.random() * cardData.length)];

    cardImage.src = randomCard.image;
    cardImage.alt = randomCard.name;
    cardTitle.textContent = randomCard.name;
    cardMeaning.textContent = randomCard.meaning || ""; // safe if blank

    resultBox.style.display = "block";
    resultBox.scrollIntoView({ behavior: "smooth" });
  });
});
