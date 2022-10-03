import "../styles/leftContentHome.css"
import React from 'react'

export default function LeftContentHome() {
  return (
    <>
      <div className="parent_container_left_content_home d-flex flex-column align-items-center">
        <div style={{ color: "white" }}>
          <p>Profile</p>
        </div>
        <div className="profile_picture_circle_left_content_home d-flex justify-content-center align-items-center">
          <img src="../sample_dp.jpg" alt="profilePicture" />
        </div>
        <div className="user-status mx-2 my-2 d-flex flex-column align-items-center">
          <p style={{ marginBottom: "0%", color: "white", fontSize: "18px" }}>Aman Gupta</p>
          <p style={{color: "#A0A2A4",fontSize: "14px", textAlign:"center" }}>DTU'25 || Web Developer || MERN Stack</p>
        </div>
        <div className="profile_options_menu">
          <p style={{ textAlign:"center" }}>My Posts</p>
          <p style={{ textAlign:"center" }}>Saved items</p>
        </div>
      </div>
    </>
  )
}
