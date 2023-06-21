// ------------------------JEU : pierre, feuille, ciseaux avec les elements feu, terre et glace.----------------
// PIERRE = FIRE (feu)
// PAPIER = SOIL (terre)
// CISEAUX = ICE (glace)
// Le feu fait fondre la glace, la terre recouvre le feu, la glace gèle la terre,
let resetBtn = document.getElementById("reset");
let scoreJoueur = document.getElementById("score-joueur");
let scoreOrdinateur = document.getElementById("score-ordinateur");
let scoreEgalité = document.getElementById("score-égalité");
let btnJoueur = [...document.getElementsByClassName("btn-joueur")];
let opierreBtn = document.getElementById("opierre");
let opapierBtn = document.getElementById("opapier");
let ociseauxBtn = document.getElementById("ociseaux");
let message = document.getElementById("message");
let nextBtn = document.getElementById("next");
let pierre = document.querySelector("#pierre")
let papier = document.querySelector("#papier")
let ciseaux = document.querySelector("#ciseaux")


// --------------JOUER MANCHE---------------------

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

    verifierGagnant(choixJoueur, choixOrdi);
    nextBtn.style.visibility = "visible";
};

//---------- RANDOM ORDINATEUR--------------------

const PIERRE = "pierre";
const PAPIER = "papier";
const CISEAUX = "ciseaux";

const faireChoixOrdinateur = () => {
    // 0 = pierre / feu
    // 1 = papier / terre
    // 2 = ciseaux / glace
    let nbAleatoire = Math.floor(Math.random() * 3);
    switch(nbAleatoire){
        case 0 :
            opierreBtn.classList.add("active");
            return PIERRE;
        case 1 :
            opapierBtn.classList.add("active");
            return PAPIER;
        default :
            ociseauxBtn.classList.add("active");
            return CISEAUX;
    }
};

//---------- COMPTEUR VICTOIRES/DEFAITES--------------------


const victoireOrdinateur = () => {
    message.textContent = "Vous avez perdu...";
    scoreOrdinateur.textContent++;
};
const victoireJoueur = () => {
    message.textContent = "Vous avez gagné !";
    scoreJoueur.textContent++;
};
const egalité = () => {
    message.textContent = "Egalité !";
    scoreEgalité.textContent++;
};

//---------- COMPARATEUR VALEUR POUR SAVOIR QUI GAGNE-------------------

const verifierGagnant = (choixJoueur, choixOrdi) => {
    if (choixJoueur == choixOrdi){
        return egalité ();
    }
    if (choixJoueur == PIERRE) {
        if (choixOrdi == PAPIER) {
          return victoireOrdinateur();
        } else if (choixOrdi == CISEAUX) {
          return victoireJoueur();
        }
      }
      if (choixJoueur == PAPIER) {
        if (choixOrdi == CISEAUX) {
          return victoireOrdinateur();
        } else if (choixOrdi == PIERRE) {
          return victoireJoueur();
        }
      }
    if (choixJoueur == CISEAUX){
        if (choixOrdi == PIERRE) {
        return victoireOrdinateur();
    } else if (choixOrdi  == PAPIER){
        return victoireJoueur();
    }
    }
};


//---------- NOUVELLE MANCHE--------------------


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
scoreEgalité.textContent = 0;
preparerNouvelleManche();
});