let currentIndex = 0;
const images = document.querySelectorAll(".slider-images img");
const totalImages = images.length;

function moveSlide(direction) {
  // Add the 'flip' class to the current image to animate the flip effect
  images[currentIndex].classList.add("flip");

  // Calculate the new index
  currentIndex = (currentIndex + direction + totalImages) % totalImages;

  // Wait for the flip animation to finish before moving the slider
  setTimeout(() => {
    // Remove the 'flip' class after the animation to reset the image
    images.forEach((img) => img.classList.remove("flip"));

    // Move the slider to the new position
    const slider = document.querySelector(".slider");
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }, 0); // Matches the duration of the flip animation (1 second)
}
