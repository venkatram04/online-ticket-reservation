// register.js

// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent form submission
    // Get form inputs
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Perform client-side validation (you can customize this)
    if (!username || !email || !password) {
        alert('Please fill in all fields.');
        return;
    }

    // Submit the form
    document.getElementById('registration-form').submit();
}

// Add event listener to the register button
document.getElementById('register-button').addEventListener('click', handleFormSubmission);
