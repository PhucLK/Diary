const Post = require("../models/Post");

const veryfyToken = require("../middlewares/verifyToken");

exports.getAllPosts = async (req, res, next) => {
  try {
    veryfyToken;
    //-_id :  eliminate
    // select("content createAt -_id") : property that need to select
    const posts = await Post.find({})
      .populate("author", "name")
      .select("content createdAt _id");
    res.status(200).json({
      status: "success",
      results: posts.length,
      data: { posts },
    });
  } catch (error) {
    next(error);
  }
};

exports.createOnePost = async (req, res, next) => {
  try {
    veryfyToken;
    const userId = req.user.userId;
    const post = await Post.create({ ...req.body, author: userId });
    res.status(200).json({
      status: "success",
      data: { post },
    });
  } catch (error) {
    next(error);
  }
};

exports.updateOnePost = async (req, res, next) => {
  try {
    // verify token before execute update
    veryfyToken;
    const postId = req.params;
    const post = await Post.findByIdAndUpdate(
      postId.postId,
      { ...req.body },
      { new: true, runValidate: true }
    );

    res.status(200).json({
      status: "success",
      data: { post },
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteOnePost = async (req, res, next) => {
  try {
    veryfyToken;
    const postId = req.params;
    const post = await Post.findByIdAndDelete(postId.userId);

    res.status(200).json({
      status: "success",
      message: "Post has been deleted",
    });
  } catch (error) {
    next(error);
  }
};
