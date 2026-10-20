
import test from 'node:test';
import assert from 'node:assert/strict';

import { crearEstadoAplicacion } from '../dist/index.js';

test('La libreria genera el estado correctamente', () => {
  const resultado = crearEstadoAplicacion('Prueba');

  assert.equal(resultado.aplicacion, 'Prueba');
  assert.equal(resultado.estado, 'Funcionando');
  assert.match(resultado.mensaje, /@arqui\/shared/);
});

test('La funcion acepta diferentes aplicaciones', () => {
  const frontend = crearEstadoAplicacion('Frontend');
  const backend = crearEstadoAplicacion('Backend');

  assert.equal(frontend.aplicacion, 'Frontend');
  assert.equal(backend.aplicacion, 'Backend');
});
