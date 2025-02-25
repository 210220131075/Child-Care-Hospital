document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Simple form validation
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
    } else {
        alert('Thank you for your message, ' + name + '. We will get back to you shortly.');
        // Here you can add code to send the form data to a server
        document.getElementById('contact-form').reset();
    }
});
