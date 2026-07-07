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

let current = 0;

function openLightbox(index){
current=index;
document.getElementById("lightbox").style.display="flex";
document.getElementById("lightbox-img").src=images[current];
}

function closeLightbox(){
document.getElementById("lightbox").style.display="none";
}

function changeSlide(step){

current += step;

if(current<0){
current=images.length-1;
}

if(current>=images.length){
current=0;
}

document.getElementById("lightbox-img").src=images[current];

}

function filterSelection(category){

let images=document.querySelectorAll(".image");

images.forEach(function(img){

if(category=="all"){
img.style.display="block";
}
else{

if(img.classList.contains(category)){
img.style.display="block";
}
else{
img.style.display="none";
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