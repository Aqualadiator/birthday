document.getElementById("celebrateBtn").addEventListener("click", () => {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
  });

  

  const audio = new Audio("hbd.mp3");
  audio.play();

// Falling hearts
for (let i = 0; i < 30; i++) {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDelay = Math.random() * 3 + "s";
  heart.style.animationDuration = 4 + Math.random() * 3 + "s";
  document.getElementById("heartContainer").appendChild(heart);

  // Remove after animation
  setTimeout(() => {
    heart.remove();
  }, 8000);
}


});
