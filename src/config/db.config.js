import mysql from 'mysql';
import util from 'util';
import chalk from 'chalk';
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } from '../loaders/config.js';

const poolConnection = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

// Ping database to check for common exception errors.
poolConnection.getConnection((err, connection) => {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST')
      cl(chalk.bold(chalk.red('Database connection was closed: ' + err.code)));

    if (err.code === 'ECONNREFUSED')
      cl(chalk.bold(chalk.red('Database connection was refused')));
  }

  if (connection) {
    cl(chalk.bold(chalk.cyan('Database connected successfully!')));
    connection.release();
  }

  return;
});

// promise wrapper to enable async await with MYSQL
poolConnection.query = util.promisify(poolConnection.query);

export default poolConnection;
