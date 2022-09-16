import React, { useState } from "react";
import postContext from "./postContext";

const PostState = (props) => {
  const host = "http://localhost:8000";
  let postItem = [];
  const [posts, setPosts] = useState(postItem);
  //                                                                   Get all posts
  const getPosts = async () => {
    // API Calls
    let url = `${host}/api/posts/fetchAllPosts`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      }
    });
    const json = await response.json();
    console.log(json);
    setPosts(json);
  }

  //                                                                    Add a post
  const addPost = async (title, description, tag) => {
    // API Calls
    let url = `${host}/api/posts/addPosts`;
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({title,description,tag}),//will convert the object into type JSON
      headers: {
        "auth-token": localStorage.getItem("token"),
        "Content-Type": "application/json"
      }
    });
    const post = await response.json();
    setPosts(posts.concat(post)); //concat returns an array whereas push updates an array
  }


  //                                                                   Delete a post
  const deletePost = async (id) => {
    // API Calls
    let url = `${host}/api/posts/deletePosts/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      }
    });
    const json = await response.json();
    console.log(json);

    const newPosts = posts.filter((posts) => { return posts._id !== id });
    setPosts(newPosts);
  }

  //                                                                   Update a post
  const updatePost = async (id, title, description, tag) => {
    // API Calls
    let url = `${host}/api/posts/updatePosts/${id}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      },
      body: JSON.stringify({ title, description, tag })
    });
    const json = await response.json();
    console.log(json);

    let newPosts=JSON.parse(JSON.stringify(posts));
    // Logic to update
    for (let index = 0; index < newPosts.length; index++) {
      const element = newPosts[index];
      if (element._id === id) {
        newPosts[index].title = title;
        newPosts[index].description = description;
        newPosts[index].tag = tag;
        break;
      }
    }
    setPosts(newPosts);
  }


  return (
    <postContext.Provider value={{ posts, addPost, deletePost, updatePost, getPosts }}>
      {props.children}
    </postContext.Provider>
  )
}

export default PostState;