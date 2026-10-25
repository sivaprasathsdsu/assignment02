document.addEventListener("DOMContentLoaded", () => {
    // Footer year
    document.getElementById("year").textContent = new Date().getFullYear();

    // Mobile menu toggle
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".site-nav");

    toggle.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("open");
        toggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close the mobile menu when a link is clicked
    nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            nav.classList.remove("open");
            toggle.setAttribute("aria-expanded", "false");
        });
    });

    // Contact form (front-end only; connect to a backend or service to receive messages)
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if (!name || !email || !message) {
            status.textContent = "Please fill in all fields.";
            status.className = "error";
            return;
        }

        // Demo behaviour: show a confirmation. Replace with a real request (fetch to a backend) when ready.
        status.textContent = `Thanks, ${name}! Your message has been noted.`;
        status.className = "success";
        form.reset();
    });
});
