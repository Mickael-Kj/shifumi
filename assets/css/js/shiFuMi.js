// JEU : pierre, feuille, ciseaux

let pierre = document.querySelector('.pierre')
let feuille = document.querySelector('.feuille')
let ciseaux = document.querySelector('.ciseaux')
let randChoice = ""
let win = document.querySelector('.win')
let lose = document.querySelector('.lose')
let egalité = document.querySelector('.égalité')
let result = ""
let nbVictoire = ""
let nbDéfaite = ""
let nbEgalité = ""
let nbParties = ""

// si user click sur une des 3 let integrer cette let dans la div au centre = choix pour le jeu

//si user click sur button play = random a comparer avec le choix = faire apparaitre le resultat
function random(){
}


// Choisir pierre papier ou ciseaux
function choice(){
        console.log('click sur pierre');
        pierre.style.width = '400px';
        pierre.style.height = '400px';
        papier.style.display = 'none';
        ciseaux.style.display = 'none';
      
    // document.querySelector(".monChoix").innerText = "J'ai choisi celui là";
}
function clickPlay() {
    console.log('ça marche!');
}
