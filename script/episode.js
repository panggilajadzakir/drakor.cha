document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click",function(e){

const href=this.getAttribute("href");

if(href){

e.preventDefault();

document.body.classList.add("slide-out");

setTimeout(()=>{

window.location.href=href;

},400);

}

});

});