function toggleMenu() {
    const menu = document.getElementById('menu');
    const overlay = document.getElementById('overlay');
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
}

function toggleSubMenu(submenuId, element) {
    const submenu = document.getElementById(submenuId);
    const icon = element.querySelector('i');

    if (submenu.style.display === 'block') {
        submenu.style.display = 'none';
        icon.classList.remove('fa-minus');
        icon.classList.add('fa-plus');
    } else {
        submenu.style.display = 'block';
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-minus');
    }
}



document.addEventListener("DOMContentLoaded", function() {
    let dropdown = document.querySelector(".dropdown");
    let menu = document.querySelector(".dropdown-menu");
    let timeout; // Variable to store the timeout function

    dropdown.addEventListener("click", function(event) {
        event.stopPropagation(); // Prevents immediate closing
        menu.style.display = menu.style.display === "block" ? "none" : "block";

        // Reset auto-close timer
        resetAutoClose();
    });

    menu.addEventListener("mouseenter", function() {
        clearTimeout(timeout); // Cancel auto-close when hovering over menu
    });

    menu.addEventListener("mouseleave", function() {
        resetAutoClose(); // Restart auto-close when leaving the menu
    });

    function resetAutoClose() {
        clearTimeout(timeout); // Clear any existing timeout
        timeout = setTimeout(() => {
            menu.style.display = "none"; // Close the menu after 5 seconds of inactivity
        }, 5000); // 5000ms = 5 seconds
    }
});




document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector(".case-studies-carousel");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    // Exit if mobile: let CSS handle it (smooth swipe)
    if (window.innerWidth <= 480) {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
        return;
    }

    let items = document.querySelectorAll(".case-item");
    let currentIndex = 0;
    let cardWidth = items[0].offsetWidth;
    const visibleCards = 3;
    let totalCards = items.length;
    let autoSlide;

    function updateCardWidth() {
        cardWidth = items[0].offsetWidth;
    }

    function cloneCards() {
        // Remove existing clones
        document.querySelectorAll(".case-item.clone").forEach(clone => clone.remove());
        for (let i = 0; i < visibleCards; i++) {
            const clone = items[i].cloneNode(true);
            clone.classList.add("clone");
            wrapper.appendChild(clone);
        }
    }

    function slideTo(index) {
        wrapper.style.transition = 'transform 0.5s ease-in-out';
        wrapper.style.transform = `translateX(-${index * cardWidth}px)`;
    }

    function nextSlide() {
        currentIndex++;
        slideTo(currentIndex);

        if (currentIndex >= totalCards) {
            setTimeout(() => {
                wrapper.style.transition = 'none';
                currentIndex = 0;
                slideTo(currentIndex);
            }, 500);
        }
    }

    function prevSlide() {
        if (currentIndex <= 0) {
            wrapper.style.transition = 'none';
            currentIndex = totalCards;
            slideTo(currentIndex);
            setTimeout(() => {
                wrapper.style.transition = 'transform 0.5s ease-in-out';
                currentIndex--;
                slideTo(currentIndex);
            }, 20);
        } else {
            currentIndex--;
            slideTo(currentIndex);
        }
    }

    function startAutoSlide() {
        autoSlide = setInterval(nextSlide, 3000);
    }

    function resetAutoSlide() {
        clearInterval(autoSlide);
        startAutoSlide();
    }

    function setupCarousel() {
        currentIndex = 0;
        items = document.querySelectorAll(".case-item:not(.clone)");
        totalCards = items.length;
        updateCardWidth();
        cloneCards();
        slideTo(currentIndex);
    }

    // Initialize
    setupCarousel();
    startAutoSlide();

    // Events
    nextBtn.addEventListener("click", () => {
        nextSlide();
        resetAutoSlide();
    });

    prevBtn.addEventListener("click", () => {
        prevSlide();
        resetAutoSlide();
    });

    window.addEventListener("resize", () => {
        wrapper.style.transition = 'none';
        if (window.innerWidth <= 480) {
            location.reload(); // Quick way to fallback to swipe mode
        } else {
            setupCarousel();
        }
    });
});
