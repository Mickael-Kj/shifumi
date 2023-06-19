// JEU : pierre, feuille, ciseaux

let pierre = document.querySelector('.pierre');
let papier = document.querySelector('.papier');
let ciseaux = document.querySelector('.ciseaux');
let randChoice = "";
let win = document.querySelector('.win');
let lose = document.querySelector('.lose');
let egalité = document.querySelector('.égalité');
let result = "";
let nbVictoire = "";
let nbDéfaite = "";
let nbEgalité = "";
let nbParties = "";

// si user click sur une des 3 let integrer cette let dans la div au centre = choix pour le jeu

//si user click sur button play = random a comparer avec le choix = faire apparaitre le resultat


function clickPlay() {
    console.log('ça marche!');
}


// Choisir pierre papier ou ciseaux
function choicePierre(){
        console.log('Pierre est selectionné');
        papier.style.display = 'none';
        ciseaux.style.display = 'none';
}
function choicePapier(){
        console.log('Papier est selectionné');
        pierre.style.display = 'none';
        ciseaux.style.display = 'none';
}
function choiceCiseaux(){
        console.log('Ciseaux est selectionné');
        papier.style.display = 'none';
        pierre.style.display = 'none';
}

const choixOrdi = () => {
    // 0 = pierre
    // 1 = papier
    // 2 = ciseaux
    let nbAleatoire = Math.floor(Math.random() * 3);
    switch(nbAleatoire){
        case 0 :
            // pierreBtn.classList.add("active");
    }
}
const victoireOrdinateur = () =>{
    message.textContent = "L'ordinateur gagne...";
    lose.textContent++;
}
const victoireJoueur = () =>{
    MessageChannel.textContent = "L'ordinateur gagne...";
    win.textContent++;
}
const verifierGagnant = (choixJoueur, choixOrdi) => {
    if (choixJoueur == choixOrdi){
        MessageChannel.textContent = 'Egalité !';
    }
    if (choixJoueur = pierre){
        if (choixOrdi == papier)
        return victoireOrdinateur();
    } else if (choixOrdi  == ciseaux){
        return victoireJoueur();
    }
    if (choixJoueur = papier){
        if (choixOrdi == ciseaux)
        return victoireOrdinateur();
    } else if (choixOrdi  == pierre){
        return victoireJoueur();
    }
    if (choixJoueur = ciseaux){
        if (choixOrdi == pierre)
        return victoireOrdinateur();
    } else if (choixOrdi  == papier){
        return victoireJoueur();
    }
}