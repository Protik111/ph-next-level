import { Model, Document } from "mongoose"

interface Publisher {
    name: String,
    location: String
}
interface Review {
    user: String,
    comment: String
}
export interface IBook extends Document{
    "title": String,
    "author": [String],
    "genre": String,
    "publicationYear": number,
    "publisher": Publisher
    "reviews": Review[]
    "rating": number,
    "price": String
    featured?: 'Popular' | 'BestSeller';
}

//for static method
export interface IBookModel extends Model<IBook> {
    getFeaturedBooks(): Promise<IBook[]>
}