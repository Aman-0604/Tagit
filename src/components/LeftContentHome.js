import "../styles/leftContentHome.css"
import React, { useContext,useEffect } from 'react'
import userContext from '../context/users/userContext';
import { Link } from "react-router-dom";

export default function LeftContentHome() {
  const user_detail = useContext(userContext);
  const { user,getUser } = user_detail;

  useEffect(() => {
    getUser();
    // eslint-disable-next-line
  }, [])//[]means sirf ek baar yeh function chalega

  return (
    <>
      <div className="parent_container_left_content_home d-flex flex-column align-items-center">
        <div style={{ color: "white" }}>
          <p>Profile</p>
        </div>
        <div className="profile_picture_circle_left_content_home d-flex justify-content-center align-items-center">
          <img src={user.profileUrl} alt="profilePicture" />
        </div>
        <div className="user-status mx-2 my-2 d-flex flex-column align-items-center">
          <p style={{ marginBottom: "0%", color: "white", fontSize: "18px" }}>{user.name}</p>
          <p style={{color: "#A0A2A4",fontSize: "14px", textAlign:"center" }}>{user.status}</p>
        </div>
        <div className="profile_options_menu">
          <p style={{ textAlign:"center" }}><Link to="/profile">My Posts</Link></p>
          <p style={{ textAlign:"center" }}><Link to="/">Saved items</Link></p>
        </div>
      </div>
    </>
  )
}
