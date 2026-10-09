/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){

    menuBtn.addEventListener("click", function(){

        navLinks.classList.toggle("show-menu");

    });

}


/* =========================
   CLOSE MOBILE MENU
========================= */

document.querySelectorAll(".nav-links a").forEach(function(link){

    link.addEventListener("click", function(){

        navLinks.classList.remove("show-menu");

    });

});


/* =========================
   PROJECT FILTER
========================= */

const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project-card");

filters.forEach(function(filter){

    filter.addEventListener("click", function(){

        filters.forEach(function(item){
            item.classList.remove("active");
        });

        filter.classList.add("active");

        const selected = filter.getAttribute("data-filter");

        projects.forEach(function(project){

            const category = project.getAttribute("data-category");

            if(selected === "all" || category === selected){

                project.style.display = "block";

            }else{

                project.style.display = "none";

            }

        });

    });

});


/* =========================
   CONTACT FORM
========================= */

const contactForm = document.getElementById("contactForm");

if(contactForm){

    contactForm.addEventListener("submit", function(event){

        event.preventDefault();

        alert("Thanks! Your message has been received.");

        contactForm.reset();

    });

}


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
    ".section-heading, .about-grid, .skill-card, .project-card, .service-card, .journey-grid, .trust-card, .contact-grid"
);

const observer = new IntersectionObserver(function(entries){

    entries.forEach(function(entry){

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.1
});


revealElements.forEach(function(element){

    element.classList.add("reveal");

    observer.observe(element);

});