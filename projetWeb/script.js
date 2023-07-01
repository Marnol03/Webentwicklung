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

roue.addEventListener('click', function() {
  Display(listePhotos);
  roue.style.backgroundColor='black';
  roue.style.color='white';
});

siege.addEventListener("click", function() {
  Display(listeBild);
  siege.style.backgroundColor='black';
  siege.style.color='white';
});

parechoc.addEventListener("click", function() {
  Display(listeBilder);
  parechoc.style.backgroundColor='black';
  parechoc.style.color='white';
});

function Display(element) {
  if (element.style.display === 'none') {
    hideAll();
    element.style.display = 'flex';
  } else {
    element.style.display = 'none';
  }
}

function hideAll() {
  listePhotos.style.display = 'none';
  listeBild.style.display = 'none';
  listeBilder.style.display = 'none';
  roue.style.backgroundColor='white';
  siege.style.backgroundColor='white';
  parechoc.style.backgroundColor='white';
  roue.style.color='black';
  siege.style.color='black';
  parechoc.style.color='black';
}

var radioElements = document.getElementsByName('check');
var photoContainer = document.getElementById('photoContainer');
var coch = document.getElementById('kik1');
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
var coch1 = document.getElementById('kik');
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
        imgElement1.className = 'img2';
        imgElement1.src = imageURL;
        imgElement1.alt = 'Image1 sélectionnée';
        photoContainer.appendChild(imgElement1);
      
      }
    }
  });
}
var autoElements = document.getElementsByClassName('auto');

function showAuto(autoId) {
  for (var i = 0; i < autoElements.length; i++) {
    if (autoElements[i].id === autoId) {
      autoElements[i].style.display = 'block';
    } else {
      autoElements[i].style.display = 'none';
    }
  }
}

const beschreibung = document.getElementById('beschreibung');
const auto1 = document.getElementById('auto1');
const auto2 = document.getElementById('auto2');
const auto3 = document.getElementById('auto3');
var radioElements = document.getElementsByName('check2');
var coch2 = document.getElementById('kik2');
var imgElement2 = document.querySelector('.img3');

for (var i = 0; i < radioElements.length; i++) {
  radioElements[i].addEventListener('change', function() {

    if(imgElement && imgElement1)
    {
      if (this.checked) {
        var imageURL = this.parentElement.querySelector('.photo').src;
        coch2.style.display = 'block';
        if (imgElement2) {

          imgElement2.src = imageURL;
          if (imgElement1.src.includes('foto1.png')) {
            showAuto('auto1');
          } else if (imgElement1.src.includes('foto2.png')) {
            showAuto('auto2');
          } else if (imgElement1.src.includes('foto3.png')) {
            showAuto('auto3');
          }
        } else {
          imgElement2 = document.createElement('img');
          imgElement2.className = 'img3';
          imgElement2.src = imageURL;
          imgElement2.alt = 'Image2 sélectionnée';
          photoContainer.appendChild(imgElement2);
          warenkorbbtn.style.display='block';
          if (imgElement1.src.includes('foto1.png')) {
            showAuto('auto1');
          } else if (imgElement1.src.includes('foto2.png')) {
            showAuto('auto2');
          } else if (imgElement1.src.includes('foto3.png')) {
            showAuto('auto3');
          }
        }
      }
    }
    else{
      alert('Wählen Sie zuerst die zwei andere Teilen!!');
    }
  });
}
var coll1 = document.getElementById('coll1');
coll1.addEventListener("click", function(){
 coll1.style.borderColor='green';
 coll2.style.borderColor='white';
 coll3.style.borderColor='white';
  imgElement1.style.filter='hue-rotate(-100deg)';
}); 
var coll2 = document.getElementById('coll2');
coll2.addEventListener("click", function(){
   coll2.style.borderColor='green';
   coll3.style.borderColor='white';
   coll1.style.borderColor='white';
  imgElement1.style.filter='hue-rotate(-190deg)';
});
var coll3 = document.getElementById('coll3');
coll3.addEventListener("click", function(){
 coll3.style.borderColor='green';
 coll2.style.borderColor='white';
 coll1.style.borderColor='white';
  imgElement1.style.filter='hue-rotate(0deg)';
});
const questions = document.querySelectorAll('.question');

const colp=0;
questions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
  });
});


const rouesRadios = document.getElementsByName('check');
const siegesRadios = document.getElementsByName('check1');
const parechocsRadios = document.getElementsByName('check2');
const collist = document.getElementsByName('coll');

function getSelectedValue(radios) {
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      return radios[i].value;
    }
  }
  return null;
}


function calculateAndUpdateTotalPrice() {

  const rouesValue = getSelectedValue(rouesRadios);
  const siegesValue = getSelectedValue(siegesRadios);
  const parechocsValue = getSelectedValue(parechocsRadios);
  const collValue = getSelectedValue(collist);

  if (rouesValue && siegesValue && parechocsValue) {

    const rouesPrice = parseFloat(rouesValue);
    const siegesPrice = parseFloat(siegesValue);
    const parechocsPrice = parseFloat(parechocsValue);
    const colPrice = parseFloat(collValue);
    // Preis Rechnen
    const totalPrice = rouesPrice + siegesPrice + parechocsPrice ;

    // jetzt der neue Preis hinzufügen
    const totalPriceElement = document.querySelector('.final-price');
    totalPriceElement.textContent = 'Neu: ' + totalPrice + '€';
  } else {
    console.log('Wählen sie Bitte eine Option für jede Gruppe.');
  }
}


rouesRadios.forEach(radio => {
  radio.addEventListener('change', calculateAndUpdateTotalPrice);
});

siegesRadios.forEach(radio => {
  radio.addEventListener('change', calculateAndUpdateTotalPrice);
});

parechocsRadios.forEach(radio => {
  radio.addEventListener('change', calculateAndUpdateTotalPrice);
});
collist.forEach(span =>{
  div.addEventListener('click', calculateAndUpdateTotalPrice);
})

const allimg= photoContainer.querySelectorAll('img');


warenkorbbtn.addEventListener('click', addToCart);

function addToCart() {

  const selectedImageDivs = document.getElementsByClassName('selectedImage');

  for (let i = 0; i < selectedImageDivs.length; i++) {
    const selectedDiv = allimg[i];

    const selectedImage = selectedDiv.querySelector('img').src;

    const selectedContent = selectedDiv.innerHTML;

    const item = {
      image: selectedImage,
      content: selectedContent
    };

    cart.push(item);
  }

  const cartSection = document.getElementById('panier');
  cartSection.innerHTML = '';

  cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.innerHTML = item.content;
    cartSection.appendChild(cartItem);
  });
}