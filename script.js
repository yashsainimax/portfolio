// ==============================
// Welcome Button
// ==============================

function showmessage() {
    alert("Welcome Yash! Thanks for visiting my website.");
}

// ==============================
// Hero Typing Effect
// ==============================

const typing = document.getElementById("typing");

const words = [
    "Future Full Stack Web Developer",
    "Frontend Developer",
    "JavaScript Learner",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typing) return;

    const currentWord = words[wordIndex];

    if (!deleting) {
        typing.textContent = currentWord.substring(0, charIndex++);
    } else {
        typing.textContent = currentWord.substring(0, charIndex--);
    }

    let speed = deleting ? 60 : 120;

    if (!deleting && charIndex > currentWord.length) {
        deleting = true;
        speed = 1500;
    }

    if (deleting && charIndex < 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        charIndex = 0;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

// ==============================
// Projects
// ==============================

function portfolioProject() {
    alert("This is my Portfolio Website built using HTML, CSS and JavaScript.");
}

function calculatorProject() {
    alert("Calculator Project Coming Soon!");
}

// ==============================
// Contact Form
// ==============================

function validateForm() {

    const name = document.querySelector('input[type="text"]');
    const email = document.querySelector('input[type="email"]');

    if (!name.value || !email.value) {
        alert("Please fill all required fields.");
        return false;
    }

    alert("Form Submitted Successfully!");
    return true;
}

// ==============================
// Dark Mode
// ==============================

function darkMode() {
    document.body.classList.toggle("dark");
}

// ==============================
// Scroll To Top Button
// ==============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// ==============================
// Scroll Reveal Animation
// ==============================

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    reveals.forEach(section => {

        const revealTop = section.getBoundingClientRect().top;
        const revealPoint = 120;

        if (revealTop < window.innerHeight - revealPoint) {
            section.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealSections);
revealSections();
// ==============================
// Active Navbar
// ==============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});