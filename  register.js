
const form = document.getElementById("registerForm");

form.addEventListener("submit", function(event) {

    const name = document.getElementById("name").value.trim();

    const password = document.getElementById("password").value;

    const semester = Number(
        document.getElementById("semester").value
    );

    const agree = document.getElementById("agree").checked;

    if (name.length < 3) {
        event.preventDefault();
        alert("Name must contain at least 3 characters.");
        return;
    }

    if (password.length < 8) {
        event.preventDefault();
        alert("Password must contain at least 8 characters.");
        return;
    }

    if (semester < 1 || semester > 8) {
        event.preventDefault();
        alert("Semester must be between 1 and 8.");
        return;
    }

    if (!agree) {
        event.preventDefault();
        alert("Please agree to the society rules.");
        return;
    }

    event.preventDefault();
    alert("Registration form validated successfully!");
});
