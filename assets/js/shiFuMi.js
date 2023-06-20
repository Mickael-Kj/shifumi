// JEU : pierre, feuille, ciseaux avec les elements feu glace et terre
let resetBtn = document.getElementById("reset");
let scoreJoueur = document.getElementById("score-joueur");
let scoreOrdinateur = document.getElementById("score-ordinateur");
let btnJoueur = [...document.getElementsByClassName("btn-joueur")];
let opierreBtn = document.getElementById("opierre");
let opapierBtn = document.getElementById("opapier");
let ociseauxBtn = document.getElementById("ociseaux");
let message = document.getElementById("message");
let nextBtn = document.getElementById("next");

const jouerManche = (e) => {
    let choix = e.target.closest(".btn-joueur");
    
    btnJoueur.forEach((btn) => {
        btn.classList.add("desactivated");
        btn.removeEventListener("click", jouerManche);
    });
    choix.classList.remove("desactivated");
    choix.classList.add("active");

    let choixJoueur = choix.id;

    let choixOrdi = faireChoixOrdinateur();

    verifierGagnant(choixJoueur, choixOrdi)
    nextBtn.style.visibility = "visible";
};

// PIERRE = FIRE
// PAPIER = SOIL
// CISEAUX = ICE


const PIERRE = "pierre";
const PAPIER = "papier";
const CISEAUX = "ciseaux";

const faireChoixOrdinateur = () => {
    // 0 = pierre
    // 1 = papier
    // 2 = ciseaux
    let nbAleatoire = Math.floor(Math.random() * 3);
    switch(nbAleatoire){
        case 0 :
            opierreBtn.classList.add("active");
            return PIERRE;
        case 1 :
            opapierBtn.classList.add("active");
            return PAPIER;
        case 2 :
            ociseauxBtn.classList.add("active");
            return CISEAUX;

    }
};

const victoireOrdinateur = () =>{
    message.textContent = "Vous avez perdu...";
    scoreOrdinateur.textContent++;
}
const victoireJoueur = () =>{
    message.textContent = "Vous avez gagné !";
    scoreJoueur.textContent++;
}
const verifierGagnant = (choixJoueur, choixOrdi) => {
    if (choixJoueur == choixOrdi){
        MessageChannel.textContent = 'Egalité !';
    }
    if (choixJoueur = PIERRE){
        if (choixOrdi == PAPIER)
        return victoireOrdinateur();
    } else if (choixOrdi  == CISEAUX){
        return victoireJoueur();
    }
    if (choixJoueur = PAPIER){
        if (choixOrdi == CISEAUX)
        return victoireOrdinateur();
    } else if (choixOrdi  == PIERRE){
        return victoireJoueur();
    }
    if (choixJoueur = CISEAUX){
        if (choixOrdi == PIERRE)
        return victoireOrdinateur();
    } else if (choixOrdi  == PAPIER){
        return victoireJoueur();
    }
};
const preparerNouvelleManche = () => {
    btnJoueur.forEach((btn) =>{
        btn.classList.remove("desactivated");
        btn.classList.remove("active");

        btn.addEventListener("click", jouerManche);
    });

    nextBtn.style.visibility = "hidden";
    opierreBtn.classList.remove("active");
    opapierBtn.classList.remove("active");
    ociseauxBtn.classList.remove("active");
    message.textContent = "A vous de jouer !";
};


nextBtn.addEventListener("click", preparerNouvelleManche);

btnJoueur.forEach(btn => btn.addEventListener("click", jouerManche));

resetBtn.addEventListener("click", () => {
scoreJoueur.textContent = 0;
scoreOrdinateur.textContent = 0;
preparerNouvelleManche();
});

function choicePierre(){
    console.log('Pierre est selectionné');
    PAPIER.style.display = 'none';
    CISEAUX.style.display = 'none';
}
function choicePapier(){
    console.log('Papier est selectionné');
    PIERRE.style.display = 'none';
    CISEAUX.style.display = 'none';
}
function choiceCiseaux(){
    console.log('Ciseaux est selectionné');
    PAPIER.style.display = 'none';
    PIERRE.style.display = 'none';
};














// let pierre = document.querySelector('.pierre');
// let papier = document.querySelector('.papier');
// let ciseaux = document.querySelector('.ciseaux');
// let randChoice = "";
// let win = document.querySelector('.win');
// let lose = document.querySelector('.lose');
// let egalité = document.querySelector('.égalité');
// let result = "";
// let nbVictoire = "";
// let nbDéfaite = "";
// let nbEgalité = "";
// let nbParties = "";
// // Choisir pierre papier ou ciseaux
// function choicePierre(){
//         console.log('Pierre est selectionné');
//         papier.style.display = 'none';
//         ciseaux.style.display = 'none';
// }
// function choicePapier(){
//         console.log('Papier est selectionné');
//         pierre.style.display = 'none';
//         ciseaux.style.display = 'none';
// }
// function choiceCiseaux(){
//         console.log('Ciseaux est selectionné');
//         papier.style.display = 'none';
//         pierre.style.display = 'none';
// };
