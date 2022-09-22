import { v4 as uuidv4 } from 'uuid';
import httpStatus from '../constants/httpStatus.js';
import ErrorResponse from '../utils/errorResponse.js';
import asyncHandler from '../middleware/asyncHandler.js';
import connection from '../config/db.config.js';

const booksController = {};

// Create and Save a new book
booksController.createBook = asyncHandler(async (req, res, next) => {
  const { title, description, price, cover } = req.body;

  const q =
    'INSERT INTO books(`id`, `title`, `description`, `price`, `cover`) VALUES (?)';

  const values = [uuidv4(), title, description, price, cover];

  const createBook = await connection.query(q, [values]);

  if (createBook.affectedRows)
    return res
      .status(httpStatus.OK)
      .send({ message: 'Book created successfully' });
});

// List Books
booksController.listBooks = asyncHandler(async (req, res, next) => {
  let query = 'SELECT * FROM books';

  if (req.query.title)
    query = 'SELECT * FROM books WHERE title LIKE "%' + req.query.title + '%"';

  if (req.query.price)
    query = 'SELECT * FROM books WHERE price = ' + req.query.price;

  if (req.query.title && req.query.price)
    query =
      'SELECT * FROM books WHERE title LIKE "%' +
      req.query.title +
      '%" AND price = ' +
      req.query.price;

  const listBooks = await connection.query(query);

  return res.status(httpStatus.OK).send({ data: listBooks });
});

// Get Book
booksController.getBook = asyncHandler(async (req, res, next) => {
  let query = `SELECT * FROM books WHERE id = "${req.params.id}"`;

  const [book] = await connection.query(query);

  if (!book)
    return next(new ErrorResponse('Book not found', httpStatus.NOT_FOUND));

  return res.status(httpStatus.OK).send({ data: book });
});

// Update Book
booksController.updateBook = asyncHandler(async (req, res, next) => {
  const { title, description, price, cover } = req.body;

  const query =
    'UPDATE books SET `title`= ?, `description`= ?, `price`= ?, `cover`= ? WHERE id = ?';

  const values = [title, description, price, cover];

  const updateBook = await connection.query(query, [...values, req.params.id]);

  if (!updateBook.affectedRows)
    return next(new ErrorResponse('Book not found', httpStatus.NOT_FOUND));

  return res
    .status(httpStatus.OK)
    .send({ success: true, message: 'Book updated successfully' });
});

// Delete User
booksController.deleteBook = asyncHandler(async (req, res, next) => {
  const query = `DELETE FROM books WHERE id = "${req.params.id}"`;

  const deletedBook = await connection.query(query);

  if (deletedBook.affectedRows === 0)
    return next(new ErrorResponse('Book not found', httpStatus.NOT_FOUND));
  return res
    .status(httpStatus.OK)
    .send({ success: true, message: 'Book deleted successfully' });
});

export default booksController;
