import throttle from 'lodash/throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', populateTime);
player.on('timeupdate', throttle(getTime, 1000));

function getTime()  {
    player.getCurrentTime().then(function (currentTime) {
        localStorage.setItem("videoplayer-current-time", `${currentTime}`);
    });
};

function populateTime() {
    if (localStorage.getItem("videoplayer-current-time")) {
        const fetchedTime = localStorage.getItem("videoplayer-current-time");
        player.setCurrentTime(fetchedTime);
    }
};