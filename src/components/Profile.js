import "../styles/profile.css"
import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import Feed from './Feed';
import userContext from '../context/users/userContext';
import postContext from '../context/posts/postContext';

export default function Profile() {
  const user_detail = useContext(userContext);
  const { user, getUser } = user_detail;
  const getUserDetails = () => {
    getUser();
    return user;//returning and array
  }
  const posts_available = useContext(postContext);
  const { posts, getPosts } = posts_available;
  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      console.log(localStorage.getItem('token'));
      getPosts();
    }
    else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, [])//[]means sirf ek baar yeh function chalega
  let post_number = 0;
  return (
    <>
      <div className='container parentProfile flex-column align-items-center' style={{ color: "white", marginTop: "60px" }}>
        <div className="profile_picture_circle_profile_section d-flex justify-content-center align-items-center">
          <img src="../sample_dp.jpg" alt="profilePicture" />
        </div>
        <div className="user-intro mx-2 d-flex flex-column align-items-center">
          <p style={{ marginBottom: "0%", color: "white", fontSize: "25px" }}>{getUserDetails().name}</p>
          <p style={{ color: "#A0A2A4", fontSize: "18px", textAlign: "center" }}>{getUserDetails().status}</p>
        </div>
      </div>
      <div className='container parentProfile flex-column align-items-center' style={{ color: "white", marginTop: "15px" }}>
        <p>Your Posts</p>
      </div>
      <div className='container self-posts flex-column' style={{ color: "white", marginTop: "-5px" }}>
        <div>
          {posts.map((post) => {
            post_number += 1;
            return <Feed key={post_number} note_number={post_number} description={post.description} id={post._id} />
          })}
        </div>
      </div>
    </>
  )
}
