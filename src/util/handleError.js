const handleErrorResponse = (
  res,
  message = "Internal server error",
  code = 500
) => {
  console.log("Error - ", message);
  res.status(code);
  res.send({ message: message });
};

module.exports = { handleErrorResponse };
