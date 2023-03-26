const handleErrorResponse = (
  res,
  message = "Something went wrong",
  code = 500
) => {
  console.log("Error - ", message);
  res.status(code);
  res.send({ error: message });
};

module.exports = { handleErrorResponse };
