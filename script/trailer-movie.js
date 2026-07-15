const back = document.querySelector(".back");

back.addEventListener("click", function(e){

e.preventDefault();

document.body.classList.add("slide-out");

setTimeout(()=>{

window.location="movie.html";

},400);

});