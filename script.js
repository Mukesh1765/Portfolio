function toggleCategory(header) {
    const category = header.parentElement;
    category.classList.toggle("collapsed");
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add("active");
        document.body.style.overflow = "hidden"; // Prevent background scrolling
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove("active");
        document.body.style.overflow = ""; // Restore scrolling
    }
}

// Close modal on ESC key
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        const activeModal = document.querySelector(".modal-overlay.active");
        if (activeModal) {
            activeModal.classList.remove("active");
            document.body.style.overflow = "";
        }
    }
});

const scrollToTopBtn = document.getElementById("scrollToTop");

// Show button when user scrolls down 300px
window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add("visible");
    } else {
        scrollToTopBtn.classList.remove("visible");
    }
});

// Smooth scroll to top when button is clicked
scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    });
});
