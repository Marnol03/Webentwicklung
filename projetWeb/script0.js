var panier = document.getElementById('panier');
 panier.addEventListener('click', ()=>{
    panier.style.backgroundColor='red';
 });
 var bezahlen = document.getElementById('bezahlen');
 bezahlen.addEventListener('click', ()=>{
    panier.style.backgroundColor='red'; 
});

document.addEventListener('DOMContentLoaded', function() {
    var panier = document.getElementById('panier');

    if (localStorage.getItem('img1') && localStorage.getItem('img2') && localStorage.getItem('img3')) {
       var bSrc = localStorage.getItem('img1');
       var bSrc1 = localStorage.getItem('img2');
      var bSrc2 = localStorage.getItem('img3');
         
       var img1 = document.createElement('img');
       img1.src = bSrc;
       var img2 = document.createElement('img');
       img2.src = bSrc1;
       var img3 = document.createElement('img');
       img3.src = bSrc2;

       panier.appendChild(img1);
       panier.appendChild(img2);
       panier.appendChild(img3);

       const beschreibung = localStorage.getItem('beschreib');

       if (beschreibung) {
            const Beschreibung = document.getElementById('beschreibung');
            Beschreibung.innerHTML = beschreibung;
        }

       localStorage.removeItem('img1');
       localStorage.removeItem('img2');
       localStorage.removeItem('img3');
       localStorage.removeItem('beschreib');
    }
});


