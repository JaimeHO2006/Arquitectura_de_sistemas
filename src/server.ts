import express from "express";
import { books, Book } from "./books";

const app = express();

const PORT = 3000;
app.use(express.json());

// GET /books

app.get("/books", (req, res) => {
    res.status(200).json(books);
});

// POST /books

app.post("/books", (req, res) => {

    // Validar que el cuerpo sea JSON
    if (!req.is("application/json")) {
        return res.status(415).json({
            error: "El cuerpo de la solicitud debe ser JSON"
        });
    }

    const { title, author, year, borrowed } = req.body;

    // Validar campos obligatorios
    if (!title || !author || !year) {
        return res.status(400).json({
            error: "Los campos title, author y year son obligatorios"
        });
    }

    const newBook: Book = {
        id: books.length + 1,
        title,
        author,
        year,
        borrowed: borrowed ?? false
    };

    books.push(newBook);

    res.status(201).json(newBook);
});

// GET /health/fitness

app.get("/health/fitness", (req, res) => {

    const totalBooks = books.length;

    const borrowedBooks = books.filter(
        book => book.borrowed
    ).length;

    const borrowedRatio = totalBooks === 0
        ? 0
        : borrowedBooks / totalBooks;

    const capacityHealthy = totalBooks <= 100;

    const ratioHealthy = borrowedRatio < 0.80;

    const healthy = capacityHealthy && ratioHealthy;

    const report = {
        status: healthy
            ? "Healthy"
            : "Degradacion de Calidad",

        metrics: {
            totalBooks,
            borrowedBooks,
            borrowedRatio: Number((borrowedRatio * 100).toFixed(2)),
            capacityLimit: 100,
            borrowedRatioLimit: 80
        },

        rules: {
            capacity: capacityHealthy,
            borrowedRatio: ratioHealthy
        }
    };

    if (healthy) {
        return res.status(200).json(report);
    }

    return res.status(503).json(report);
});

// Iniciar servidor

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});