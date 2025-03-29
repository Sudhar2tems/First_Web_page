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



document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        }
      }
    });
  });
  


  const track = document.querySelector('.testimonial-container');
  const cards = document.querySelectorAll('.testimonial-card');
  const visibleCards = 2; // because your layout shows 2 at a time
  const cardWidth = cards[0].offsetWidth + 20; // 20 is your CSS gap
  const total = cards.length;
  let index = 0;

  // Clone first 2 cards and append to end for smooth looping
  for (let i = 0; i < visibleCards; i++) {
    track.appendChild(cards[i].cloneNode(true));
  }

  setInterval(() => {
    index++;
    track.style.transition = 'transform 0.5s ease-in-out';
    track.style.transform = `translateX(-${index * cardWidth}px)`;

    // Reset when reaching the end (after last real slide)
    if (index >= total) {
      setTimeout(() => {
        track.style.transition = 'none';
        track.style.transform = 'translateX(0)';
        index = 0;
      }, 500); // match the transition duration
    }
  }, 5000);
