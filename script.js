// =======================
// Gallery Images
// =======================

const galleryImages = document.querySelectorAll(".gallery .image img");

let filteredImages = [];
let currentIndex = 0;

// Open Lightbox
galleryImages.forEach(img => {
    img.addEventListener("click", function () {

        // Get only visible images
        filteredImages = Array.from(document.querySelectorAll(".gallery .image"))
            .filter(div => window.getComputedStyle(div).display !== "none")
            .map(div => div.querySelector("img"));

        currentIndex = filteredImages.indexOf(this);

        openLightbox();
    });
});

// =======================
// Lightbox Functions
// =======================

function openLightbox() {
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src =
        filteredImages[currentIndex].src;
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function changeSlide(step) {

    currentIndex += step;

    if (currentIndex < 0) {
        currentIndex = filteredImages.length - 1;
    }

    if (currentIndex >= filteredImages.length) {
        currentIndex = 0;
    }

    document.getElementById("lightbox-img").src =
        filteredImages[currentIndex].src;
}

// =======================
// Filter Buttons
// =======================

const buttons = document.querySelectorAll(".buttons button");

buttons.forEach(button => {

    button.addEventListener("click", function () {

        const category = this.dataset.filter;

        const images = document.querySelectorAll(".gallery .image");

        images.forEach(image => {

            if (category === "all" || image.classList.contains(category)) {
                image.style.display = "block";
            } else {
                image.style.display = "none";
            }

        });

        // Active Button
        buttons.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");

    });

});

// =======================
// Close Lightbox
// =======================

window.addEventListener("click", function (e) {

    const lightbox = document.getElementById("lightbox");

    if (e.target === lightbox) {
        closeLightbox();
    }

});
