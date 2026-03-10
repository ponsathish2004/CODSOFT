// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "rgba(10, 10, 10, 0.98)";
    } else {
        navbar.style.backgroundColor = "rgba(10ուցիչ, 10, 10, 0.95)";
    }

});