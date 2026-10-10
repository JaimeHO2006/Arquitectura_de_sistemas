
import './style.css';

const boton = document.querySelector('#probar');
const resultado = document.querySelector('#resultado');

let contador = 0;

boton.addEventListener('click', () => {
  contador++;

  resultado.textContent =
    `JavaScript funcionando correctamente. Prueba ${contador}`;
});
