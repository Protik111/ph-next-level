import { IBook, IBookModel } from "./book.interface";
import Book from "./book.model";

export const getAllBooks = async(): Promise<IBook[]> => {
    const books = await Book.find({ genre: "Fantasy" });
    return books;
}

export const getBooksByPublisher = async(): Promise<IBook[]> => {
    const books = await Book.find({
        $and: [
            { genre: "Fantasy" },
            { "publisher.name":  "Roli Books"}
        ]
    })

    return books;
}

export const getFeaturedBooks = async(): Promise<IBook[]> => {
    const featuredBooks = await Book.getFeaturedBooks();
    console.log('featuredBooks',featuredBooks);
    return featuredBooks;
}