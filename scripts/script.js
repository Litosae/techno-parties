const audio = document.getElementById('background-music');
const playButton = document.getElementById('play-button');

playButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playButton.textContent = 'Pause Music';
  } else {
    audio.pause();
    playButton.textContent = 'Play Music';
  }
});