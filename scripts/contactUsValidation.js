// Select the form and input elements
const form = document.querySelector('.ContactUs');
const name = document.getElementById('user-name');
const email = document.getElementById('emails');
const member = document.getElementById('member');
const non_member = document.getElementById('non_member');
const comments = document.getElementById('comments');

// Add an event listener for the form submit button
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    
    // Check if all fields are filled in
    if (name.value === '' || email.value === '' || (member.checked === false && non_member.checked === false) || comments.value === '') {
        alert('Please fill in all fields.'); // Display an alert message if any field is empty
    } else {
        alert('Thank you! The society will contact you soon.'); // Display a success message if all fields are filled in
        //form.reset(); // Resets the form
    }
});