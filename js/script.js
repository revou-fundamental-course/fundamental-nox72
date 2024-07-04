document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('messageForm');
    const currentTime = document.getElementById('currentTime');
    const displayName = document.getElementById('displayName');
    const displayDob = document.getElementById('displayDob');
    const displayGender = document.getElementById('displayGender');
    const displayMessage = document.getElementById('displayMessage');
    
    // Display current time
    const now = new Date();
    currentTime.textContent = now.toString();
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = form.name.value;
        const dob = form.dob.value;
        const gender = form.gender.value;
        const message = form.message.value;
        
        displayName.textContent = name;
        displayDob.textContent = dob;
        displayGender.textContent = gender;
        displayMessage.textContent = message;
    });
});