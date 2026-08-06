export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export const tasks: Task[] = [
  {
    id: 1,
    title: "Aprender TypeScript",
    description: "Repasar tipos, interfaces y generics",
    completed: false,
  },
  {
    id: 2,
    title: "Configurar Express",
    description: "Levantar el servidor y las rutas base",
    completed: true,
  },
];

let nextId = 3;

export function getNextId(): number {
  return nextId++;
}