const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  // access authorization from req header
  const Authorization = req.header("authorization");
  if (!Authorization) {
    //
    const err = new Error("Unauthorized !");
    err.statusCode = 401;
    return next(err);
  }

  //get token
  // Baerer token
  const token = Authorization.replace("Bearer", "");

  //verify token
  const userId = jwt.verify(token, process.env.APP_SECRECT);
  //assign req
  req.user = userId;

  //go to controller
  next();
};
