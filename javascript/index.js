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
    const items = document.querySelectorAll(".case-item");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let currentIndex = 0;
    const visibleCards = 3;
    const totalCards = items.length;

    // Clone first few cards for infinite loop effect
    for (let i = 0; i < visibleCards; i++) {
        wrapper.appendChild(items[i].cloneNode(true));
    }

    const cardWidth = items[0].offsetWidth;
    let autoSlide;

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

    // Event listeners
    nextBtn.addEventListener("click", () => {
        nextSlide();
        resetAutoSlide();
    });

    prevBtn.addEventListener("click", () => {
        prevSlide();
        resetAutoSlide();
    });

    // Auto Slide
    function startAutoSlide() {
        autoSlide = setInterval(nextSlide, 3000);
    }

    function resetAutoSlide() {
        clearInterval(autoSlide);
        startAutoSlide();
    }

    startAutoSlide();

    // Recalculate on window resize
    window.addEventListener("resize", () => {
        wrapper.style.transition = 'none';
        slideTo(currentIndex);
    });
});

