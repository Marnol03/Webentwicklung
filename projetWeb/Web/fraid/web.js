let toggle = document.querySelector(".toggle")
let body = document.querySelector("body")

toggle.addEventListener('click',function(){
    body.classList.toggle('open')
})
//--------------------------------------------------

let kartenummerinput = document.getElementById('kartenummer')
let cardType = document.getElementById('cardType')

kartenummerinput.addEventListener('input',oncardInput)
kartenummerinput.addEventListener('change',oncardNumberChange)

function oncardInput(event){
    const MASTERCARD_REGEX=/^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/
    const VISA_REGEX = /^4[0-9]{12}(?:[0-9]{3})?$/

    let mastercard= document.getElementById('mastercard');
    let visa= document.getElementById('visa');
    let error= document.getElementById('error')

    cardType.className = "card-type"
    cardType.removeAttribute('title')
    if (MASTERCARD_REGEX.test(event.target.value)) {
        // cardType.classList.add('is-mastercard')
        //cardType.setAttribute('title',"Mastercard")
        visa.style.display='none';
        error.style.display='none'
        mastercard.style.display='block';
    }
    else if (VISA_REGEX.test(event.target.value)) {
         cardType.classList.add('is-visa')
        // cardType.setAttribute('title',"Visa")
        mastercard.style.display='none';
        error.style.display='none'
        visa.style.display='block';
    }
    else if (isvalidcardNumber(event.target.value)) {
        cardType.classList.add('is-kreditkarte')
        cardType.setAttribute('title',"valid kartennummer")
    }

}


function oncardNumberChange (event){
if (isvalidcardNumber(event.target.value)) {
     kartenummerinput.classList.remove('invalid')
      cardType.classList.remove('is-error')
    // cardType.setAttribute('title',"valid kartennummer")
    // mastercard.style.display='none';
    // visa.style.display='';

}
else{
     kartenummerinput.classList.add('invalid')
     cardType.classList.add('is-error')
    // cardType.setAttribute('title',"Invalid kartennummer")
      mastercard.style.display='none';
    visa.style.display='none';
    error.style.display='block'

}
}


function isvalidcardNumber (cardNumber) {
    const VALID_REGEX = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/
    return VALID_REGEX.test(cardNumber)
}


//---------------------------------------------------------

let baliseInfo=document.querySelector(".info")
   baliseInfo.style.display = "none"
   let baliseInfo0 = document.querySelector(".bloc p")
   let backgroundfenster = document.querySelector(".backgroundfenster")
   let bezahlenbutton = document.querySelector(".bezahlen")
    let balisefooter = document.querySelector('footer')
    let baliseclose=document.querySelector(".close")

let inputbutton = document.querySelectorAll(".bloc input")
 for (let i = 0; i < inputbutton.length; i++) {
    inputbutton[i].addEventListener("change",(event) =>{

       // console.log(event.target.value)
        if (inputbutton[i].checked && event.target.value ==="kredit-/Debitkarte") {
          //  console.log(inputbutton[i].value)
            let baliseInfo0 = document.querySelector(".bloc p")
            baliseInfo0.style.display="none"
            baliseInfo.style.display = "block"
         }
         else{
            baliseInfo.style.display = "none"
            baliseInfo0.style.display="inline"
         }
    })


 }

 function bezahlenFensterAnzeigen() {
    let backgroundfenster = document.querySelector(".backgroundfenster")
    // La popup est masquée par défaut (display:none), ajouter la classe "active"
    // va changer son display et la rendre visible.
     backgroundfenster.classList.add("active")
    // backgroundfenster.style.display="flex"  // eine andere Alternative
    balisefooter.style.display = 'none'
}

function bezahlenFensterAusbleden() {
    let backgroundfenster = document.querySelector(".backgroundfenster")
    // La popup est masquée par défaut (display:none), supprimer la classe "active"
    // va rétablir cet affichage par défaut.
    backgroundfenster.classList.remove("active")
    backgroundfenster.style.display="none"
    balisefooter.style.display = 'block'
}


function bezahlenFensterVerwalten() {
    // On écoute le click sur le bouton "partager"
  let bezahlenbutton = document.querySelector(".bezahlen")
  bezahlenbutton.addEventListener("click", () => {
        // Quand on a cliqué sur le bouton partagé, on affiche la popup
       bezahlenFensterAnzeigen()
    })

    // On écoute le click sur la div "popupBackground"
    backgroundfenster.addEventListener("click", (event) => {
        // Si on a cliqué précisément sur la popupBackground
        // (et pas un autre élément qui se trouve dedant)
        if ( event.target ===baliseclose ) {
            // Alors on cache la popup
            bezahlenFensterAusbleden()
        }
    })
}

bezahlenFensterVerwalten()


// window.addEventListener('resize', function(event) {
//     if (window.innerWidth > 667) {
     
//       document.querySelector('footer').style.display = 'none';
//     } else {
     
//       document.querySelector('footer').style.display = 'block';
//     }
//   });


