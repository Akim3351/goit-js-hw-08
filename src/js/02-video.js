import throttle from 'lodash/throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', setTime);
player.on('timeupdate', throttle(getTime, 1000));

function getTime()  {
    player.getCurrentTime().then(function (currentTime) {
        localStorage.setItem("videoplayer-current-time", `${currentTime}`);
    });
};

function setTime() {
    const fetchedTime = localStorage.getItem("videoplayer-current-time");
    player.setCurrentTime(fetchedTime);
};