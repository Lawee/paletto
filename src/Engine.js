'use strict';

var Engine = function () {

    // private attributes and methods
    var taillePlateau = 6;
    var plateau = new Array(taillePlateau);

    var noir = "noir";
    var vert = "vert";
    var blanc = "blanc";
    var bleu = "bleu";
    var rouge = "rouge";
    var jaune = "jaune";

    this.nouvelle_partie = function () {
        var i;

        for (i = 0; i < taillePlateau ; i++) {
            plateau[i] = new Array(taillePlateau);
        }

        plateau[0][0] = noir;
        plateau[0][1] = vert;
        plateau[0][2] = blanc;
        plateau[0][3] = bleu;
        plateau[0][4] = rouge;
        plateau[0][5] = blanc;

        plateau[1][0] = jaune;
        plateau[1][1] = blanc;
        plateau[1][2] = vert;
        plateau[1][3] = rouge;
        plateau[1][4] = jaune;
        plateau[1][5] = bleu;

        plateau[2][0] = bleu;
        plateau[2][1] = jaune;
        plateau[2][2] = bleu;
        plateau[2][3] = blanc;
        plateau[2][4] = noir;
        plateau[2][5] = rouge;

        plateau[3][0] = rouge;
        plateau[3][1] = noir;
        plateau[3][2] = rouge;
        plateau[3][3] = vert;
        plateau[3][4] = bleu;
        plateau[3][5] = blanc;

        plateau[4][0] = blanc;
        plateau[4][1] = vert;
        plateau[4][2] = jaune;
        plateau[4][3] = noir;
        plateau[4][4] = jaune;
        plateau[4][5] = vert;

        plateau[5][0] = jaune;
        plateau[5][1] = bleu;
        plateau[5][2] = noir;
        plateau[5][3] = rouge;
        plateau[5][4] = vert;
        plateau[5][5] = noir;
    };

    this.juxtaposition_ok = function () {
        var colonne;
        var ligne;
        var billeActuelle;

        for (ligne = 0; ligne < taillePlateau; ligne++) {
            for (colonne = 0; colonne < taillePlateau; colonne++) {
                billeActuelle = plateau[ligne][colonne];

                if (!(ligne === 0))
                    if (billeActuelle === plateau[ligne - 1][colonne])
                        return false;
                if (!(colonne === taillePlateau - 1))
                    if (billeActuelle === plateau[ligne][colonne + 1])
                        return false;
                if (!(ligne === taillePlateau - 1))
                    if (billeActuelle === plateau[ligne + 1][colonne])
                        return false;
                if (!(colonne === 0))
                    if (billeActuelle === plateau[ligne][colonne - 1])
                        return false;
            }
        }

        return true;
    };


    // public methods
};
