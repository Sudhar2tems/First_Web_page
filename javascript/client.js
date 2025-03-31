function toggleMenu() {
    const menu = document.getElementById("menu");
    const overlay = document.getElementById("overlay");
    
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
}

function toggleSubMenu(submenuId, element) {
    const submenu = document.getElementById(submenuId);
    
    if (submenu.style.display === "block") {
        submenu.style.display = "none";
        element.querySelector("i").classList.replace("fa-minus", "fa-plus");
    } else {
        submenu.style.display = "block";
        element.querySelector("i").classList.replace("fa-plus", "fa-minus");
    }
}

// Close menu when clicking outside
document.addEventListener("click", function (event) {
    const menu = document.getElementById("menu");
    const menuIcon = document.querySelector(".menu-icon");
    const overlay = document.getElementById("overlay");
    
    if (!menu.contains(event.target) && !menuIcon.contains(event.target) && menu.classList.contains("active")) {
        toggleMenu();
    }
});

(function () {
    const altTrack = document.querySelector('.testimonial-section-alt .carousel-track');
    const altCards = document.querySelectorAll('.testimonial-section-alt .testimonial-card-alt');
    let altIndex = 0;
    const altTotal = altCards.length;
  
    setInterval(() => {
      altIndex = (altIndex + 1) % altTotal;
      altTrack.style.transition = 'transform 0.5s ease-in-out';
      altTrack.style.transform = `translateX(-${altIndex * 600}px)`; // Adjust width if needed
    }, 5000);
  })();
  


  const track = document.querySelector('.testimonial-container');
  const cards = document.querySelectorAll('.testimonial-card');
  
  // Detect screen size
  const isMobile = window.innerWidth <= 480;
  const visibleCards = isMobile ? 1 : 2;
  const cardWidth = cards[0].offsetWidth;
  const total = cards.length;
  let index = 0;
  
  // Clone first N cards for looping
  for (let i = 0; i < visibleCards; i++) {
    track.appendChild(cards[i].cloneNode(true));
  }
  
  setInterval(() => {
    index++;
    track.style.transition = 'transform 0.5s ease-in-out';
    track.style.transform = `translateX(-${index * cardWidth}px)`;
  
    if (index >= total) {
      setTimeout(() => {
        track.style.transition = 'none';
        track.style.transform = 'translateX(0)';
        index = 0;
      }, 500);
    }
  }, 5000);
  