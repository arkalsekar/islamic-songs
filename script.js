document.addEventListener('DOMContentLoaded', function () {
    const audioPlayers = document.querySelectorAll('.audio-player');
    const playPauseBtns = document.querySelectorAll('.playPauseBtn');
    const stopBtns = document.querySelectorAll('.stopBtn');
    const muteBtns = document.querySelectorAll('.muteBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentAudioIndex = 0;

    function handleAudio(player, playPauseBtn, stopBtn, muteBtn) {
        playPauseBtn.addEventListener('click', function () {
            if (player.paused) {
                player.play();
                playPauseBtn.textContent = 'Pause';
            } else {
                player.pause();
                playPauseBtn.textContent = 'Play';
            }
        });

        stopBtn.addEventListener('click', function () {
            player.pause();
            player.currentTime = 0;
            playPauseBtn.textContent = 'Play';
        });

        muteBtn.addEventListener('click', function () {
            player.muted = !player.muted;
            muteBtn.textContent = player.muted ? 'Unmute' : 'Mute';
        });
    }

    function loadAudio(index) {
        for (let i = 0; i < audioPlayers.length; i++) {
            audioPlayers[i].src = `audio${index + 1}.m4a`;
            playPauseBtns[i].textContent = 'Play';
            audioPlayers[i].pause();
        }
        currentAudioIndex = index;
    }

    function nextAudio() {
        currentAudioIndex = (currentAudioIndex + 1) % audioPlayers.length;
        loadAudio(currentAudioIndex);
    }

    function prevAudio() {
        let sound = new Audio("http://sound.com/mySound.mp3");

//on play event:
sound.onplay = () => {

};

//on pause event:
sound.onpause = () => {

};

//on end event:
sound.onended = () => {

};

//play:
sound.play();

//pause:
sound.pause();

//stop:
sound.pause();
sound.currentTime = 0;
    }

    for (let i = 0; i < audioPlayers.length; i++) {
        handleAudio(audioPlayers[i], playPauseBtns[i], stopBtns[i], muteBtns[i]);
    }

    prevBtn.addEventListener('click', prevAudio);
    nextBtn.addEventListener('click', nextAudio);
});
