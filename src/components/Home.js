import React, { useEffect, useContext } from 'react'
import Feed from './Feed';
import LeftContentHome from './LeftContentHome';
import MiddleContentTopFeedHome from './MiddleContentTopFeedHome';
import RightContentHome from './RightContentHome';
import { useNavigate } from 'react-router-dom';
import postContext from '../context/posts/postContext';


export default function Home() {
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
    <div className='container d-flex flex-row justify-content-center' style={{ width: "85%", marginTop: "25px" }}>
      <div className="left_home_container d-flex justify-content-center" style={{ width: "20%", height: "300px", padding: "10px", margin: "15px 10px", borderRadius: "10px", backgroundColor: "#212529", position: "sticky", top: "9%" }}>
        <LeftContentHome />
      </div>
      <div className="middle_home_container d-flex flex-column" style={{ width: "55%", padding: "10px", margin: "15px 10px" }}>
        <MiddleContentTopFeedHome />
        <div>
          {posts.map((post) => {
            post_number += 1;
            return <Feed key={post_number} note_number={post_number} description={post.description} id={post._id}/>
          })}
        </div>
      </div>
      <div className="right_home_container d-flex justify-content-center" style={{ width: "25%", height: "500px", padding: "10px", margin: "15px 10px", borderRadius: "10px", backgroundColor: "#212529", position: "sticky", top: "9%" }}>
        <RightContentHome />
      </div>
    </div>
  )
}
