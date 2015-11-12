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