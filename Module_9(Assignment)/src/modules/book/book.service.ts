import { IBook, IBookModel } from "./book.interface";
import Book from "./book.model";

export const getAllBooks = async (): Promise<IBook[]> => {
    const books = await Book.find({ genre: "Fantasy" });
    return books;
}

export const getBooksByPublisher = async (): Promise<IBook[]> => {
    const books = await Book.find({
        $and: [
            { genre: "Fantasy" },
            { "publisher.name": "Roli Books" }
        ]
    })

    return books;
}

export const getFeaturedBooks = async (): Promise<IBook[]> => {
    try {
        const featuredBooks = await Book.getFeaturedBooks();
        console.log('featuredBooks', featuredBooks);
        return featuredBooks;
    } catch (error) {
        throw new Error("Failed to get books")
    }
}

export const updateByYear = async (): Promise<void> => {
    try {
        // const books: IBook[] = await Book.find({
        //     $and: [
        //         { publicationYear: { $gt: 2020 } },
        //         { price: { $type: "string" } }
        //     ]
        // })

        // for(const book of books) {
        //     const convertedPrice: number = parseInt(book.price);

        //     await Book.findByIdAndUpdate(book._id, { $set: {price: convertedPrice} })
        // }

        const result = await Book.updateMany(
            {
                $and: [
                    { publicationYear: { $gt: 2010 } }, // Books published after 2010
                    { price: { $type: "string" } }, // Price field is of type 'string'
                ],
            },
            [
                {
                    $set: {
                        price: {
                            $toInt: "$price", // Convert 'price' to an integer
                        },
                    },
                },
            ]
        );

    } catch (error) {
        throw new Error("Failed to get books by year")
    }
}