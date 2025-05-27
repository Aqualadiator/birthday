document.getElementById("celebrateBtn").addEventListener("click", () => {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
  });

  // Optional audio
  const audio = new Audio("https://www.youtube.com/watch?v=TjEbuWP3hjg");
  audio.play();
});
