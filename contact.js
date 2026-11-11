
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("message").value.trim();

    if (name === "") {
        event.preventDefault();
        alert("Please enter your name.");
        return;
    }

    if (email === "") {
        event.preventDefault();
        alert("Please enter your email.");
        return;
    }

    if (message === "") {
        event.preventDefault();
        alert("Please enter your message.");
        return;
    }

    event.preventDefault();

    alert("Your contact form is valid!");
});
