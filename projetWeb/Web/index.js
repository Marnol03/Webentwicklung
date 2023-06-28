let toggle = document.querySelector(".toggle")
let body = document.querySelector("body")
 
toggle.addEventListener('click',function()
  {
    body.classList.toggle('open')
  }
)

var signUpLink = document.getElementById('wepp');
var loginLink = document.getElementById('wipp');
var loginForm = document.querySelector('.sec2 .wrapper:first-child');
var signUpForm = document.getElementById('wapp');

signUpLink.addEventListener('click', function(event) {
    event.preventDefault();
    loginForm.style.display = 'none'; // Login verstecken
    signUpForm.style.display = 'grid'; // Sign Up zeigen
});

loginLink.addEventListener('click', function(event) {
    event.preventDefault();
    signUpForm.style.display = 'none'; // Sign Up verstecken
    loginForm.style.display = 'grid'; // Login zeigen
});

loginLink.addEventListener('click', function(event) {
    event.preventDefault();
    signUpForm.style.display = 'none'; // Sign Up verstecken
    loginForm.style.display = 'grid'; // Login zeigen
});