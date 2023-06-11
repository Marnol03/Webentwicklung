function ima(imgsID) {
    var imgs = document.getElementById(imgsID);
    if (imgs) {
      // Show selected images
      imgs.classList.remove('liste-cachee');
    }
  }

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

function selectImage(img) {
    var box1 = document.getElementById('selected-image');
    if (box1) {
        box1.src = img.src;
    }
}

