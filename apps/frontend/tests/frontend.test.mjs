
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';

import { crearEstadoAplicacion } from '@arqui/shared';

test('El frontend utiliza la libreria compartida', () => {
  const estado = crearEstadoAplicacion('Frontend');

  assert.equal(estado.aplicacion, 'Frontend');
  assert.equal(estado.estado, 'Funcionando');
});

test('El frontend genera archivos de produccion', async () => {
  const html = await readFile(
    new URL('../dist/index.html', import.meta.url),
    'utf8'
  );

  const archivos = await readdir(
    new URL('../dist/assets/', import.meta.url)
  );

  assert.match(html, /id="app"/);
  assert.ok(archivos.some(archivo => archivo.endsWith('.js')));
});
