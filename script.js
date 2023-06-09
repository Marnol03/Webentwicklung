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
            selectedPhotos.push(event.target.src);

          });
        }

        var selectedPhotos = [];

        /*var photos = document.querySelectorAll('.photo');
        for (var i = 0; i < photos.length; i++) {
          photos[i].addEventListener('click', function(event) {
            event.stopPropagation();
            var selectedPhoto = document.querySelector('.selected');
            if (selectedPhoto) {
              selectedPhoto.classList.remove('selected');
            }
            event.target.classList.add('selected');
        
            // Sauvegarder la photo sélectionnée
            selectedPhotos.push(event.target.src);
          });
        }*/
        
        var selectedPhoto = document.getElementById('selectedPhoto');
        selectedPhoto.addEventListener('click', function() {
          // Afficher les photos sélectionnées dans le box1
          for (var i = 0; i < selectedPhotos.length; i++) {
            var imgElement = document.createElement('img');
            imgElement.src = selectedPhotos[i];
            //imgElement.alt = 'Selected Photo ' + (i + 1);
            imgElement.alt = 'Selected Photo ' + i;
            selectedPhoto.appendChild(imgElement);
          }
        });
        
        /*function cancelSelection() {
          selectedPhotos = []; // Réinitialiser les photos sélectionnées
          selectedPhoto.innerHTML = ''; // Effacer les photos affichées dans le box1
        }*/