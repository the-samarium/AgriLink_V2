const form = document.getElementById('loginForm');
const btn = document.getElementById('sign_up')
let right =document.getElementById('right')
let left =document.getElementById('left')
        
form.addEventListener('submit', (event) => {
    // event.preventDefault(); // Prevent form from submitting
    window.open("https://www.youtube.com",'_blank')
});

btn.addEventListener('click',()=>{
    right.style.transform = 'translateX(100%)';
    right.style.transition= 'transform 500ms ease-in-out'
    left.style.transform = 'translateX(-110%)';
    left.style.transition= 'transform 500ms ease-in-out'
    setTimeout(() => {
         document.querySelector("h1").innerText="Sign Up"
         document.querySelector("#right p").innerText="Have and account?"
         document.querySelector("#right button").innerText="Login"
         document.querySelector("form button").innerText="Sign Up"
         document.querySelector("form button").style.background="green"
    }, 300);
})