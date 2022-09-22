const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message ? err.message : err.sqlMessage;

  cl('err: ', err);

  return res.status(err.statusCode || 500).send({
    success: false,
    error: error.message || 'Server Error',
  });
};

export default errorHandler;
