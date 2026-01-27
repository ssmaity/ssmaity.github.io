// 1. Auto-Update Year in Footer
// This finds the element with id="year" and sets the current year
document.addEventListener("DOMContentLoaded", function() {
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.innerText = new Date().getFullYear();
    }
});

// 2. Filter Function for Blog Chips
function filterSelection(category) {
    var x, i;
    x = document.getElementsByClassName("blog-card");

    // Get all buttons and remove "active" class
    var btns = document.getElementsByClassName("chip");
    for (var b = 0; b < btns.length; b++) {
        btns[b].classList.remove("active");

        // Add active class to the button that was clicked
        // We match the text content to the category
        if(btns[b].innerText.toLowerCase().replace(' ', '-') === category ||
           (category === 'all' && btns[b].innerText === 'All')) {
            btns[b].classList.add("active");
        }
    }

    // Loop through all cards to hide or show them
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove("hide");

        if (category !== "all") {
            if (x[i].getAttribute("data-category") !== category) {
                x[i].classList.add("hide");
            }
        }
    }
}


document.addEventListener("DOMContentLoaded", function() {
    // 1. Existing Date Code
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.innerText = new Date().getFullYear();
    }

    // 2. Theme Toggle Logic
    const toggleButton = document.getElementById('theme-toggle');

    // Check for saved user preference, if any, on load
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.body.classList.add(currentTheme);
    }

    if (toggleButton) {
        toggleButton.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');

            // Save preference to Local Storage
            let theme = 'light';
            if (document.body.classList.contains('dark-mode')) {
                theme = 'dark';
            }
            localStorage.setItem('theme', theme);
        });
    }
});
