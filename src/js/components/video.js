function findVideos() {
  let videos = document.querySelectorAll('.showreel__video');

  for (let i = 0; i < videos.length; i++) {
      setupVideo(videos[i]);
  }
}

function setupVideo(video) {
  // let link = video.querySelector('.video__link');
  // let media = video.querySelector('.video__media');
  let button = document.querySelector('.showreel__btn');
  let image = document.querySelector('.showreel__image');

  button.addEventListener('click', () => {
    video.setAttribute('autoplay', '')
    video.setAttribute('controls', '')
    video.play();

      button.remove();
      image.remove();
  });

  video.classList.add('video--enabled');
}

findVideos();
