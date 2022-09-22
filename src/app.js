import express from 'express';
import chalk from 'chalk';
import { PORT, NODE_ENV } from './loaders/config.js';
import mainRouter from './routes/index.js';
import errorHandler from './middleware/error.js';
globalThis.cl = console.log;
globalThis.warning = chalk.hex('#FFA500');

const app = express();

// Body parser
app.use(express.json());

// Mount Routes
app.use('/', mainRouter);

// Error Handler
app.use(errorHandler);

app.get('/', (req, res) => {
  res.send('API connected!');
});

app.listen(PORT, () =>
  cl(
    chalk.bold(
      warning(`🚀 Server is running in ${NODE_ENV} mode on port ${PORT}`)
    )
  )
);
