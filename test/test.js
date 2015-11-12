'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");

PalettoTestCase.prototype.testStory1 = function () {
    var moteur = new Engine();

    moteur.nouvelle_partie();

    assertTrue(moteur.juxtaposition_ok() === true);
};