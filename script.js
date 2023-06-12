let toggle = document.querySelector(".toggle")
let body = document.querySelector("body")
 
toggle.addEventListener('click',function(){
    body.classList.toggle('open')
})


var roue = document.getElementById('roue');
var listePhotos = document.getElementById('liste-roues');
roue.addEventListener('click', function() {
    if (listePhotos.style.display === 'none') {
      listePhotos.style.display = 'block';
    } else {
      listePhotos.style.display = 'none';
    }
  });

var siege = document.getElementById('siege');
var listeBild = document.getElementById('liste-sieges');
siege.addEventListener("click", function() {
    if (listeBild.style.display === 'none') {
        listeBild.style.display = 'block';
      } else {
        listeBild.style.display = 'none';
      }});

var parechoc = document.getElementById('parechoc');
var listeBilder = document.getElementById('liste-parechocs');
parechoc.addEventListener("click", function() {
    if (listeBilder.style.display === 'none') {
        listeBilder.style.display = 'block';
      } else {
        listeBilder.style.display = 'none';
      }});

        var photos = document.querySelectorAll('.photo');
        for (var i = 0; i < photos.length; i++) {
          photos[i].addEventListener('click', function(event) {
            event.stopPropagation();
            var selectedPhoto = document.querySelector('.selected');
            if (selectedPhoto) {
              selectedPhoto.classList.remove('selected');
            }
            event.target.classList.add('selected');
            var photoSrc = event.target.src;
        
            // Vérifier si la photo a déjà été ajoutée
            var isPhotoAdded = selectedPhotos.includes(photoSrc);
            if (!isPhotoAdded) {
              selectedPhotos.push(photoSrc);
        
              // Ajouter la photo dans le box1
              var imgElement = document.createElement('img');
              imgElement.src = photoSrc;
              imgElement.alt = 'Selected Photo ' + (selectedPhotos.length);
              selectedPhoto.appendChild(imgElement);
            }
          });
        }

        var selectedPhotos = [];

        var selectedPhoto = document.getElementById('selectedPhoto');
        selectedPhoto.addEventListener('click', function() {
          // Réinitialiser les photos affichées dans le box1
          selectedPhoto.innerHTML = '';
        
          // Réafficher toutes les photos sélectionnées
          for (var i = 0; i < selectedPhotos.length; i++) {
            var imgElement = document.createElement('img');
            imgElement.src = selectedPhotos[i];
            imgElement.alt = 'Selected Photo ' + (i + 1);
            selectedPhoto.appendChild(imgElement);
          }
        });
        
        function cancelSelection() {
          selectedPhotos = []; // Réinitialiser les photos sélectionnées
          selectedPhoto.innerHTML = ''; // Effacer les photos affichées dans le box1
        }        

        /*var warenkorbLink = document.getElementById('warenkorbLink');
warenkorbLink.addEventListener('click', function(event) {
  event.preventDefault(); // Empêcher le comportement par défaut du lien

  // Envoyer les photos sélectionnées à la page "warenkorb"
  var photoUrls = selectedPhotos.map(function(photo) {
    return encodeURIComponent(photo);
  });
  var url = 'warenkorb.html?photos=' + photoUrls.join(',');
  window.location.href = url;
});*/