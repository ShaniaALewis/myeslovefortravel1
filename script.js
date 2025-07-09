document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirmPassword").value;
    const message = document.getElementById("formMessage");

    if (password !== confirm) {
        message.textContext = "Passwords do not match.";
    } else {
        message.style.color = "green";
        message.textContent = "Form submitted successfully!";
        this.reset();
    }
});