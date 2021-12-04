import { React, useCallback, useEffect, useContext } from "react";
import "../css/Post.css";
import axios from "axios";
import AppContext from "../context/AppContext";
import PostItem from "./PostItem";

export default function PostList() {
  const { state, dispatch } = useContext(AppContext);
  const getAllPosts = useCallback(async () => {
    try {
      const option = {
        method: "get",
        url: "/api/v1/post",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization:
            "BearereyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTk5MTJmODM2OTgyYmM5MzNhNWYwOWIiLCJpYXQiOjE2Mzc0Nzc1MTJ9.GYOqjnHWXzggkxYSxg0VXNzqJpifnSXAX_XSsFJSk4Y",
        },
      };
      const response = await axios(option);
      const posts = response.data.data.posts;
      //console.log(posts);
      dispatch({ type: "GET_ALL_POSTS", payload: { posts } });
    } catch (error) {
      console.log("EEERRRR");
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getAllPosts();
  }, []);
  const posts = state.posts;
  console.log("not null ");
  //console.log(state)
  if (posts == null) {
    console.log("NULL");
    //console.log(state)
  }
  //console.log(posts);
  let postItems;
  postItems =  posts.posts
    ? posts.posts.map((post, index) => <PostItem post={post} key={index} />)
    : null;
  return (
    <section className="post-list">
      {postItems}
      {/* <div className="post-item">
        <p className="post-content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea id
          voluptas iste corrupti doloribus neque dolorum minima aperiam alias
          praesentium dolores ad fugit, deserunt error porro hic sed fuga quo.
        </p>
        <div className="post-footer">
          <div className="post-infors">
            <span>Create by LK</span>
            <span>Date 30/11/2021</span>
          </div>
          <div className="post-actions">
            <span>Edit</span>
            <span>Delete</span>
            <span className="delete-confirm">Are you sure?</span>
            <span>Yes</span>
            <span>No</span>
          </div>
        </div>
      </div> */}
      {/* <form class="form">
          <textarea
            type="text"
            value=""
            placeholder="How's your day?"
            class="content"
          >
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia officia eaque vero ipsum reiciendis similique tempora quaerat quam, est hic. Nisi eligendi dicta eius est ab atque! Molestiae, ipsum eligendi.</textarea
          >
          <div class="btn-container">
            <button type="submit" class="btn">Update</button>
            <button type="submit" class="btn">Cancel</button>
          </div>
        </form> */}
    </section>
  );
}
