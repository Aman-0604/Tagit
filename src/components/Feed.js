import '../styles/feed.css';
import React, { useContext } from 'react'
import postContext from '../context/posts/postContext';
import userContext from '../context/users/userContext';


export default function Feed(props) {

    const posts_available = useContext(postContext);
    const { deletePost } = posts_available;

    const deletePostHandler = (e) => {
        e.preventDefault();//so that page does not gets loaded
        deletePost(props.id);
    }

    const user_detail = useContext(userContext);
    const { user, getUser } = user_detail;
    const getUserDetails = () => {
        getUser();
        return user;//returning and array
    }
    
    return (
        <div className="feed-area d-flex flex-column justify-content-center" style={{ width: "100%", marginTop: "10px", padding: "10px", borderRadius: "10px", backgroundColor: "#212529", color: "white" }}>
            <div className="card" style={{ backgroundColor: "#212529", border: "none" }}>
                <div className="card-body">
                    <div className="options d-flex flex-row justify-content-between align-items-center" style={{ height: "0px" }}>
                        <div className="person-reaction"><strong>Katrina Kaif</strong> liked this post.</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                        </svg>
                    </div>
                    <hr />
                    <div className="dropdown-options collapse" id='collapseExample'>
                        <ul>
                            <li onClick={deletePostHandler} className='delete-post'>Delete</li>
                            <li>Save</li>
                            <li>Report</li>
                        </ul>
                    </div>
                    {/* <div className="collapse" id="collapseExample" style={{ zIndex: "1", backgroundColor: "#212529" }}>
                        <div className="collapse card card-body form-text" style={{ backgroundColor: "#212529", border: "0.5px solid rgba(255, 255, 255, 0.55)", color: "rgba(255, 255, 255, 0.55)" }}>
                            <ul>
                                <li onClick={deletePostHandler} className='delete-post'>Delete</li>
                                <li>Save</li>
                                <li>Report</li>
                            </ul>
                        </div>
                    </div> */}
                    <div className="user-info d-flex flex-row justify-content-between">
                        <div className=' d-flex flex-row '>
                            <div className="profile_picture_circle d-flex justify-content-center align-items-center" style={{ width: '50px', height: '50px', marginLeft: "5px", border: '0.5px solid grey', borderRadius: '50px' }}>
                                <img src="../sample_dp.jpg" alt="" style={{ width: '50px', height: '50px', borderRadius: '50px' }} />
                            </div>
                            <div className="user-status mx-2">
                                <h5 style={{ marginBottom: "0%" }}>{getUserDetails().name}</h5>
                                <p>DTU'25 || Web Developer || MERN Stack</p>
                            </div>
                        </div>
                        <div>
                            <div className="follow-option d-flex flex-row">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                                <p style={{ paddingLeft: "5px" }}>Follow</p>
                            </div>
                        </div>
                    </div>
                    <div className="description-area my-2">
                        <p className="card-text">{props.description}</p>
                    </div>
                    <div className="image-area my-3">
                        <img src="../images/sample_image.jpg" className="card-img-top d-block" alt="..." />
                    </div>
                    <div className="reaction-section my-2 d-flex flex-row justify-content-evenly align-items-center" style={{ paddingTop: "2.5%", borderTop: "0.5px solid grey" }}>
                        <div className='d-flex flex-row'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                                <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                            </svg>
                            <p style={{ paddingLeft: "5px" }}>Like</p>
                        </div>
                        <div className='d-flex flex-row'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat" viewBox="0 0 16 16">
                                <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                            </svg>
                            <p style={{ paddingLeft: "5px" }}>Comment</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
