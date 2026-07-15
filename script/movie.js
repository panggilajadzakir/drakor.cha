const beranda=document.querySelector(".beranda");

beranda.addEventListener("click",function(e){

e.preventDefault();

document.body.classList.add("slide-out");

setTimeout(()=>{

window.location="index.html";

},400);

});