
import test from 'node:test';
import assert from 'node:assert/strict';
import { once } from 'node:events';

import app from '../dist/app.js';

test('GET /api/status responde correctamente', async () => {
  const servidor = app.listen(0, '127.0.0.1');

  try {
    await once(servidor, 'listening');

    const direccion = servidor.address();

    const respuesta = await fetch(
      `http://127.0.0.1:${direccion.port}/api/status`
    );

    assert.equal(respuesta.status, 200);

    const datos = await respuesta.json();

    assert.equal(datos.aplicacion, 'Backend');
    assert.equal(datos.estado, 'Funcionando');
    assert.match(datos.mensaje, /@arqui\/shared/);

  } finally {
    servidor.close();
  }
});
