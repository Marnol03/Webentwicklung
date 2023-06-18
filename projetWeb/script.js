 let toggle = document.querySelector(".toggle")
let body = document.querySelector("body")
 
toggle.addEventListener('click',function()
  {
   body.classList.toggle('open')
   }
 )


  var roue = document.getElementById('roue');
 var listePhotos = document.getElementById('liste-roues');
 var siege = document.getElementById('siege');
 var listeBild = document.getElementById('liste-sieges');
 var parechoc = document.getElementById('parechoc');
 var listeBilder = document.getElementById('liste-parechocs');

roue.addEventListener('click', function() 
  {
    if (listePhotos.style.display === 'none')
     {
       listeBilder.style.display = 'none'
       listeBild.style.display = 'none'
       listePhotos.style.display = 'flex';
      } else {
      listePhotos.style.display = 'none';
    }
  }
);
siege.addEventListener("click", function() 
  {
    if (listeBild.style.display === 'none') {
      listePhotos.style.display = 'none';
      listeBilder.style.display = 'none'
      listeBild.style.display = 'flex';
    } 
    else {
        listeBild.style.display = 'none';
    }
  }
 );
parechoc.addEventListener("click", function() 
  {
    if (listeBilder.style.display === 'none') 
    {
     listePhotos.style.display = 'none';
     listeBild.style.display = 'none'
     listeBilder.style.display = 'flex';
    } 
    else {
     listeBilder.style.display = 'none';
    }
  }
);
var radioElements = document.getElementsByName('check');
var photoContainer = document.getElementById('photoContainer');
var coch = document.getElementById('kik');
var imgElement = document.querySelector('.img1');

for (var i = 0; i < radioElements.length; i++) {
  radioElements[i].addEventListener('change', function() {

    if (this.checked) {
      var imageURL = this.parentElement.querySelector('.photo').src;
      coch.style.display = 'block';

      if (imgElement) {

        imgElement.src = imageURL;
      } else {

        imgElement = document.createElement('img');
        imgElement.className = 'img1';
        imgElement.src = imageURL;
        imgElement.alt = 'Image sélectionnée';
        photoContainer.appendChild(imgElement);
      }
    }
  });
}
var radioElements = document.getElementsByName('check1');
var coch1 = document.getElementById('kik1');
var imgElement1 = document.querySelector('.img2');
var photoContainer = document.getElementById('photoContainer');

for (var i = 0; i < radioElements.length; i++) {
  radioElements[i].addEventListener('change', function() {

    if (this.checked) {
      var imageURL = this.parentElement.querySelector('.photo').src;
      coch1.style.display = 'block';

      if (imgElement1) {

        imgElement1.src = imageURL;
      } else {

        imgElement1 = document.createElement('img');
        imgElement1.className = '.img2';
        imgElement1.src = imageURL;
        imgElement1.alt = 'Image1 sélectionnée';
        photoContainer.appendChild(imgElement1);
      }
    }
  });
}
var coll1 = document.getElementById('coll1');
coll1.addEventListener("click", function(){
  coll1.style.backgroundColor='red';
  imgElement1.style.filter='hue-rotate(-100deg)'
}); 


var radioElements = document.getElementsByName('check2');
var coch2 = document.getElementById('kik2');
var imgElement2 = document.querySelector('.img3');

for (var i = 0; i < radioElements.length; i++) {
  radioElements[i].addEventListener('change', function() {

    if (this.checked) {
      var imageURL = this.parentElement.querySelector('.photo').src;
      coch2.style.display = 'block';

      if (imgElement2) {

        imgElement2.src = imageURL;
      } else {

        imgElement2 = document.createElement('img');
        imgElement2.className = 'img3';
        imgElement2.src = imageURL;
        imgElement2.alt = 'Image2 sélectionnée';
        photoContainer.appendChild(imgElement2);
      }
    }
  });
}

