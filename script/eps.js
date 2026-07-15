const video = document.getElementById("videoPlayer");

function playEpisode(file, episode){

video.src = file;

video.load();

video.play();

document.title = "Business Proposal - Episode " + episode;

window.scrollTo({
top:0,
behavior:"smooth"
});

}

document.querySelector(".back").addEventListener("click",function(e){

e.preventDefault();

document.body.classList.add("slide-out");

setTimeout(()=>{

window.location.href="episode.html";

},400);

});