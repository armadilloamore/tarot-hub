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
    cardMeaning.textContent = randomCard.meaning;

    resultBox.style.display = "block";
    resultBox.scrollIntoView({ behavior: "smooth" });
  });
});
