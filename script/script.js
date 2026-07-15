const reveal = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

reveal.forEach((item)=>{

const top=item.getBoundingClientRect().top;

const height=window.innerHeight;

if(top < height-120){

item.classList.add("active");

}

});

});