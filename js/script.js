document.addEventListener("DOMContentLoaded", function() {
    // function
    function submitForm() {
        const name = document.getElementById('name').value;
        const dob = document.getElementById('dob').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const message = document.getElementById('message').value;
        const currentTime = new Date().toLocaleString();
        
        document.getElementById('currentTime').innerText = `Current time: ${currentTime}`;
        document.getElementById('responseText').innerText = 
            `Nama: ${name}\nTanggal Lahir: ${dob}\nJenis Kelamin: ${gender}\nPesan: ${message}`;
    }
    
    // expose
    window.submitForm = submitForm;
});