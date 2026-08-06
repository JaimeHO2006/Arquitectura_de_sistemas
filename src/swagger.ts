import swaggerJSDoc from "swagger-jsdoc";

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "HW API - Tasks",
      version: "1.0.0",
      description:
        "API sencilla en TypeScript con Express para gestionar tareas (tasks). Proyecto del curso de Arquitectura de Sistemas.",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Servidor local",
      },
    ],
    components: {
      schemas: {
        Task: {
          type: "object",
          properties: {
            id: { type: "integer", example: 1 },
            title: { type: "string", example: "Aprender TypeScript" },
            description: {
              type: "string",
              example: "Repasar tipos, interfaces y generics",
            },
            completed: { type: "boolean", example: false },
          },
        },
        TaskInput: {
          type: "object",
          required: ["title"],
          properties: {
            title: { type: "string", example: "Nueva tarea" },
            description: { type: "string", example: "Descripcion de la tarea" },
            completed: { type: "boolean", example: false },
          },
        },
      },
    },
  },
  // Archivos donde swagger-jsdoc va a buscar los comentarios @openapi
  apis: ["./src/routes/*.ts"],
};

export const swaggerSpec = swaggerJSDoc(options);