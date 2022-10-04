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
  return (
    <userContext.Provider value={{ user, getUser }}>
      {props.children}
    </userContext.Provider>
  )
}

export default UserState;