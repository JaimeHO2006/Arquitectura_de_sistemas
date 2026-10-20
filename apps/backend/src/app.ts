
import express from 'express';
import cors from 'cors';
import { crearEstadoAplicacion } from '@arqui/shared';

const app = express();

app.use(cors({
  origin: 'http://localhost:5173'
}));

app.use(express.json());

app.get('/api/status', (_req, res) => {
  const estado = crearEstadoAplicacion('Backend');
  res.json(estado);
});

export default app;
