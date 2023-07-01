let toggle = document.querySelector(".toggle")
let body = document.querySelector("body")
 
toggle.addEventListener('click',function()
  {
    body.classList.toggle('open')
  }
)


var roue = document.getElementById('roue');
var listePhotos = document.getElementById('liste-roues');
roue.addEventListener('click', function() 
  {
    if (listePhotos.style.display === 'none')
    {
      listePhotos.style.display = 'block';
    } else {
      listePhotos.style.display = 'none';
    }
  }
);

var siege = document.getElementById('siege');
var listeBild = document.getElementById('liste-sieges');
siege.addEventListener("click", function() 
  {
    if (listeBild.style.display === 'none') {
        listeBild.style.display = 'block';
    } 
    else {
        listeBild.style.display = 'none';
    }
  }
);

var parechoc = document.getElementById('parechoc');
var listeBilder = document.getElementById('liste-parechocs');
parechoc.addEventListener("click", function() 
  {
    if (listeBilder.style.display === 'none') 
    {
        listeBilder.style.display = 'block';
    } 
    else {
        listeBilder.style.display = 'none';
    }
  }
);

var index = 0;
var photos = document.querySelectorAll('.photo');
for (var i = 0; i < photos.length; i++) 
{
    photos[i].addEventListener('click', function(event)
    {
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
          
        // Ajouter la voiture correspondante dans selectedCars
        var carIndex = selectedPhotos.length - 1;
        var carElement = document.querySelectorAll('.auto .photos')[carIndex];
        var carSrc = carElement.src;
        selectedCars.push(carSrc);

        // Vérifier si les 3 premières images sont sélectionnées dans chaque liste
        if (selectedPhotos.length === 3) 
        {
        //var index = 0;
          if (selectedPhotos[0] === document.querySelector('#liste-roues .photo:nth-child(1)').src &&
            selectedPhotos[1] === document.querySelector('#liste-sieges .photo:nth-child(1)').src &&
            selectedPhotos[2] === document.querySelector('#liste-parechocs .photo:nth-child(1)').src) {
            index = 0;
          }
          else if (selectedPhotos[0] === document.querySelector('#liste-roues .photo:nth-child(2)').src &&
                  selectedPhotos[1] === document.querySelector('#liste-sieges .photo:nth-child(2)').src &&
                  selectedPhotos[2] === document.querySelector('#liste-parechocs .photo:nth-child(2)').src) {
                  index = 1;
          } else if (selectedPhotos[0] === document.querySelector('#liste-roues .photo:nth-child(3)').src &&
                  selectedPhotos[1] === document.querySelector('#liste-sieges .photo:nth-child(3)').src &&
                  selectedPhotos[2] === document.querySelector('#liste-parechocs .photo:nth-child(3)').src) {
                  index = 2;
          }

          // Réinitialiser les photos sélectionnées
          selectedPhotos = [];
          selectedCars = [];

          // Sélectionner la voiture correspondante et l'ajouter dans le box3
          var selectedCar = document.querySelectorAll('.auto .photos')[index];
          var selectedCarSrc = selectedCar.src;
          selectedCars.push(selectedCarSrc);
          updateBox3(); // Mettre à jour le contenu du box3
        }       
      }
    }
  );
}

var selectedPhotos = [];
var selectedCars = [];

var selectedPhoto = document.getElementById('selectedPhoto');
selectedPhoto.addEventListener('click', function() 
  {
    // Réinitialiser les photos affichées dans le box1
    selectedPhoto.innerHTML = '';
  }
);
        
function cancelSelection() {
    selectedPhotos = []; // Réinitialiser les photos sélectionnées
    selectedCars = []; // Réinitialiser les voitures sélectionnées
    selectedPhoto.innerHTML = ''; // Effacer les photos affichées dans le box1
} 
        
function updateBox3() 
{
  var box3 = document.getElementById('box3');
  box3.innerHTML = '<p>AUTO</p>';

  // Afficher la voiture sélectionnée dans le "box3"
  for (var i = 0; i < selectedCars.length; i++) {
    var carElement = document.createElement('img');
    carElement.src = selectedCars[selectedCarIndex];
    carElement.src = selectedCars[i];
    carElement.alt = 'Selected Car ' + i;
    carElement.className = 'photos';
    box3.appendChild(carElement);
  }

  var selectedCarIndex = index;
  if (selectedCarIndex === 0) { // si c'est la première image de "auto"
    var auto1Content = document.getElementById('auto1').innerHTML; // récupérer le contenu de "auto1" de "beschreigung"
    box3.innerHTML += auto1Content; // ajouter le contenu de "auto1" dans le "box3"
  } else if (selectedCarIndex === 1) { // si c'est la deuxième image de "auto"
    var auto2Content = document.getElementById('auto2').innerHTML; // récupérer le contenu de "auto2" de "beschreigung"
    box3.innerHTML += auto2Content; // ajouter le contenu de "auto2" dans le "box3"
  } else if (selectedCarIndex === 2) { // si c'est la troisième image de "auto"
    var auto3Content = document.getElementById('auto3').innerHTML; // récupérer le contenu de "auto3" de "beschreigung"
    box3.innerHTML += auto3Content; // ajouter le contenu de "auto3" dans le "box3"
  }

  // Mettre à jour le lien du bouton "Zum Warenkorb"
  var warenkorbLink = document.getElementById('warenkorbLink');
  if (selectedCars.length > 0) {
    var selectedCarSrc = selectedCars[selectedCars.length - 1];
    var selectedImageIndex = selectedCars.length - 1;
    warenkorbLink.href = 'warenkorp.html?selectedImage=' + encodeURIComponent(selectedCarSrc) + '&selectedImageIndex=' + selectedImageIndex;
  } else {
    warenkorbLink.href = 'warenkorp.html';
  }
}