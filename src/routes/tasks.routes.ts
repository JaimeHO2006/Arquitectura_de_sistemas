import { Router, Request, Response } from "express";
import { tasks, getNextId, Task } from "../models/task";

const router = Router();

/**
 * @openapi
 * /api/tasks:
 *   get:
 *     summary: Obtener todas las tareas
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: Lista de tareas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'
 */
router.get("/", (req: Request, res: Response) => {
  res.status(200).json(tasks);
});

/**
 * @openapi
 * /api/tasks/{id}:
 *   get:
 *     summary: Obtener una tarea por id
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Id de la tarea
 *     responses:
 *       200:
 *         description: Tarea encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       404:
 *         description: Tarea no encontrada
 */
router.get("/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({ message: `Tarea con id ${id} no encontrada` });
  }

  res.status(200).json(task);
});

/**
 * @openapi
 * /api/tasks:
 *   post:
 *     summary: Crear una nueva tarea
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TaskInput'
 *     responses:
 *       201:
 *         description: Tarea creada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       400:
 *         description: Datos inválidos
 */
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

/**
 * @openapi
 * /api/tasks/{id}:
 *   put:
 *     summary: Reemplazar completamente una tarea
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TaskInput'
 *     responses:
 *       200:
 *         description: Tarea actualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       400:
 *         description: Datos inválidos
 *       404:
 *         description: Tarea no encontrada
 */
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

/**
 * @openapi
 * /api/tasks/{id}:
 *   patch:
 *     summary: Actualizar parcialmente una tarea
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               completed:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Tarea actualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       404:
 *         description: Tarea no encontrada
 */
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

/**
 * @openapi
 * /api/tasks/{id}:
 *   delete:
 *     summary: Eliminar una tarea
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Tarea eliminada
 *       404:
 *         description: Tarea no encontrada
 */
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