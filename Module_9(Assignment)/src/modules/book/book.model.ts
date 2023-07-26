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

        for(const book of featuredBooks) {
            if(book.rating >= 4) {
                book.featured = "BestSeller"
            } else {
                book.featured = "Popular"
            }
        }

        return featuredBooks;
    } catch (error) {
        throw new Error("Error retrieving featured books" + error.message)
    }
}

const Book = model<IBook, IBookModel>("Book", bookSchema)

export default Book;