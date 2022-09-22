import express from 'express';
import booksRoutes from './booksRoutes.js';

const apiRoutes = express.Router();

apiRoutes.use('/books', booksRoutes);

export default apiRoutes;
