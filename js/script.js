document.addEventListener('DOMContentLoaded', function() {
    const nameSpan = document.getElementById('name');
    const userName = prompt('Please enter your name:');
    nameSpan.textContent = userName;

    const form = document.getElementById('messageForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        if (name && email && phone && message) {
            alert('Form submitted successfully!');
        } else {
            alert('Please fill out all fields.');
        }
    });
});