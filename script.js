const images = [
"images/nature/nature image 1.jpeg",
"images/nature/nature image 2.jpeg",
"images/nature/nature image 3.jpeg",
"images/nature/nature image 4.jpeg",
"images/nature/nature image 5.jpeg",
"images/nature/nature image 6.jpeg",
"images/nature/nature image 7.jpeg",
"images/nature/nature image 8.jpeg",
"images/nature/nature image 9.jpeg",
"images/city/city image 1.jpeg",
"images/city/city image 2.jpeg",
"images/city/city image 3.jpeg",
"images/city/city image 4.jpeg",
"images/city/city image 5.jpeg",
"images/city/city image 6.jpeg",
"images/city/city image 7.jpeg",
"images/city/city image 8.jpeg",
"images/city/city image 9.jpeg",
"images/animal/animal image 1.jpeg",
"images/animal/animal image 2.jpeg",
"images/animal/animal image 3.jpeg",
"images/animal/animal image 4.jpeg",
"images/animal/animal image 5.jpeg",
"images/animal/animal image 6.jpeg",
"images/animal/animal image 7.jpeg",
"images/animal/animal image 8.jpeg",
"images/animal/animal image 9.jpeg",

];

let filteredImages = [...images];
let currentCategory = "all";

function openLightbox(index){

    current = index;

    document.getElementById("lightbox").style.display = "flex";

    document.getElementById("lightbox-img").src = filteredImages[current];

}

function openLightbox(index){
current=index;
document.getElementById("lightbox").style.display="flex";
document.getElementById("lightbox-img").src=filteredImages[current];
}

function closeLightbox(){
document.getElementById("lightbox").style.display="none";
}

function changeSlide(step){

    current += step;

    if(current < 0){
        current = filteredImages.length - 1;
    }

    if(current >= filteredImages.length){
        current = 0;
    }

    document.getElementById("lightbox-img").src = filteredImages[current];

}

function filterSelection(category){

let images = document.querySelectorAll(".image");
  currentCategory = category;

filteredImages = [];

images.forEach(function(img){

if(category=="all"){
img.style.display="block";
}
else{

if(img.classList.contains(category)){

    img.style.display = "block";

    filteredImages.push(
        img.querySelector("img").src
    );

}

}

});

let btn=document.querySelectorAll(".buttons button");

btn.forEach(function(button){
button.classList.remove("active");
});

event.target.classList.add("active");

}

window.onclick=function(e){

let lightbox=document.getElementById("lightbox");

if(e.target==lightbox){
closeLightbox();
}

}
