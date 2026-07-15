document.querySelector(".back").addEventListener("click",function(e){

e.preventDefault();

document.body.classList.add("slide-out");

setTimeout(()=>{

window.location="index.html";

},400);

});

const menu = document.getElementById("menuSemua");

if(menu){

menu.addEventListener("click",function(e){

e.preventDefault();

document.body.style.animation="keluarKanan .4s forwards";

setTimeout(()=>{

window.location="semua.html";

},400);

});

}