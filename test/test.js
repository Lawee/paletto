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

PalettoTestCase.prototype.testStory2 = function () {
    var moteur = new Engine();

    moteur.nouvelle_partie();

    moteur.retirer_piece("A6");

    assertTrue(moteur.get_nombre_pieces() === 35);

    var piecesJoueur1 = moteur.get_pieces_joueur(1);
    assertTrue(piecesJoueur1["jaune"] === 1);
};