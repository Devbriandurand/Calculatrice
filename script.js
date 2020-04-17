function addition(nombreA, nombreB) {
    return nombreA + nombreB;
}
function multiplication(nombreA, nombreB) {
    return nombreA * nombreB;
}
function soustration(nombreA, nombreB) {
    return nombreA - nombreB;
}
function division(nombreA, nombreB) {
    if (nombreB == 0) {
        throw new Error('Impossible de diviser par 0');
    }
    return nombreA / nombreB;
}

let restart = false;//La variable est = à false; ce qui veux dire que par défaut, nous ne reproposons pas de calcul
do{
do {
    var choix = Number(prompt('Que souhaitez vous faire ?\n\n 1. Addition,\n 2. Multiplication,\n 3. Soustraction,\n 4. Division\n'));
} while (choix != 1 && choix != 2 && choix != 3 && choix != 4);

do {
    var premierNombre = Number(prompt('Entrez un premier nombre'));
    var secondNombre = Number(prompt('Entrez un second nombre'));

} while (isNaN(premierNombre) || isNaN(secondNombre));

try {
    switch (choix) {
        case 1:
            var result = addition(premierNombre, secondNombre);
            break;

        case 2:
            var result = multiplication(premierNombre, secondNombre);
            break;

        case 3:
            var result = soustration(premierNombre, secondNombre);
            break;

        case 4:
            var result = division(premierNombre, secondNombre);
            break;

        default:
            throw new Error('Une erreur est survenue !');
    }
    alert('Voici le résultat : ' + result);
}
catch (error) {
    alert(error);// si une erreur existe on affiche l'erreur
}
    restart = confirm('Souhaitez-vous de nouveau faire un calcul ?');
}while (restart)

    alert("Fin du calcul, merci d'avoir utilisé nos services ! A bientôt.");

