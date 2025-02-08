// Modal 1: Cart Modal
function openModal() {
    document.getElementById("cartModal").style.display = "flex";
    document.body.style.overflow = "hidden"; // Disable scrolling
}

function closeModal() {
    document.getElementById("cartModal").style.display = "none";
    document.body.style.overflow = "auto"; // Re-enable scrolling
}

// Modal 2: Request Dish Modal
document.addEventListener("DOMContentLoaded", function () {
    const requestdishbtn = document.getElementById("requestdishbtn");
    const modal2 = document.getElementById("requestDishModal2");
    const cancelBtn = document.getElementById("cancelBtn");
    const submitBtn = document.getElementById("submitBtn");

    function openModal2() {
        // Scroll to the top before opening the modal
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

        setTimeout(() => {
            modal2.style.display = "flex"; // Show modal
            document.body.style.overflow = "hidden"; // Prevent scrolling
        }, 100); // Small delay to ensure scrolling completes before opening modal
    }

    function closeModal2() {
        modal2.style.display = "none";
        document.body.style.overflow = "auto";// Allow scrolling again
    }

    // Open Modal 2
    requestdishbtn.addEventListener("click", openModal2);

    // Close Modal 2 Events
    cancelBtn.addEventListener("click", closeModal2);
    submitBtn.addEventListener("click", closeModal2);
    modal2.addEventListener("click", function (event) {
        if (event.target === modal2) {
            closeModal2();
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let scrollContainer = document.querySelector(".carousel");
    let backbtn = document.getElementById("backbtn");
    let nextbtn = document.getElementById("nextbtn");

    if (!scrollContainer || !backbtn || !nextbtn) {
        console.error("Error: One or more elements are missing.");
        return;
    }

    // Scroll using mouse wheel
    scrollContainer.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
    });

    // Scroll on button clicks
    nextbtn.addEventListener("click", () => {
        console.log("Next clicked"); // Debugging log
        scrollContainer.scrollLeft += 1000; // Adjust value as needed
    });

    backbtn.addEventListener("click", () => {
        console.log("Back clicked"); // Debugging log
        scrollContainer.scrollLeft -= 1000;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("promoVideo");
    if (video) {
        video.load(); // Forces the browser to load the video
        video.style.display = "block"; // Makes sure it's visible
    }
    const playButton = document.getElementById("playPauseBtn");
    const playIcon = document.getElementById("playIcon");

    // Show play button when video is paused
    video.addEventListener("pause", () => {
        playIcon.src = "images/Arrowx.svg"; // Ensure this is the correct path
        playButton.style.display = "block";
    });

    // Hide play button when video plays
    video.addEventListener("play", () => {
        playButton.style.display = "none";
    });

    // Toggle play/pause when clicking the video
    video.addEventListener("click", () => {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }

    });
    video.play().catch(error => {
        console.log("Autoplay blocked! User interaction required.");
    });

    // Allow clicking the play button to play
    playButton.addEventListener("click", () => {
        video.play();
    });
});




