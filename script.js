
/* =====================================
   ZEKI PORTFOLIO - JAVASCRIPT
===================================== */

/* MOBILE NAVIGATION */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("open");

    const icon = menuToggle.querySelector("i");

    if (navMenu.classList.contains("open")) {
        icon.classList.replace("fa-bars", "fa-xmark");
        menuToggle.setAttribute("aria-label", "Close menu");
    } else {
        icon.classList.replace("fa-xmark", "fa-bars");
        menuToggle.setAttribute("aria-label", "Open menu");
    }
});


/* CLOSE MOBILE MENU AFTER CLICKING */

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

        const icon = menuToggle.querySelector("i");

        icon.classList.replace("fa-xmark", "fa-bars");

        menuToggle.setAttribute("aria-label", "Open menu");
    });

});


/* AUTOMATIC COPYRIGHT YEAR */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* SCROLL REVEAL ANIMATION */

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});

revealElements.forEach(element => {
    observer.observe(element);
});


/* ACTIVE NAVIGATION LINK */

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});


/* BACK TO TOP BUTTON */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* CONTACT FORM */

document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // CHANGE THIS TO YOUR REAL EMAIL ADDRESS
    const yourEmail = "your-email@example.com";

    if (!name || !email || !subject || !message) {

        alert("Please complete all fields.");

        return;
    }

    const emailBody =
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message;

    const mailto =
        "mailto:" + yourEmail +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(emailBody);

    window.location.href = mailto;

});
