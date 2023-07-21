import express from 'express';
import { findBooks, findBooksByPublisher } from './book.controller';

const router = express.Router();

console.log('called');

router.get('/allBooks', findBooks);
router.get('/booksByPublisher', findBooksByPublisher);

export default router;
