import "../styles/middleContentTopFeedHome.css"
import React, { useState,useRef, useContext } from 'react'
import postContext from '../context/posts/postContext';
import alertContext from '../context/alerts/alertContext';


export default function MiddleContentTopFeedHome() {
        
  const alert_available = useContext(alertContext);
  const {showAlert}=alert_available;

  const [description, setDescription] = useState(null);
  const closeModal_ui = useRef(null);

  const posts_available = useContext(postContext);
  const { addPost } = posts_available;

  const onChange = (e) => {
    setDescription(e.target.value );// post ko hi update kar dega(... ka matlab) 
  }
  const submitPostHandler = (e) => {
    e.preventDefault();//so that page does not gets loaded
    addPost(description);
    console.log(description);
    closeModal_ui.current.click();
    showAlert("success", "Posted Successfuly");
  }
  return (
    <div className="main-feed d-flex flex-column justify-content-center" >
      <div className="sub_feed-1 d-flex flex-row ">
        <div className="profile_picture_circle d-flex justify-content-center align-items-center">
          <img src="../sample_dp.jpg" alt="profilePicture" />
        </div>
        <div className="share_post_box d-flex justify-content-center align-items-center">
          <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-outline-secondary" style={{ padding: "7px", width: "100%", borderRadius: "30px", border: '0.5px solid grey' }}>Start a post</button>

          {/* Modal */}
          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content" style={{ backgroundColor: "#212529" }}>
                <div className="modal-header" style={{ borderBottomColor: "rgba(255, 255, 255, 0.55)" }}>
                  <h5 className="modal-title" id="exampleModalLabel" style={{ color: "rgba(255, 255, 255, 0.55)" }}>Start a post</h5>
                  <button ref={closeModal_ui} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body" style={{ color: "rgba(255, 255, 255, 0.55)" }} >
                  <div className="input-group">
                    <textarea className="form-control" onChange={onChange} name='description' placeholder="Type something" style={{ backgroundColor: "#212529", borderColor: "rgba(255, 255, 255, 0.55)", color: "rgba(255, 255, 255, 0.55)" }}></textarea>
                  </div>
                </div>
                <div className="modal-footer" style={{ borderTopColor: "rgba(255, 255, 255, 0.55)" }}>
                  <button type="button" onClick={submitPostHandler} className="btn" style={{ color: "white", backgroundColor: "#212529", borderColor: "rgba(255, 255, 255, 0.55)" }}>Post</button>
                </div>
              </div>
            </div>
          </div>
          {/* Modal End */}

        </div>
      </div>
      <div className="sub_feed-2 d-flex flex-row justify-content-around mt-4">
        <div className='d-flex flex-row'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-image" viewBox="0 0 16 16">
            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
          </svg>
          <p>Photo</p>
        </div>
        <div className='d-flex flex-row'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-play-btn-fill" viewBox="0 0 16 16">
            <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
          </svg>
          <p>Video</p>
        </div>
        <div className='d-flex flex-row'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-blockquote-right" viewBox="0 0 16 16">
            <path d="M2.5 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11zm0 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6zm0 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6zm0 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11zm10.113-5.373a6.59 6.59 0 0 0-.445-.275l.21-.352c.122.074.272.17.452.287.18.117.35.26.51.428.156.164.289.351.398.562.11.207.164.438.164.692 0 .36-.072.65-.216.873-.145.219-.385.328-.721.328-.215 0-.383-.07-.504-.211a.697.697 0 0 1-.188-.463c0-.23.07-.404.211-.521.137-.121.326-.182.569-.182h.281a1.686 1.686 0 0 0-.123-.498 1.379 1.379 0 0 0-.252-.37 1.94 1.94 0 0 0-.346-.298zm-2.168 0A6.59 6.59 0 0 0 10 6.352L10.21 6c.122.074.272.17.452.287.18.117.35.26.51.428.156.164.289.351.398.562.11.207.164.438.164.692 0 .36-.072.65-.216.873-.145.219-.385.328-.721.328-.215 0-.383-.07-.504-.211a.697.697 0 0 1-.188-.463c0-.23.07-.404.211-.521.137-.121.327-.182.569-.182h.281a1.749 1.749 0 0 0-.117-.492 1.402 1.402 0 0 0-.258-.375 1.94 1.94 0 0 0-.346-.3z" />
          </svg>
          <p>Article</p>
        </div>
      </div>
    </div>
  )
}
