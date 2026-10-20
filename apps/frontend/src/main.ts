
import './style.css';

import {
  crearEstadoAplicacion,
  type EstadoAplicacion
} from '@arqui/shared';

// Usamos directamente la libreria compartida
const estadoFrontend: EstadoAplicacion =
  crearEstadoAplicacion('Frontend');

const app = document.querySelector<HTMLDivElement>('#app');

if (app) {
  app.innerHTML = `
    <main class="container">
      <h1>Arquitectura de Sistemas</h1>
      <p class="subtitle">
        HW-05 | Monorepo con Turborepo
      </p>

      <section class="grid">
        <article class="card">
          <h2>Frontend</h2>
          <p>Estado generado por @arqui/shared:</p>
          <pre id="frontend-status"></pre>
        </article>

        <article class="card">
          <h2>Backend</h2>
          <p>Respuesta de la API Express:</p>
          <pre id="backend-status">Conectando...</pre>
        </article>
      </section>

      <p class="footer">
        Ambas aplicaciones utilizan la misma
        libreria compartida de TypeScript.
      </p>
    </main>
  `;
}

// Mostrar resultado de la libreria en el frontend
const frontendStatus =
  document.querySelector('#frontend-status');

if (frontendStatus) {
  frontendStatus.textContent =
    JSON.stringify(estadoFrontend, null, 2);
}

// Consultar la API del backend
async function consultarBackend(): Promise<void> {
  const elemento =
    document.querySelector('#backend-status');

  if (!elemento) return;

  try {
    const respuesta = await fetch(
      'http://localhost:3000/api/status'
    );

    if (!respuesta.ok) {
      throw new Error('Error al consultar la API');
    }

    const datos: EstadoAplicacion =
      await respuesta.json();

    elemento.textContent =
      JSON.stringify(datos, null, 2);

  } catch (error) {
    elemento.textContent =
      'No se pudo conectar con el backend.';
    console.error(error);
  }
}

consultarBackend();
