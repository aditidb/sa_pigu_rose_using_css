let audioElement = new Audio("./audio/song1.mp3");
let masterplay = document.getElementById("castle");
masterplay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
  } else {
    audioElement.pause();
  }
});
