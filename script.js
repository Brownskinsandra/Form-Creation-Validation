document.addEventListener("DOMContentLoaded", () => {
    // Form Selection
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    // Form Submission Event
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission

        // Input Retrieval and Trimming
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Validate inputs
        const { isValid, messages } = validateInputs(username, email, password);

        // Display feedback
        displayFeedback(isValid, messages);
    });

    /**
     * Validates the user inputs.
     * @param {string} username - The username input.
     * @param {string} email - The email input.
     * @param {string} password - The password input.
     * @returns {Object} An object containing isValid (boolean) and messages (array of strings).
     */
    function validateInputs(username, email, password) {
        let isValid = true;
        const messages = [];

        // Username Validation
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Email Validation
        if (!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("Please enter a valid email address.");
        }

        // Password Validation
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        return { isValid, messages };
    }

    /**
     * Displays feedback to the user.
     * @param {boolean} isValid - Whether the input is valid.
     * @param {string[]} messages - Validation messages to display.
     */
    function displayFeedback(isValid, messages) {
        feedbackDiv.style.display = "block";

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // Green color for success
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545"; // Red color for errors
        }
    }
});
