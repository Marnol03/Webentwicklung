let toggle = document.querySelector(".toggle")
let body = document.querySelector("body")
 
toggle.addEventListener('click',function(){
    body.classList.toggle('open')
})

document.addEventListener('DOMContentLoaded', function() {
    var urlParams = new URLSearchParams(window.location.search);
    var selectedImage = urlParams.get('selectedImage');
    var selectedImageIndex = urlParams.get('selectedImageIndex');
  
    if (selectedImage && selectedImageIndex !== null) {
      var autoDiv = document.querySelector('.auto');
      var imageElement = document.createElement('img');
      imageElement.src = selectedImage;
      imageElement.alt = 'Selected Car ' + selectedImageIndex;
      imageElement.className = 'photos';
      autoDiv.appendChild(imageElement);
    }
  });
  
  document.querySelector('#choix-paiement form').addEventListener('submit', function(event) {
    event.preventDefault();
    var moyenPaiementSelectionne = document.querySelector('#choix-paiement input[name="moyen-paiement"]:checked').value;
    alert("Moyen de paiement sélectionné : " + moyenPaiementSelectionne);
  });