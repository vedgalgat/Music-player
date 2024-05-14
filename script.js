  let arr = [
   { Songname: "Yaraane", url: "./song/yaraane.mp3", image: "./image/yaraane.jpg",duration:"2:59" },
  { Songname: "struggler", url: "./song/Struggler - R Nait.mp3", image: "./image/r-nait.webp" ,duration:"3:09"},
  { Songname: "Deewane Hum Nahi Hote", url: "./song/Deewane Hum Nahi Hote.mp3", image: "./image/Deewane.jpg",duration:"4:00" },
  { Songname: "Jale-2", url: "./song/Jale 2.mp3", image: "./image/jale.jpg" ,duration:"2:48"},
  { Songname: "Narazgi", url: "./song/Narazgi.mp3", image: "./image/Narazgi.jpg",duration: "3:03"},
  { Songname: "Teri Kamli", url: "./song/Teri_kamli.mp3", image: "./image/ved.jpg",duration: "3:57"},
  { Songname: "Yaraane", url: "./song/yaraane.mp3", image: "./image/yaraane.jpg",duration: "2:00"},
  { Songname: "struggler", url: "./song/Struggler.mp3", image: "./image/r-nait.webp",duration: "2:55"},
  { Songname: "Deewane Hum Nahi Hote", url: "./song/Deewane Hum Nahi Hote.mp3", image: "./image/Deewane.jpg",duration:"3:00" },
  { Songname: "Jale-2", url: "./song/Jale 2.mp3", image: "./image/jale.jpg" ,duration:"3:34"},
  { Songname: "Narazgi", url: "./song/Narazgi.mp3", image: "./image/Narazgi.jpg",duration:"3:43" },
  { Songname: "Teri Kamli", url: "./song/Teri_kamli.mp3", image: "./image/ved.jpg",duration:"4:00" }
]

var audio = new Audio();
var selectedsong = "0" //  Default selected song index
let left = document.querySelector("#left")

function mainfunction() {
  let clutter = "";
  arr.forEach(function (elem, index) {
    clutter += ` <div class="song-card" id=${index}>
<div class="part1">
<img src=${elem.image} alt="">
<h2> ${elem.Songname}</h2>
</div>
<h6>${elem.duration}</h6>
</div>`

  })

  document.querySelector("#all-songs").innerHTML = clutter;

  audio.src = arr[selectedsong].url;
  left.style.backgroundImage = `url(${arr[selectedsong].image})`
}
mainfunction()

document.querySelector("#all-songs").addEventListener("click", function (dets) {
  selectedsong = dets.target.id;
  play.innerHTML = `<i class="ri-pause-line"></i>`
  mainfunction()  
  audio.play();

})

let pausedPosition = 0;

let play = document.querySelector("#play")
flag = 0
play.addEventListener("click", () => {
  if (flag == 0) {

    play.innerHTML = `<i class="ri-pause-line"></i>`
    if (pausedPosition) {
      audio.currentTime = pausedPosition
      pausedPosition = 0
    }
    audio.play()
    flag = 1;
  }
  else {
    play.innerHTML = `<i class="ri-play-fill"></i>`
    pausedPosition = audio.currentTime
    audio.pause()
    flag = 0
  }
})
// This code for forward icon which is move on upcoming song .

let forward = document.querySelector("#forward");

forward.addEventListener("click", () => {
  if (selectedsong < arr.length - 1) {
    selectedsong++
    mainfunction()
    audio.play()
    backward.style.opacity="1"
    play.innerHTML = `<i class="ri-pause-line"></i>`
  }
  else {
    forward.style.opacity = "0.5"
    forward.disabled=true
  }
 
})
// This code for backward which is play back song

let backward = document.querySelector("#backward")

backward.addEventListener("click", () => {
  if (selectedsong > 0) {
    selectedsong--
    mainfunction()
    audio.play()
    forward.style.opacity="1"
    play.innerHTML = `<i class="ri-pause-line"></i>`
  }
  else {
    backward.style.opacity = "0.5"
    backward.disabled=true;
  }
})


