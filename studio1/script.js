(function() {
  'use strict';

  const videoContainers = document.querySelectorAll('.split');

  videoContainers.forEach(container => {

    const video = container.querySelector('video');
    const icon = container.querySelector('i');
    const text = container.querySelector('p');
    const audio = container.querySelector('audio');
    // asked chatgpt how to incorporate lyrics based on music being played
    const songLyrics = [
      { time: 3, text: "Hello Seattle, I am a mountaineer" },
      { time: 8.5, text: "In the hills and highlands" },
      { time: 11.5, text: "I fall asleep in hospital parking lots" },
      { time: 17, text: "And awake in your mouth" }
  ];
    const lyricsContainer = document.getElementById('lyricsContainer');
    const currentLyric = document.getElementById('currentLyric');

    container.addEventListener('mouseover', function() {
      video.play();
      icon.style.visibility = 'visible';
      text.style.visibility = 'visible';
      video.style.opacity = '100%';
    });

    // Pause video when the container is hovered out
    container.addEventListener('mouseout', function() {
      video.pause();
      icon.style.visibility = 'hidden'; 
      text.style.visibility = 'hidden';
      video.style.opacity = '40%';
    });    

    icon.addEventListener('click', function() {
      if (container.classList.contains('fullscreen')) {
        // Exit full-screen mode
        container.classList.remove('fullscreen');
        container.style.width = '50vw'; // Set container width back to half-screen
        text.style.fontSize = '25px';
        text.style.color = 'gray';
        text.style.top = '30px';
        audio.pause();
      } else {
        // Enter full-screen mode
        container.classList.add('fullscreen');
        container.style.width = '100vw'; // Set container width to full-screen
        text.style.fontSize = '100px';
        text.style.color = 'white';
        text.style.top = '400px';
        audio.play();
      }
    });

    let lyricIndex = 0;
    audio.addEventListener('timeupdate', () => {
      const currentTime = audio.currentTime;
      if (lyricIndex < songLyrics.length && currentTime >= songLyrics[lyricIndex].time) {
        text.textContent = songLyrics[lyricIndex].text; // Display current lyric line
        lyricIndex++; // Move to the next lyric line
      }
    });

    // Event listener for resetting lyrics when audio playback ends
    audio.addEventListener('ended', () => {
      text.textContent = ''; // Clear displayed lyric
      lyricIndex = 0; // Reset lyric index
    });
  });

})();