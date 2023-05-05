const notFoundHandler = (req, res, next) => {
  res.status(404).json({
    error: {
      status: 404,
      message: "not found",
    },
  });
};

module.exports = notFoundHandler;
