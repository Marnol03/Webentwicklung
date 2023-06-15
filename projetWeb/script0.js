let baliseInfo=document.querySelector(".info")
   baliseInfo.style.display = "none"
   let baliseInfo0 = document.querySelector(".bloc p")
   let backgroundfenster = document.querySelector(".backgroundfenster")
   let bezahlenbutton = document.querySelector(".bezahlen")
 

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
}

function bezahlenFensterAusbleden() {
    let backgroundfenster = document.querySelector(".backgroundfenster")
    // La popup est masquée par défaut (display:none), supprimer la classe "active"
    // va rétablir cet affichage par défaut. 
    backgroundfenster.classList.remove("active")
    backgroundfenster.style.display="none"
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
        if (event.target === backgroundfenster) {
            // Alors on cache la popup
            bezahlenFensterAusbleden()
        }
    })
}

bezahlenFensterVerwalten()
//bezahlenFensterAusbleden()