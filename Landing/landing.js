
// To do light mode toggle

function toggleAccordion(id) {
    const content = document.getElementById(`content-${id}`);
    const icon = document.getElementById(`icon-${id}`);
    
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        icon.innerHTML = '-';
    } else {
        content.classList.add('hidden');
        icon.innerHTML = '+';
    }
}

let nav = document.querySelector("nav");
let loginButtons = nav.querySelectorAll("button");

loginButtons.forEach((button) => {
    button.addEventListener('click', function() {
        // Check if the clicked button is the login button
        if (this.textContent.trim() === 'Login/Signup') {
            window.location.href = 'http://127.0.0.1:3000/Login/login.html';
            console.log('Login button clicked!');
        }
    });
});
