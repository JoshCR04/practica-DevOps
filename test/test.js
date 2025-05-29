const { esPar } = require('../script');

describe('Función esPar', () => {
  test('devuelve true para números pares', () => {
    expect(esPar(4)).toBe(true);
  });

  test('devuelve false para números impares', () => {
    expect(esPar(3)).toBe(false);
  });

  test('lanza error si no es número', () => {
    expect(() => esPar('a')).toThrow('Debe ser un número');
  });
});
