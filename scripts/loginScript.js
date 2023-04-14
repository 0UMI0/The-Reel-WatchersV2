// Initialize loggedIn variable to false
var loggedIn = false;


function login() {
    // Retrieve the email and password fields from HTML document
    var emailField = document.getElementById("user-email");
    var passwordField = document.getElementById("password");

    // Check if both the fields are valid
    if (emailField.checkValidity() && passwordField.checkValidity()) {
        // If user is not already logged in, log them in and update loggedIn variable
        if (!loggedIn) {
            alert('You have been logged in');
            loggedIn = true;
        } else {
            // If user is already logged in alert them
            alert('You are already logged in');
        }
        // Return true to show that the login was successful
        return true;
    } else {
        // If fields are not valid, alert user to enter required fields and return false
        alert('Please enter the required fields.');
        return false;
    }
}

// Function for handling the logout process
function logout() {
    // If user is logged in, log them out and update loggedIn variable
    if (loggedIn) {
        alert('You have been logged out');
        loggedIn = false;
    } else {
        // If user is already logged out alert them
        alert('You are already logged out');
    }
}
