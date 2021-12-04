import { React, useState } from "react";

export default function PostItem(props) {
  const [isDelete, setisDelete] = useState(false);
  const date = new Date(props.post.createdAt);
  const customDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;
  return (
    <div className="post-item">
      <p className="post-content">{props.post.content}</p>
      <div className="post-footer">
        <div className="post-infors">
          <span>Create by {props.post.author.name}</span>
          <span>Date: {customDate}</span>
        </div>
        <div className="post-actions">
          <span>Edit</span>
          <span
            onClick={() => {
              setisDelete(true);
            }}
          >
            Delete
          </span>
          {isDelete && (
            <div className="delete-confirm">
              <span className="text-confirm-delete">Are you sure?</span>
              <span>Yes</span>
              <span
                onClick={() => {
                  setisDelete(false);
                }}
              >
                No
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
