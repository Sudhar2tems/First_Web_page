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
    const month = 2; // March (0 = January)
    const year = 2025;

    const monthTitle = document.getElementById("month-title");
    const calendarBody = document.getElementById("calendar-body");

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    monthTitle.textContent = `${monthNames[month]} ${year}`;

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Adjust index: Sunday (0) becomes 6, Monday (1) becomes 0, ..., Saturday (6) becomes 5
    const adjustedFirstDay = (firstDayOfMonth + 6) % 7;

    let date = 1;
    calendarBody.innerHTML = ""; // Clear any old rows

    for (let i = 0; i < 6; i++) {
        const row = document.createElement("tr");

        for (let j = 0; j < 7; j++) {
            const cell = document.createElement("td");

            if (i === 0 && j < adjustedFirstDay) {
                cell.innerHTML = "";
            } else if (date > daysInMonth) {
                cell.innerHTML = "";
            } else {
                cell.textContent = date;

                // Optional: highlight today
                const today = new Date();
                if (
                    date === today.getDate() &&
                    year === today.getFullYear() &&
                    month === today.getMonth()
                ) {
                    cell.classList.add("active");
                }

                date++;
            }

            row.appendChild(cell);
        }

        calendarBody.appendChild(row);
        if (date > daysInMonth) break;
    }
});
