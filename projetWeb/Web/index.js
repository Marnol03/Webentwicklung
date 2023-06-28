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

// // Sélectionner les éléments nécessaires
// var loginButton = document.getElementById('but');
// var startButton = document.getElementById('startBtn');

// // Ajouter un gestionnaire d'événement au clic sur le bouton "Login"
// loginButton.addEventListener('click', function() {
//     // Vérifier si le bouton "Start" est déjà affiché
//     if (startButton.style.display === 'none') {
//         // Afficher le bouton "Start"
//         startButton.style.display = 'block';
//     }
// });

// Sélectionner le bouton "Login"
var loginButton = document.getElementById('but');

// Sélectionner le bouton "Start"
var startButton = document.getElementById('startBtn');

// Sélectionner le div avec la classe "bout"
var boutDiv = document.querySelector('.bout');

// Ajouter un gestionnaire d'événement au clic sur le bouton "Login"
loginButton.addEventListener('click', function(event) {
  event.preventDefault(); // Empêcher le comportement par défaut du formulaire

  boutDiv.style.display = 'grid'; // Afficher le div avec la classe "bout"
});