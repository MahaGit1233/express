const sendErrorResponse = (res, err) => {
  let statusCode = err.statusCode;
  let message = err.message;

  return res.status(statusCode).json({
    message: message,
    status: false,
  });
};

module.exports = {
  sendErrorResponse,
};
