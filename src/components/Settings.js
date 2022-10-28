import "../styles/settings.css"
import React, { useEffect, useContext, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { storage } from '../firebase';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage'
import { v4 } from 'uuid';
import Feed from './Feed';
import userContext from '../context/users/userContext';
import postContext from '../context/posts/postContext';
import alertContext from '../context/alerts/alertContext';


export default function Settings() {
    const alert_available = useContext(alertContext);
    const { showAlert } = alert_available;

    const user_detail = useContext(userContext);
    const { user, getUser, updateUser } = user_detail;

    const posts_available = useContext(postContext);
    const { posts, getPosts } = posts_available;
    let navigate = useNavigate();

    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);

    const [profileUrl, setProfileUrl] = useState(null);
    const closeModal_ui = useRef(null);

    const [userProfile, setUserProfile] = useState("");
    const [userStatus, setUserStatus] = useState("");
    const [userCollege, setUserCollege] = useState("");

    const imageListRef = ref(storage, "posts/");
    const uploadImage = () => {
        showAlert("info", "Wait till the image gets updated");
        if (imageUpload === null) return;
        const imageRef = ref(storage, `posts/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            showAlert("success", "Image Updated");
            getDownloadURL(snapshot.ref).then((url) => {
                setProfileUrl(url);
                setUserProfile(url);
                console.log(profileUrl);
                // console.log(url);
                setImageUrls((prev) => [...prev, url]);
            });
        });
    }
    const updateProfile = (e) => {
        e.preventDefault();//so that page does not gets loaded
        updateUser(userStatus, userCollege, userProfile);
        closeModal_ui.current.click();
        showAlert("success", "Updated Successfuly");
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            // console.log(localStorage.getItem('token'));
            getPosts();
            getUser();
            listAll(imageListRef).then((response) => {
                response.items.forEach((item) => {
                    getDownloadURL(item).then((url) => {
                        setImageUrls((prev) => [...prev, url]);
                    });
                });
            })
        }
        else {
            navigate("/login");
        }
        // eslint-disable-next-line
    }, [])//[]means sirf ek baar yeh function chalega

    const handleUpChangeStatus = (event) => {
        setUserStatus(event.target.value);
        updateUser(userStatus, userCollege, userProfile);
        showAlert("success", "Updated Successfuly");
    }

    const handleUpChangeCollege = (event) => {
        setUserCollege(event.target.value);
        updateUser(userStatus, userCollege, userProfile);
        showAlert("success", "Updated Successfuly");
    }

    let post_number = 0;

    return (
        <>
            <div className='container parentSettings flex-column align-items-center' style={{ color: "white", marginTop: "60px" }}>
                <div className="profile_picture_circle_settings_section d-flex justify-content-center align-items-center">
                    <img src={user.profileUrl} alt="profilePicture" />
                </div>
                <div className="edit_option d-flex justify-content-center align-items-center">
                    <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-outline-secondary d-flex justify-content-center align-items-center" style={{ width: "30px", height: "30px", padding: "0px" }} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                        </svg>
                    </button>

                    {/* Modal */}
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content" style={{ backgroundColor: "#212529" }}>
                                <div className="modal-header" style={{ borderBottomColor: "rgba(255, 255, 255, 0.55)" }}>
                                    <button ref={closeModal_ui} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body" style={{ color: "rgba(255, 255, 255, 0.55)" }} >
                                    {/* Uploading image starts */}
                                    <div className="my-2 mx-2">
                                        <p style={{ color: "rgba(255, 255, 255, 0.55)" }}>Upload an image</p>
                                        {imageUpload && (
                                            <div>
                                                <img alt="Not Found" width={"250px"} src={URL.createObjectURL(imageUpload)} />
                                            </div>
                                        )}
                                        <br />
                                        <br />
                                        <input type="file" onChange={(event) => { setImageUpload(event.target.files[0]); }} />
                                        <button onClick={uploadImage} style={{ color: "black", border: "none" }}>Upload Image</button>
                                    </div>
                                    {/* Uploading image ends */}
                                </div>
                                <div className="modal-footer" style={{ borderTopColor: "rgba(255, 255, 255, 0.55)" }}>
                                    <button type="button" onClick={updateProfile} className="btn" style={{ color: "white", backgroundColor: "#212529", borderColor: "rgba(255, 255, 255, 0.55)" }}>Update</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Modal End */}
                </div>

                <div className="user-intro-settings mx-2 d-flex flex-column align-items-center">
                    <p style={{ marginBottom: "0%", color: "white", fontSize: "25px" }}>{user.name}</p>
                    <p style={{ color: "#A0A2A4", fontSize: "18px", textAlign: "center" }}>{user.status}</p>
                </div>
            </div>
            <div className='container parentSettings flex-column align-items-left justify-content-center' style={{ color: "white", marginTop: "15px" }}>
                <div className="input-group mb-3" style={{ border: "none" }}>
                    <span className="input-group-text" id="basic-addon1" style={{ backgroundColor: "#4a4a4a", border: "none", color: "white" }}>email</span>
                    <textarea defaultValue={user.email} className="form-control" placeholder={user.email} rows="1" aria-label="email" aria-describedby="basic-addon1" style={{ backgroundColor: "#5c5c5c", border: "none", color: "white" }} readOnly></textarea>
                </div>
                <div className="input-group mb-3" style={{ border: "none" }}>
                    <span className="input-group-text" id="basic-addon2" style={{ backgroundColor: "#4a4a4a", border: "none", color: "white" }}>status</span>
                    <textarea value={userStatus} onChange={handleUpChangeStatus} type="text" className="form-control" placeholder={user.status} rows="1" aria-label="status" aria-describedby="basic-addon2" style={{ backgroundColor: "#5c5c5c", border: "none", color: "white" }}></textarea>
                </div>
                <div className="input-group mb-3" style={{ border: "none" }}>
                    <span className="input-group-text" id="basic-addon3" style={{ backgroundColor: "#4a4a4a", border: "none", color: "white" }}>college</span>
                    <textarea value={userCollege} onChange={handleUpChangeCollege} type="text" className="form-control" placeholder={user.college} rows="1" aria-label="college" aria-describedby="basic-addon3" style={{ backgroundColor: "#5c5c5c", border: "none", color: "white" }}></textarea>
                </div>
            </div>
            <div className='container parentSettings flex-row align-items-center justify-content-center' style={{ color: "white", marginTop: "15px" }}>
                <div>Your Posts</div>
            </div>
            <div className='container self-posts-settings flex-column' style={{ color: "white", marginTop: "-5px" }}>
                <div>
                    {posts.map((post) => {
                        post_number += 1;
                        return <Feed key={post_number} note_number={post_number} description={post.description} imgUrl={post.imgUrl} id={post._id} />
                    }).reverse()}
                </div>
            </div>
        </>
    )
}
