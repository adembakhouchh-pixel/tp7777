function mettreAJour() {
    let liste = document.getElementById("maListe");
    let nombreDeTaches = liste.children.length; // Compte combien il y a de <li>
    
    // Met à jour le texte du compteur
    document.getElementById("compteur").innerHTML = "Tâches en cours : " + nombreDeTaches;

    // Sauvegarde le contenu HTML de la liste dans le navigateur
    localStorage.setItem("taches", JSON.stringify(liste.innerHTML));
}

// 2. Fonction pour le bouton "Tout supprimer"
function toutSupprimer() {
    document.getElementById("maListe").innerHTML = ""; // Vide la liste
    mettreAJour(); // Remet le compteur à 0 et vide la sauvegarde
}

// 3. Charger les tâches quand on ouvre ou rafraîchit la page
window.onload = function() {
    let sauvegarde = localStorage.getItem("taches");
    if (sauvegarde != null) {
        document.getElementById("maListe").innerHTML = JSON.parse(sauvegarde);
        mettreAJour();
    }
}
let images = ["image1.jpg", "image2.jpg", "image3.jpg"];
let numero = 0;
let chrono = null;

function demarrerDiapo() {
    // On vérifie que le diaporama n'est pas déjà lancé
    if (chrono == null) {
        chrono = setInterval(function() {
            numero = numero + 1;
            // Si on dépasse la dernière image, on revient à la première (0)
            if (numero >= images.length) {
                numero = 0;
            }
            document.getElementById("monImage").src = images[numero];
        }, 2000); // 2000 millisecondes = 2 secondes
    }
}

function arreterDiapo() {
    clearInterval(chrono); // Stoppe le défilement
    chrono = null;
}
let coups = 0;

// Appelez cette fonction à chaque fois qu'une tuile bouge
function ajouterCoup() {
    coups = coups + 1;
    document.getElementById("score").innerHTML = "Nombre de coups : " + coups;
    verifierVictoire(); // On vérifie s'il a gagné après chaque coup
}

// Fonction demandée dans l'énoncé
function verifierVictoire() {
    let etatFinal = [1, 2, 3, 4, 5, 6, 7, 8, ""];
    
    // On compare chaque case de votre tableau "grille" avec "etatFinal"
    for (let i = 0; i < 9; i++) {
        if (grille[i] != etatFinal[i]) {
            return; // Si une seule case n'est pas bonne, on arrête la fonction ici
        }
    }

    // Si la boucle se termine sans erreur, c'est gagné !
    alert("Félicitations ! Vous avez gagné en " + coups + " coups !");
}
let secondes = 30;

let compteARebours = setInterval(function() {
    secondes = secondes - 1;
    document.getElementById("timer").innerHTML = "Temps restant : " + secondes + " s";

    // Quand le temps arrive à 0
    if (secondes <= 0) {
        clearInterval(compteARebours); // On arrête le chrono
        alert("Temps écoulé !");
        
        // On appelle la fonction qui corrige le quiz (vérifiez le nom dans votre TP, ex: corrigerQuiz)
        corrigerQuiz(); 
    }
}, 1000); // 1000 millisecondes = 1 seconde