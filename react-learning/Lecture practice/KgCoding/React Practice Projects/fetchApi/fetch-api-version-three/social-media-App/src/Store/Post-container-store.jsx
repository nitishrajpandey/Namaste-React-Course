/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer, useState } from "react";

// create the context api
export const PostContainerContext = createContext({
  postContainer: [],
  addPost: () => {},
  fetching: false,
  deletePost: () => {},
});

// make a pure reducer function

const postContainerReducer = (currPostContainer, action) => {
  let newPostContainer = currPostContainer;

  if (action.type === "DELETE_POST") {
    newPostContainer = currPostContainer.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_Initial_POST") {
    newPostContainer = action.payload.posts;
  } else if (action.type === "ADD_NEW_POST") {
    newPostContainer = [action.payload, ...currPostContainer];
  }

  return newPostContainer;
};

// a container that cover app all component
const Postcontainerprovider = ({ children }) => {
  const [postContainer, dispatchPostContainer] = useReducer(
    postContainerReducer,
    []
  );
  const [fetching, setFetching] = useState(false);

  // all method define

  const addPost = (userId, postTitle, postContent, noOfReaction, hashTags) => {
    dispatchPostContainer({
      type: "ADD_NEW_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postContent,
        reactions: noOfReaction,
        userId: userId,
        tags: hashTags,
      },
    });
  };

  const addInitialPost = (posts) => {
    dispatchPostContainer({
      type: "ADD_Initial_POST",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostContainer({
      type: "DELETE_POST",
      payload: {
        postId: postId,
      },
    });
  };

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
    <PostContainerContext.Provider
      value={{
        postContainer: postContainer,
        addPost: addPost,
        addInitialPost: addInitialPost,
        fetching: fetching,
        deletePost: deletePost,
      }}
    >
      {children}
    </PostContainerContext.Provider>
  );
};
export default Postcontainerprovider;
