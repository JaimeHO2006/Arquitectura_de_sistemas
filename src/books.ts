export interface Book {
    id: number;
    title: string;
    author: string;
    year: number;
    borrowed: boolean;
}

export const books: Book[] = [
    {
        id: 1,
        title: "Cien años de soledad",
        author: "Gabriel García Márquez",
        year: 1967,
        borrowed: false
    },
    {
        id: 2,
        title: "1984",
        author: "George Orwell",
        year: 1949,
        borrowed: true
    },
    {
        id: 3,
        title: "El principito",
        author: "Antoine de Saint-Exupéry",
        year: 1943,
        borrowed: false
    }
];
