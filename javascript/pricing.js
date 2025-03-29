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



document.addEventListener("DOMContentLoaded", function () {
    let dropdown = document.querySelector(".dropdown");
    let menu = document.querySelector(".dropdown-menu");
    let timeout; // Variable to store the timeout function

    dropdown.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevents immediate closing
        menu.style.display = menu.style.display === "block" ? "none" : "block";

        // Reset auto-close timer
        resetAutoClose();
    });

    menu.addEventListener("mouseenter", function () {
        clearTimeout(timeout); // Cancel auto-close when hovering over menu
    });

    menu.addEventListener("mouseleave", function () {
        resetAutoClose(); // Restart auto-close when leaving the menu
    });

    function resetAutoClose() {
        clearTimeout(timeout); // Clear any existing timeout
        timeout = setTimeout(() => {
            menu.style.display = "none"; // Close the menu after 5 seconds of inactivity
        }, 5000); // 5000ms = 5 seconds
    }
});


