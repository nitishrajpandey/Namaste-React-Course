// import React from 'react'

import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostContainerContext } from "../Store/Post-container-store";
import WelcomeMassage from "./WelcomeMassage";
import Loading from "./Loading";
function PostContainer() {
  const { postContainer, addInitialPost } = useContext(PostContainerContext);
  const [fetching, setFetching] = useState(false);

  // const handelOnClick = () => {
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitialPost(data.posts);
  //       console.log(data);
  //     });
  // };

  useEffect(() => {
    const controler = new AbortController();
    const signal = controler.signal;

    setFetching(true);
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.posts);
        setFetching(false);
      });

    return () => {
      controler.abort();
    };
  }, []);

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
