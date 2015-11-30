'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");

PalettoTestCase.prototype.testStory1 = function () {
    var moteur = new Engine();

    moteur.nouvelle_partie();

    assertTrue(moteur.juxtaposition_ok() === true);
};

PalettoTestCase.prototype.testStory2 = function () {
    var moteur = new Engine();

    moteur.nouvelle_partie();

    assertTrue(moteur.juxtaposition_ok() === true);

    assertTrue(moteur.est_dans_un_coin("jaune") === true);
};

PalettoTestCase.prototype.testStory3 = function () {
    var moteur = new Engine();

    moteur.nouvelle_partie();

    moteur.retirer_piece("A6");

    assertTrue(moteur.get_nombre_pieces() === 35);

    var piecesJoueur1 = moteur.get_pieces_joueur(1);
    assertTrue(piecesJoueur1["jaune"] === 1);
};

PalettoTestCase.prototype.testStory4 = function () {
    var moteur = new Engine();

    moteur.nouvelle_partie();

    moteur.retirer_piece("A6");

    moteur.change_tour_joueur();

    assertTrue(moteur.peut_retirer_piece("A1"));
    assertTrue(moteur.peut_retirer_piece("F1"));
    assertTrue(moteur.peut_retirer_piece("A5"));
    assertTrue(moteur.peut_retirer_piece("B6"));
    assertTrue(moteur.peut_retirer_piece("F6"));

    moteur.retirer_piece("A1");
    moteur.retirer_piece("F6");

    var piecesJoueur2 = moteur.get_pieces_joueur(2);
    assertTrue(piecesJoueur2["noir"] === 2);
};

PalettoTestCase.prototype.testStory5 = function () {
    var moteur = new Engine();

    moteur.nouvelle_partie_etat_intermediaire();

    assertTrue(moteur.peut_retirer_piece("D1"));
    assertTrue(moteur.peut_retirer_piece("F1"));
    assertTrue(moteur.peut_retirer_piece("E3"));
    assertTrue(moteur.peut_retirer_piece("A4"));
    assertTrue(moteur.peut_retirer_piece("B5"));
    assertTrue(moteur.peut_retirer_piece("C6"));
    assertFalse(moteur.peut_retirer_piece("C3"));
};