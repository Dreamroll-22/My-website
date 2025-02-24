const carousel = document.querySelector('.carousel');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
let interval;

// Function to update the carousel position
function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
}

// Function to update active dot
function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === currentIndex) {
            dot.classList.add('active');
        }
    });
}

// Event listener for manual scrolling (clicking on dots)
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
        resetInterval();
    });
});

// Autoscroll function
function startAutoScroll() {
    interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % dots.length; // Loop back to first card
        updateCarousel();
    }, 3000); // Adjust time interval as needed
}

// Reset autoscroll when user interacts
function resetInterval() {
    clearInterval(interval);
    startAutoScroll();
}

// Initialize
updateCarousel();
startAutoScroll();