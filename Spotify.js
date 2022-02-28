
let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let masterPlay1 = document.getElementById("songiTmePlay1");
let myProgressBar = document.getElementById("myProgressBar");
let masterSongName = document.getElementById("masterSongName");

let songitms = Array.from(document.getElementsByClassName("songItem"));
let songs = [
    {
        songName: "Male Rule",
        filePath: "song/1.mp3",
        coverPath: "cover/1.jpg",
        duration: "3:20",
    },
    {
        songName: "Bigadne De",
        filePath: "song/2.mp3",
        coverPath: "cover/2.jpg",
        duration: "4:18",
    },
    {
        songName: "Chaka Chak",
        filePath: "song/3.mp3",
        coverPath: "cover/3.jpg",
        duration: "4:29",
    },
    {
        songName: "Dhokha",
        filePath: "song/4.mp3",
        coverPath: "cover/4.jpg",
        duration: "4:05",
    },
    {
        songName: "Dholida",
        filePath: "song/5.mp3",
        coverPath: "cover/5.jpg",
        duration: "2:59",
    },
    {
        songName: "Jeetega Jeetega",
        filePath: "song/6.mp3",
        coverPath: "cover/6.jpg",
        duration: "3:57",
    },
    {
        songName: "Lehra Do",
        filePath: "song/7.mp3",
        coverPath: "cover/7.jpg",
        duration: "3:37",
    },
    {
        songName: "Maar Khayegaa",
        filePath: "song/8.mp3",
        coverPath: "cover/8.jpg",
        duration: "3:18",
    }
]
songitms.forEach((element, i) => {
    
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
    // element.getElementsByClassName('duration')[0].innerText = songs[i].duration;
});
// audioElement.play();


// Handle play/pause click

masterPlay.addEventListener("click", (e) => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        document.getElementById('bottom').style.backgroundImage = "url('song.gif')";

    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        document.getElementById('bottom').style.backgroundImage = "none";
        songIndex = parseInt(e.target.id)
        // makeAllPlays();


    }
})



audioElement.addEventListener("timeupdate", () => {
    // Update seek
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
   
    if (myProgressBar.value == 100) {
        // document.getElementById('next').addEventListener('click',()=>{
        if (songIndex >= 7) {
            songIndex = 0
        }
        else {

            songIndex += 1;
        }
        audioElement.src = `song/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        document.getElementById('bottom').style.backgroundImage = "url('song.gif')";
        songIndex = parseInt(e.target.id)
        e.target.classList.remove('fa-play')
        e.target.classList.add('fa-pause')


        // })
    }
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})


const makeAllPlays = () => {

    Array.from(document.getElementsByClassName('songiTmePlay1')).forEach((element) => {
        element.classList.remove('fa-pause')

        element.classList.add('fa-play')

    })
}

Array.from(document.getElementsByClassName('songiTmePlay1')).forEach((element) => {
    element.addEventListener('click', (e) => {



        if (audioElement.paused) {

            makeAllPlays();
            songIndex = parseInt(e.target.id)
            e.target.classList.remove('fa-play')
            e.target.classList.add('fa-pause')
            audioElement.src = `song/${songIndex + 1}.mp3`;
            masterSongName.innerText = songs[songIndex].songName
            
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove('fa-play');
            masterPlay.classList.add('fa-pause');
            document.getElementById('bottom').style.backgroundImage = "url('song.gif')";
            document.getElementById('bottom').style.display = "flex"
        }
        else {
            makeAllPlays();

            audioElement.pause();
            masterPlay.classList.add('fa-play');
            masterPlay.classList.remove('fa-pause');
            e.target.classList.remove('fa-pause')
            e.target.classList.add('fa-play')
            document.getElementById('bottom').style.backgroundImage = "none";
            // masterPlay1.classList.add('fa-pause');
            // masterPlay1.classList.remove('fa-play');

        }

    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 7) {
        songIndex = 0
    }
    else {

        songIndex += 1;
    }
    audioElement.src = `song/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    document.getElementById('bottom').style.backgroundImage = "url('song.gif')";
    makeAllPlays();
   

})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 7
    }
    else {

        songIndex -= 1;
    }
    audioElement.src = `song/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    document.getElementById('bottom').style.backgroundImage = "url('song.gif')";
    makeAllPlays();


})


