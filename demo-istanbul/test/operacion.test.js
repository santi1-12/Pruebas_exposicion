const assert = require('assert');
const { suma, resta } = require('../operacion');

describe('Pruebas de funciones matemáticas', () => {
    it('suma(2,3) debe ser 5', () => {
        assert.strictEqual(suma(2, 3), 5);
    });

    it('resta(5,2) debe ser 3', () => {
        assert.strictEqual(resta(5, 2), 3);
    });
});
