document.addEventListener("DOMContentLoaded", function () {

// Mobile/Hamburger menu

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", function () {
            navLinks.classList.toggle("show");

            // Change menu icon
            const icon = menuBtn.querySelector("i");

            if (icon) {
                if (navLinks.classList.contains("show")) {
                    icon.classList.remove("fa-bars");
                    icon.classList.add("fa-xmark");
                } else {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");
                }
            }
        });

        // Close mobile menu after clicking a link
        const links = navLinks.querySelectorAll("a");

        links.forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("show");

                const icon = menuBtn.querySelector("i");

                if (icon) {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");
                }
            });
        });
    }


    // Typing effect

    const typingElement = document.querySelector(".typing");

    if (typingElement) {

        const words = [
            "Web Developer",
            "Frontend Developer",
            "Java Developer",
            "CSE Student"
        ];

        let wordIndex = 0;
        let characterIndex = 0;
        let deleting = false;

        function typeEffect() {

            const currentWord = words[wordIndex];

            if (!deleting) {
                typingElement.textContent =
                    currentWord.substring(0, characterIndex + 1);

                characterIndex++;

                if (characterIndex === currentWord.length) {
                    deleting = true;

                    setTimeout(typeEffect, 1500);
                    return;
                }

            } else {

                typingElement.textContent =
                    currentWord.substring(0, characterIndex - 1);

                characterIndex--;

                if (characterIndex === 0) {
                    deleting = false;

                    wordIndex++;

                    if (wordIndex === words.length) {
                        wordIndex = 0;
                    }
                }
            }

            const speed = deleting ? 60 : 100;

            setTimeout(typeEffect, speed);
        }

        typeEffect();
    }


//    Header Scrool feature

    const header = document.querySelector(".header");

    function handleHeaderScroll() {

        if (!header) {
            return;
        }

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }

    window.addEventListener("scroll", handleHeaderScroll);

    handleHeaderScroll();


//    Scroll reveal

    const revealElements = document.querySelectorAll(".reveal");

    function revealOnScroll() {

        const windowHeight = window.innerHeight;

        revealElements.forEach(function (element) {

            const elementTop =
                element.getBoundingClientRect().top;

            if (elementTop < windowHeight - 100) {
                element.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);

    revealOnScroll();


//  Skill bar animation

    const skillProgress =
        document.querySelectorAll(".skill-progress");

    let skillsAnimated = false;

    function animateSkills() {

        const skillsSection =
            document.querySelector(".skills");

        if (!skillsSection || skillsAnimated) {
            return;
        }

        const sectionTop =
            skillsSection.getBoundingClientRect().top;

        const windowHeight =
            window.innerHeight;

        if (sectionTop < windowHeight - 100) {

            skillProgress.forEach(function (bar) {

                const percentage =
                    bar.getAttribute("data-progress");

                if (percentage) {
                    bar.style.width = percentage + "%";
                }
            });

            skillsAnimated = true;
        }
    }

    window.addEventListener("scroll", animateSkills);

    animateSkills();


//   Active navigation link

    const sections =
        document.querySelectorAll("section[id]");

    const navigationLinks =
        document.querySelectorAll(".nav-link");

    function updateActiveLink() {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop - 150;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }
        });

        navigationLinks.forEach(function (link) {

            link.classList.remove("active");

            const href =
                link.getAttribute("href");

            if (href === "#" + currentSection) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", updateActiveLink);

    updateActiveLink();

// Contact Form

    const contactForm =
        document.querySelector(".contact-form");

    const formMessage =
        document.querySelector(".form-message");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const nameInput =
                contactForm.querySelector('input[name="name"]');

            const emailInput =
                contactForm.querySelector('input[name="email"]');

            const subjectInput =
                contactForm.querySelector('input[name="subject"]');

            const messageInput =
                contactForm.querySelector("textarea");

            const name =
                nameInput ? nameInput.value.trim() : "";

            const email =
                emailInput ? emailInput.value.trim() : "";

            const subject =
                subjectInput ? subjectInput.value.trim() : "";

            const message =
                messageInput ? messageInput.value.trim() : "";


            // Empty field validation
            if (
                name === "" ||
                email === "" ||
                subject === "" ||
                message === ""
            ) {

                if (formMessage) {
                    formMessage.textContent =
                        "Please fill in all fields.";
                    formMessage.style.color = "#ff6b6b";
                }

                return;
            }


            // Email validation
            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {

                if (formMessage) {
                    formMessage.textContent =
                        "Please enter a valid email address.";
                    formMessage.style.color = "#ff6b6b";
                }

                return;
            }


            // Success message
            if (formMessage) {
                formMessage.textContent =
                    "Message sent successfully!";
                formMessage.style.color = "#00d4ff";
            }

            // Reset form
            contactForm.reset();

        });
    }


//    Back to top

    const backTop =
        document.querySelector(".back-top");

    if (backTop) {

        function showBackTop() {

            if (window.scrollY > 500) {
                backTop.classList.add("show");
            } else {
                backTop.classList.remove("show");
            }
        }

        window.addEventListener("scroll", showBackTop);

        showBackTop();


        backTop.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });
    }


//    For smooth scroll

    const allAnchorLinks =
        document.querySelectorAll('a[href^="#"]');

    allAnchorLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                link.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });


//    Project Card effect

    const projectCards =
        document.querySelectorAll(".project-card");

    projectCards.forEach(function (card) {

        card.addEventListener("mousemove", function (event) {

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                ((y - centerY) / centerY) * -3;

            const rotateY =
                ((x - centerX) / centerX) * 3;

            card.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-10px)`;
        });


        card.addEventListener("mouseleave", function () {

            card.style.transform =
                "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";
        });
    });


//  Console Message

    console.log(
        "Portfolio loaded successfully 🚀"
    );

});

// Skill bar animation

const skillBars = document.querySelectorAll(".skill-progress");

function animateSkillBars() {

    skillBars.forEach(function (bar) {

        const width = bar.getAttribute("data-width");

        if (width) {
            bar.style.width = width;
        }

    });
}

// Run when page loads
animateSkillBars();



// for contact details


const contactForm = document.getElementById("contactForm");

const scriptURL =
    "https://script.google.com/macros/s/AKfycbw3N3TZrTcXGqK0P9PvaU8uGBqPj8HcOYjQ5MJlBsNBIDIVm2oHOql-F8_1Lonn6wfpYw/exec";


if (contactForm) {

    contactForm.addEventListener("submit", async function (e) {

        e.preventDefault();


        // Get form fields
        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const subject =
            document.getElementById("subject").value.trim();

        const message =
            document.getElementById("message").value.trim();

        const formStatus =
            document.getElementById("formStatus");


        // Basic validation
        if (!name || !email || !subject || !message) {

            formStatus.textContent =
                "Please fill in all fields.";

            return;
        }


        // Prepare form data
        const formData = new URLSearchParams();

        formData.append("name", name);
        formData.append("email", email);
        formData.append("subject", subject);
        formData.append("message", message);


        try {

            formStatus.textContent =
                "Sending message...";


            await fetch(scriptURL, {

                method: "POST",

                body: formData,

                mode: "no-cors"

            });


            // Show success message
            formStatus.textContent =
                "Message sent successfully!";


            // Clear form
            contactForm.reset();


        } catch (error) {

            console.error(
                "Contact form error:",
                error
            );


            formStatus.textContent =
                "Something went wrong. Please try again.";

        }

    });

}