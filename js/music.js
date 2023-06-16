let audio = new Audio();
audio.volume = 0.25;

document.querySelector('#play').addEventListener('click', function (e) {
  if (e.target.value === 'Plunge into the Forest') {
    e.target.value = 'Get back from the forest';
    audio.src = e.target.getAttribute('data-url');
    audio.play();
  } else {
    e.target.value = 'Plunge into the Forest';
    audio.currentTime = 0;
    audio.pause();
  }
});

audio.addEventListener('ended', function() {
  document.querySelector('#play').value = 'Plunge into the Forest';
});