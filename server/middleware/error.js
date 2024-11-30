exports.error = (error, req, res, next) => {
  console.log(error);
  const message = error.message || 'An error occured!';
  res.status(error.statusCode || 500).json({ message, error });
};
