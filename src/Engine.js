'use strict';

var Engine = function () {

    // private attributes and methods
    var taillePlateau = 6;
    var plateau = new Array(taillePlateau);
    var tourJoueur;

    var noir = "noir";
    var vert = "vert";
    var blanc = "blanc";
    var bleu = "bleu";
    var rouge = "rouge";
    var jaune = "jaune";
    var couleurs = [noir, vert, blanc, bleu, rouge, jaune];

    var piecesJoueur1 = {};
    var piecesJoueur2 = {};

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

        for (i = 0; i < couleurs.length; i++) {
            piecesJoueur1[couleurs[i]] = 0;
            piecesJoueur2[couleurs[i]] = 0;
        }

        tourJoueur = 1;
    };

    this.juxtaposition_ok = function () {
        var ligne, colonne;
        var pieceActuelle;

        for (ligne = 0; ligne < taillePlateau; ligne++) {
            for (colonne = 0; colonne < taillePlateau; colonne++) {
                pieceActuelle = plateau[ligne][colonne];

                if (!(ligne === 0))
                    if (pieceActuelle === plateau[ligne - 1][colonne])
                        return false;
                if (!(colonne === taillePlateau - 1))
                    if (pieceActuelle === plateau[ligne][colonne + 1])
                        return false;
                if (!(ligne === taillePlateau - 1))
                    if (pieceActuelle === plateau[ligne + 1][colonne])
                        return false;
                if (!(colonne === 0))
                    if (pieceActuelle === plateau[ligne][colonne - 1])
                        return false;
            }
        }

        return true;
    };

    this.est_dans_un_coin = function (couleur) {
        if (plateau[0][0] === couleur
            || plateau[0][taillePlateau - 1] === couleur
            || plateau[taillePlateau -1][0] === couleur
            || plateau[taillePlateau -1][taillePlateau -1] === couleur)
            return true;
        else
            return false;
    };

    this.retirer_piece = function (coords) {
        if (this.peut_retirer_piece(coords)) {
            var colonne = coords.charCodeAt(0) - 65;
            var ligne = coords.charCodeAt(1) - 49;
            var piece = plateau[ligne][colonne];

            if (piece != null)
                if (tourJoueur === 1)
                    piecesJoueur1[piece]++;
                else if (tourJoueur === 2)
                    piecesJoueur2[piece]++;

            plateau[ligne][colonne] = null;
        }
    };

    this.get_nombre_pieces = function () {
        var ligne, colonne;
        var pieceActuelle;
        var compt = 0;

        for (ligne = 0; ligne < taillePlateau; ligne++) {
            for (colonne = 0; colonne < taillePlateau; colonne++) {
                pieceActuelle = plateau[ligne][colonne];

                if (pieceActuelle != null)
                    compt++;
            }
        }

        return compt;
    };

    this.get_pieces_joueur = function (numeroJoueur) {
        if (numeroJoueur === 1)
            return piecesJoueur1;
        else if (numeroJoueur === 2)
            return piecesJoueur2;
    };

    this.peut_retirer_piece = function (coords) {
        var colonne = coords.charCodeAt(0) - 65;
        var ligne = coords.charCodeAt(1) - 49;
        var piece = plateau[ligne][colonne];
        if (piece == null) return false;

        var nbVoisins = this.compte_voisins(ligne, colonne);

        if (nbVoisins > 2) return false;

        if (nbVoisins === 2) {
            //left right - up down
            if ((!(colonne === 0) && !(colonne === taillePlateau - 1)) && (!(ligne === 0) && !(ligne === taillePlateau - 1)))
                if ((plateau[ligne][colonne - 1] != null && plateau[ligne][colonne + 1] != null)
                    || (plateau[ligne - 1][colonne] != null && plateau[ligne + 1][colonne] != null))
                    return false;

            //up right
            if (colonne !== taillePlateau - 1 && ligne !== 0)
                if (plateau[ligne - 1][colonne] != null && plateau[ligne][colonne + 1] != null && plateau[ligne - 1][colonne + 1] == null)
                    return false;

            //down right
            if (colonne !== taillePlateau -1 && ligne !== taillePlateau -1)
                if (plateau[ligne + 1][colonne] != null && plateau[ligne][colonne + 1] != null && plateau[ligne + 1][colonne + 1] == null)
                    return false;

            //down left
            if (colonne !== 0 && ligne !== taillePlateau -1)
                if (plateau[ligne + 1][colonne] != null && plateau[ligne][colonne - 1] != null && plateau[ligne + 1][colonne - 1] == null)
                    return false;

            //up left
            if (colonne !== 0 && ligne !== 0)
                if (plateau[ligne][colonne - 1] != null && plateau[ligne - 1][colonne] != null && plateau[ligne - 1][colonne - 1] == null)
                    return false;
        }

        return true;
    };

    this.change_tour_joueur = function () {
        if (tourJoueur === 1) tourJoueur = 2;
        else tourJoueur = 1;
    };

    this.compte_voisins = function (ligne, colonne) {
        var compt = 0;

        if (!(ligne === 0))
            if (plateau[ligne - 1][colonne] != null)
                compt++;
        if (!(colonne === taillePlateau - 1))
            if (plateau[ligne][colonne + 1] != null)
                compt++;
        if (!(ligne === taillePlateau - 1))
            if (plateau[ligne + 1][colonne] != null)
                compt++;
        if (!(colonne === 0))
            if (plateau[ligne][colonne - 1] != null)
                compt++;

        return compt;
    };

    this.nouvelle_partie_etat_intermediaire = function () {
        var i;

        for (i = 0; i < taillePlateau ; i++) {
            plateau[i] = new Array(taillePlateau);
        }

        plateau = [
            [null, null, null, bleu, rouge, blanc],
            [null, null, null, rouge, jaune, null],
            [null, null, bleu, blanc, noir, null],
            [rouge, noir, rouge, null, null, null],
            [null, vert, jaune, null, null, null],
            [null, null, noir, null, null, null]
        ];

        for (i = 0; i < couleurs.length; i++) {
            piecesJoueur1[couleurs[i]] = 0;
            piecesJoueur2[couleurs[i]] = 0;
        }

        tourJoueur = 1;
    };

    // public methods
};