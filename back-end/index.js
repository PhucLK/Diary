require("dotenv").config();

// const Auth = require("./routes/auth");
// const Post = require("./routes/post");

const { connectDB } = require("./config/dbconnection");
const express = require("express");
const cors = require("cors");
const errorHandler = require("./middlewares/errorHandler");

const authController = require("./controllers/authController");
const postController = require("./controllers/postController");
const verifyToken = require("./middlewares/verifyToken");

const port = 5000; //process.env.APP_PORT;

const app = express();

//body parser
app.use(express.json());
//cors

// app.use(cors);

//Mount the route
//api/v1/auth/register
//api/v1/auth/login
//app.use('/api/v1/auth',authRouter)
// app.use("/api/v1/auth", Auth);
// app.use("/api/v1/post", Post);

// app.get("/", (request, respon, next) => {
//   respon.status(200).json({
//     status: " success",
//     data: {
//       posts: [],
//     },
//   });
// });

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", process.env.ORIGIN || "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

//connect DB
connectDB();

app.use(function (req, res, next) {
  //Enabling CORS
  res.header("Access-Control-Allow-Origin", "http://localhost:3000/");
  // res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"
  );
  next();
});
//user
app.post("/api/v1/auth/login", authController.login);
app.post("/api/v1/auth/register", authController.register);

//posts
app.get("/api/v1/post", verifyToken.verifyToken, postController.getAllPosts);
app.delete(
  "/api/v1/post/:postId",
  verifyToken.verifyToken,
  postController.deleteOnePost
);
app.post("/api/v1/post", verifyToken.verifyToken, postController.createOnePost);
app.put(
  "/api/v1/post/:postId",
  verifyToken.verifyToken,
  postController.updateOnePost
);

app.all("*", (req, res, next) => {
  const err = new Error("The route can not be found !");
  err.statusCode = 404;
  next(err);
});
app.use(errorHandler.errorHandler);

app.listen(port, () => {
  console.log("running on port " + port);
});
