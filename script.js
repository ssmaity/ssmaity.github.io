// 1. Filter Function for Blog Chips
function filterSelection(category) {
    var x, i;
    x = document.getElementsByClassName("blog-card");

    // Get all buttons and remove "active" class
    var btns = document.getElementsByClassName("chip");
    for (var b = 0; b < btns.length; b++) {
        btns[b].classList.remove("active");

        // Add active class to the button that was clicked
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
    // 2. Auto-Update Year in Footer
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.innerText = new Date().getFullYear();
    }
});