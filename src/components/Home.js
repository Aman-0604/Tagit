import "../styles/home.css"
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
      // console.log(localStorage.getItem('token'));
      getPosts();
    }
    else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, [])//[]means sirf ek baar yeh function chalega
  let post_number = 0;
  return (
    <div className='container flex-row justify-content-center' >
      <div className="left_home_container justify-content-center" >
        <LeftContentHome />
      </div>
      <div className="middle_home_container flex-column" >
        <MiddleContentTopFeedHome />
        <div>
          {posts.map((post) => {
            post_number += 1;
            return <Feed key={post_number} note_number={post_number} description={post.description} imgUrl={post.imgUrl} id={post._id}/>
          })}
        </div>
      </div>
      <div className="right_home_container justify-content-center" >
        <RightContentHome />
      </div>
    </div>
  )
}
