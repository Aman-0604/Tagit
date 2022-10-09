import React, { useState } from "react";
import userContext from "./userContext";

const UserState = (props) => {
  const host = "http://localhost:8000";
  let userItem = [];
  const [user, setUser] = useState(userItem);

  //                                                                   Get user details
  const getUser = async () => {
    // API Calls
    let url = `${host}/api/auth/getUser`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      }
    });
    const json = await response.json();
    // console.log(json);
    setUser(json);
  }

  //                                                                   Update user details
  const updateUser = async (status, college) => {
    // API Calls
    let url = `${host}/api/auth/updateUser`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      },
      body: JSON.stringify({ status, college })
    });
    const json = await response.json();
    // console.log(json);
    const newUser = json;

    // Logic to update
    newUser.status = status;
    newUser.college = college;
    
    setUser(newUser);
  }

  return (
    <userContext.Provider value={{ user, getUser, updateUser }}>
      {props.children}
    </userContext.Provider>
  )
}

export default UserState;