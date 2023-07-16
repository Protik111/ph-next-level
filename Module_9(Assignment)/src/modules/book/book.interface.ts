interface Publisher {
    name: String,
    location: String
}
interface Review {
    user: String,
    comment: String
}
export interface IBook {
    "title": String,
    "author": [String],
    "genre": String,
    "publicationYear": number,
    "publisher": Publisher
    "reviews": Review[]
    "rating": number,
    "price": String
}