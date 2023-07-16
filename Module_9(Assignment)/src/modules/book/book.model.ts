import { Schema, model } from "mongoose";
import { IBook } from "./book.interface";

const bookSchema = new Schema<IBook>({
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

const Book = model<IBook>("Book", bookSchema)

export default Book;