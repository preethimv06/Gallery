// All gallery images
const galleryImages = document.querySelectorAll(".gallery .image img");

let filteredImages = [];
let currentIndex = 0;

// Attach click event to every image
galleryImages.forEach(img => {
    img.addEventListener("click", function () {

        // Get only currently visible images
        filteredImages = Array.from(document.querySelectorAll(".gallery .image"))
            .filter(div => window.getComputedStyle(div).display !== "none")
            .map(div => div.querySelector("img"));

        currentIndex = filteredImages.indexOf(this);

        openLightbox();
    });
});

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

    if (currentIndex < 0)
        currentIndex = filteredImages.length - 1;

    if (currentIndex >= filteredImages.length)
        currentIndex = 0;

    document.getElementById("lightbox-img").src =
        filteredImages[currentIndex].src;

}

function filterSelection(category) {

    const allImages = document.querySelectorAll(".gallery .image");

    allImages.forEach(image => {

        if (category === "all") {

            image.style.display = "block";

        } else {

            if (image.classList.contains(category)) {

                image.style.display = "block";

            } else {

                image.style.display = "none";

            }

        }

    });

 // Active button
    document.querySelectorAll(".buttons button").forEach(btn => {
        btn.classList.remove("active");
    });

  // Add active class to clicked button
    button.classList.add("active");
}

window.onclick = function (e) {

    const lightbox = document.getElementById("lightbox");

    if (e.target === lightbox) {

        closeLightbox();

    }

};
