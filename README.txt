
API REST construida con **Node.js + Express + TypeScript**, sin conexión a base de datos 


Requisitos previos

- Node.js 18 o superior
- npm

Instalación

1. Clonar el repositorio y moverse a la rama `hw-01`:


   git clone https://github.com/JaimeHO2006/Arquitectura_de_sistemas.git
   cd Arquitectura_de_sistemas
   git checkout hw-01


2. Instalar las dependencias:
   npm install


Ejecución

npx tsc
node dist/index.js


Si todo salió bien, verás en la consola:

Servidor corriendo en http://localhost:3000

 Probar con Postman

1. Crea una nueva request con el método y URL de la tabla de endpoints.
2. Para POST, PUT y PATCH: en la pestaña Body, selecciona raw y cambia el tipo a JSON, luego pega el body de ejemplo correspondiente.
3. Presiona Send y verifica el código de respuesta y el JSON devuelto.