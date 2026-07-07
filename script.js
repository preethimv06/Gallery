const buttons=document.querySelectorAll(".buttons button");
const cards=document.querySelectorAll(".card");

buttons.forEach(button=>{

button.addEventListener("click",()=>{

document.querySelector(".active").classList.remove("active");

button.classList.add("active");

let filter=button.dataset.filter;

cards.forEach(card=>{

if(filter==="all"){

card.classList.remove("hide");

}

else{

card.classList.toggle("hide",

!card.classList.contains(filter)

);

}

});

});

});

const preview=document.getElementById("preview");

const lightbox=document.querySelector(".lightbox");

cards.forEach(card=>{

card.onclick=()=>{

preview.src=card.querySelector("img").src;

lightbox.style.display="flex";

};

});

document.getElementById("close").onclick=()=>{

lightbox.style.display="none";

};

lightbox.onclick=(e)=>{

if(e.target===lightbox){

lightbox.style.display="none";

}

};
