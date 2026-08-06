import express, { Request, Response } from "express";
import swaggerUi from "swagger-ui-express";
import tasksRouter from "./routes/tasks.routes";
import { swaggerSpec } from "./swagger";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON en el body de las peticiones
app.use(express.json());

// Ruta raíz, solo para confirmar que la API está viva
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "API funcionando correctamente 🚀" });
});

// Documentación automática de la API (Swagger UI)
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rutas del recurso "tasks"
app.use("/api/tasks", tasksRouter);

// Manejo de rutas no encontradas
app.use((req: Request, res: Response) => {
  res.status(404).json({ message: "Ruta no encontrada" });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log(`Documentación disponible en http://localhost:${PORT}/docs`);
});