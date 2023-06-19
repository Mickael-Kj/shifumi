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

function choice(){
    document.querySelector(".monChoix").innerText = "J'ai choisi celui là";
    console.log('ça marche!');
}
function clickPlay() {
    console.log('ça marche!');
}
