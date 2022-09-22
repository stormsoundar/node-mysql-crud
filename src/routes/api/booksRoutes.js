import express from 'express';
import booksController from '../../controllers/BooksController.js';

const router = express.Router();

router.post('/', booksController.createBook);
router.get('/', booksController.listBooks);
router.get('/:id', booksController.getBook);
router.patch('/:id', booksController.updateBook);
router.delete('/:id', booksController.deleteBook);

export default router;
