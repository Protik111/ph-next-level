import express from 'express';
import { booksUpdateByYear, featuredBooks, findBooks, findBooksByPublisher } from './book.controller';

const router = express.Router();

console.log('called');

router.get('/allBooks', findBooks);
router.get('/booksByPublisher', findBooksByPublisher);
router.get('/getFeaturedBooks', featuredBooks)
router.patch('/bookUpdateByYear', booksUpdateByYear)

export default router;
