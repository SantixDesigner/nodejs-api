 function logErrors(err, req, res, next) {
  console.error(err);
  next(err);
}

 function errorHandler(err, req, res, next) {
  console.log('errorHandler');
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

 function BoomErrorHandler(err, req, res, next) {
  console.log('errorHandler');
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload)
  }
  else {
    next(err);
  }
}

module.exports = {
  logErrors,
  errorHandler,
  BoomErrorHandler
}
