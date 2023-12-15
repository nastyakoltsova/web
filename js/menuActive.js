document.addEventListener("DOMContentLoaded", function() {
    let currentLocation = document.location.href;

    let menuLinks = document.querySelectorAll(".navbar a");

    menuLinks.forEach(function(link) {
        if (link.href === currentLocation) {
            link.classList.add("active");
        }
    });
});
