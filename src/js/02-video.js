import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

function convertTime(value) {
  let time = '';
  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60);
  return seconds < 10
    ? (time = `${minutes}:0${seconds}`)
    : (time = `${minutes}:${seconds}`);
}

player.getDuration().then(function (duration) {
  console.log('Video duration: ' + convertTime(duration));
});

player.on('play', function () {
  console.log('played the video!');
});

player.on('timeupdate', throttle(onTimeUpdate, 1000));
function onTimeUpdate({ seconds }) {
  const savedTime = seconds;
  console.log(convertTime(savedTime));
  localStorage.setItem('videoplayer-current-time', savedTime);
}

const currentTime = localStorage.getItem('videoplayer-current-time');
if (currentTime) {
  player.setCurrentTime(currentTime).then(function (duration) {
    console.log('The video resumed at ' + convertTime(duration));
  });
}
