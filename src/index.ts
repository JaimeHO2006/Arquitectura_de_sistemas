import express, { Request, Response } from "express";
import tasksRouter from "./routes/tasks.routes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "API funcionando correctamente 🚀" });
});

app.use("/api/tasks", tasksRouter);

app.use((req: Request, res: Response) => {
  res.status(404).json({ message: "Ruta no encontrada" });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});