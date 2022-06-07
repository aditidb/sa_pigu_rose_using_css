let audioElement = new Audio("./audio/song3.mp3");
let masterplay = document.getElementById("castle");
masterplay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
  } else {
    audioElement.pause();
  }
});

// let full_song = new Audio("./audio/song3.mp3");
// let playbutton = document.getElementById("song");
// playbutton.addEventListener("click", () => {
//   if (full_song.paused || full_song.currentTime <= 0) {
//     full_song.play();
//   } else {
//     full_song.pause();
//   }
// });
