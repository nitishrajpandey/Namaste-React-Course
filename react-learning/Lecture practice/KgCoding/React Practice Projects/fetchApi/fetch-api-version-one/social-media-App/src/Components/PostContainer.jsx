// import React from 'react'

import { useContext } from "react";
import Post from "./Post";
import { PostContainerContext } from "../Store/Post-container-store";
import WelcomeMassage from "./WelcomeMassage";
function PostContainer() {
  const { postContainer, addInitialPost } = useContext(PostContainerContext);

  const handelOnClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.posts);
        console.log(data);
      });
  };
  console.log(postContainer);
  return (
    <>
      {postContainer.length === 0 && (
        <WelcomeMassage onClickButton={handelOnClick} />
      )}
      {postContainer.map((postItem) => (
        <Post key={postItem.id} postItem={postItem} />
      ))}
    </>
  );
}

export default PostContainer;
