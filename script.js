'use strict';

const song_title = document.getElementById('song_title');
const progressBarWrapper = document.getElementById('progress_bar');
const progress = document.getElementById('progress');
const audio = document.getElementById('audio');
const imageWrapper= document.getElementById('img_rotate_wrapper');
const image= document.getElementById('img');
const backwardbtn = document.getElementById('backward');
const playbtn = document.getElementById('play');
const forwardbtn = document.getElementById('forward');


const songs = ['He Did It Again', 'I Know Who I Am', 'Nara Ekele'];
let songIndex = 2;

const currentSong = songs[songIndex];

//play song
function playSong(song){
    imageWrapper.classList.add('play');
    song_title.textContent = song;
    image.src = `images/${song}.jpg`;
    audio.src = `song/${song}.mp3`;
    audio.play();
    playbtn.innerHTML = '<i class="far fa-pause-circle">'
    
}

//pause song
function pauseSong(){
    imageWrapper.classList.remove('play');
    audio.pause();
    playbtn.innerHTML = '<i class="far fa-play-circle">'
}

function nextSong(){
    songIndex++;
    if(songIndex > 2){
        songIndex = songs.length-3;
    }
    playSong(songs[songIndex])
}

function prevSong(){
    songIndex--;
    if(songIndex < 0){
        songIndex = songs.length-1;
    }
    playSong(songs[songIndex])
}


audio.addEventListener('timeupdate', ()=>{
    const duration = parseInt(audio.duration);
    const currentime = parseInt(audio.currentTime);
    const timeLeft = currentime /duration *100;
    progress.style.width = `${timeLeft}%`;
    console.log(timeLeft);
})
// audio.onloadedmetadata = function() {
//    console.log(audio.duration);
//   };

//when song end
audio.onended = function(){
    imageWrapper.classList.remove('play');
    playbtn.innerHTML = '<i class="far fa-pause-circle">'
    alert('The Music has ended')
}

// event listener
playbtn.addEventListener('click', ()=>{
    if(!imageWrapper.classList.contains('play')){ 
        playSong(currentSong);
    }else{
        pauseSong();
    }
    
})

forwardbtn.addEventListener('click', nextSong);
backwardbtn.addEventListener('click', prevSong);
