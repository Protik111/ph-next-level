import { Schema, model } from "mongoose";
import { IBook, IBookModel } from "./book.interface";

const bookSchema = new Schema<IBook, IBookModel>({
    title: {
        type: String,
        required: true
    },
    "author": {
        type: [String],
        required: true
    },
    "genre": {
        type: String,
        required: true
    },
    "publicationYear": {
        type: Number,
        required: true
    },
    "publisher": {
        type: {
            name: {
                type: String,
                required: true
            },
            location: {
                type: String,
                required: true
            }
        },
        required: true
    },
    "reviews": {
        type: [
            {
                user: {
                    type: String,
                    required: true,
                },
                comment: {
                    type: String,
                    required: true,
                },
            }
        ],
        default: []
    },
    "rating": {
        type: Number,
        required: true
    },
    "price": {
        type: String,
        required: true
    },

})


bookSchema.statics.getFeaturedBooks = async function getFeaturedBooks() {
    try {
        const featuredBooks = await this.find({ rating: { $gte: 4 } })

        // for (const book of featuredBooks) {
        //     if (book.rating >= 4) {
        //         book.featured = "BestSeller";
        //     } else {
        //         book.featured = "Popular";

        //     }
        //     await book.save()
        // }

        // Update the 'featured' property for each book
        for (const book of featuredBooks) {
            book.featured = book.rating >= 4 ? "BestSeller" : "Popular";
            await book.save();
        }

        return featuredBooks;
    } catch (error) {
        throw new Error("Error retrieving featured books" + error.message)
    }
}

// export const getFeaturedBooks = async (): Promise<IBook[]> => {
//     try {
//         // Find the featured books with a rating >= 4
//         const featuredBooks = await Book.find({ rating: { $gte: 4 } });

//         // Update the 'featured' property for each book
//         for (const book of featuredBooks) {
//             book.featured = book.rating >= 4 ? "BestSeller" : "Popular";
//             await book.save();
//         }

//         return featuredBooks;
//     } catch (error) {
//         throw new Error("Failed to get books");
//     }
// };
const Book = model<IBook, IBookModel>("Book", bookSchema)

export default Book;