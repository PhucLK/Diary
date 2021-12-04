exports.errorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

  //duplicate
  if (err.statusCode === 11000) {
    err.statusCode = 400;
    for (let e in err.keyValue) {
      err.message = `${e} have to be unique !`;
    }
  }
  //ObjectId not found
  if (err.kind === "ObjectId") {
    err.statusCode = 404;
    err.message = `The ${req.ofiginalUrl} is not found because of wrong ID value`;
  }

  //Validation
  if (err.errors) {
    err.statusCode = 400;
    err.message = [];
    for (let e in err.errors) {
      err.message.push(err.errors[e].properties.message);
    }
  }

  // respon to client
  res.status(err.statusCode).json({
    status: "fail",
    message: err.message,
  });
};
