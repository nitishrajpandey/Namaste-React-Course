// import React from 'react'

import { useContext } from "react";
import Post from "./Post";
import { PostContainerContext } from "../Store/Post-container-store";
import WelcomeMassage from "./WelcomeMassage";
import Loading from "./Loading";
function PostContainer() {
  const { postContainer, fetching } = useContext(PostContainerContext);

  return (
    <>
      {fetching && <Loading />}
      {!fetching && postContainer.length === 0 && <WelcomeMassage />}
      {!fetching &&
        postContainer.map((postItem) => (
          <Post key={postItem.id} postItem={postItem} />
        ))}
    </>
  );
}

export default PostContainer;
