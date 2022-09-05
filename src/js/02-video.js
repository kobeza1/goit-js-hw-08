import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player.getDuration().then(function (duration) {
  console.log('duration in seconds:', duration);
});

player.on('play', function () {
  console.log('played the video!');
});

player.on('timeupdate', throttle(onTimeUpdate, 1000));
function onTimeUpdate({ seconds }) {
  const savedTime = seconds;
  console.log(savedTime);
  localStorage.setItem('videoplayer-current-time', savedTime);
}

const currentTime = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(currentTime).then(function (duration) {
  console.log(`video resumed at ${duration} seconds`);
});
