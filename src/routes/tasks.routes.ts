import { Router, Request, Response } from "express";
import { tasks, getNextId, Task } from "../models/task";

const router = Router();

// GET /api/tasks -> obtener todas las tareas
router.get("/", (req: Request, res: Response) => {
  res.status(200).json(tasks);
});

// GET /api/tasks/:id -> obtener una tarea por id
router.get("/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({ message: `Tarea con id ${id} no encontrada` });
  }

  res.status(200).json(task);
});

// POST /api/tasks -> crear una nueva tarea
router.post("/", (req: Request, res: Response) => {
  const { title, description, completed } = req.body;

  if (!title || typeof title !== "string") {
    return res.status(400).json({ message: "El campo 'title' es obligatorio y debe ser texto" });
  }

  const newTask: Task = {
    id: getNextId(),
    title,
    description: description ?? "",
    completed: completed ?? false,
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// PUT /api/tasks/:id -> reemplazar completamente una tarea
router.put("/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const index = tasks.findIndex((t) => t.id === id);

  if (index === -1) {
    return res.status(404).json({ message: `Tarea con id ${id} no encontrada` });
  }

  const { title, description, completed } = req.body;

  if (!title || typeof title !== "string") {
    return res.status(400).json({ message: "El campo 'title' es obligatorio y debe ser texto" });
  }

  const updatedTask: Task = {
    id,
    title,
    description: description ?? "",
    completed: completed ?? false,
  };

  tasks[index] = updatedTask;
  res.status(200).json(updatedTask);
});

// PATCH /api/tasks/:id -> actualizar parcialmente una tarea
router.patch("/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({ message: `Tarea con id ${id} no encontrada` });
  }

  const { title, description, completed } = req.body;

  if (title !== undefined) task.title = title;
  if (description !== undefined) task.description = description;
  if (completed !== undefined) task.completed = completed;

  res.status(200).json(task);
});

// DELETE /api/tasks/:id -> eliminar una tarea
router.delete("/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const index = tasks.findIndex((t) => t.id === id);

  if (index === -1) {
    return res.status(404).json({ message: `Tarea con id ${id} no encontrada` });
  }

  tasks.splice(index, 1);
  res.status(204).send();
});

export default router;