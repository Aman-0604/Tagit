import "../styles/settings.css"
import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import Feed from './Feed';
import userContext from '../context/users/userContext';
import postContext from '../context/posts/postContext';

export default function Settings() {
    const user_detail = useContext(userContext);
    const { user, getUser } = user_detail;

    const posts_available = useContext(postContext);
    const { posts, getPosts } = posts_available;
    let navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            // console.log(localStorage.getItem('token'));
            getPosts();
            getUser();
        }
        else {
            navigate("/login");
        }
        // eslint-disable-next-line
    }, [])//[]means sirf ek baar yeh function chalega

    // const [text, setText] = useState("");
    const handleUpChange = (event) => {
        // setText(event.target.value)
    }
    let post_number = 0;
    return (
        <>
            <div className='container parentSettings flex-column align-items-center' style={{ color: "white", marginTop: "60px" }}>
                <div className="profile_picture_circle_settings_section d-flex justify-content-center align-items-center">
                    <img src="../sample_dp.jpg" alt="profilePicture" />
                </div>
                <div className="user-intro-settings mx-2 d-flex flex-column align-items-center">
                    <p style={{ marginBottom: "0%", color: "white", fontSize: "25px" }}>{user.name}</p>
                    <p style={{ color: "#A0A2A4", fontSize: "18px", textAlign: "center" }}>{user.status}</p>
                </div>
            </div>
            <div className='container parentSettings flex-column align-items-left justify-content-center' style={{ color: "white", marginTop: "15px" }}>
                <div className="input-group mb-3" style={{border:"none"}}>
                    <span className="input-group-text" id="basic-addon1" style={{backgroundColor:"#4a4a4a",border:"none",color:"white"}}>email</span>
                    <textarea defaultValue={user.email} className="form-control" placeholder={user.email} rows="1" aria-label="email" aria-describedby="basic-addon1" style={{backgroundColor:"#5c5c5c",border:"none",color:"white"}} readOnly></textarea>
                </div>
                <div className="input-group mb-3" style={{border:"none"}}>
                    <span className="input-group-text" id="basic-addon2" style={{backgroundColor:"#4a4a4a",border:"none",color:"white"}}>status</span>
                    <textarea value={user.status} onChange={handleUpChange} type="text" className="form-control" placeholder={user.status} rows="1" aria-label="status" aria-describedby="basic-addon2" style={{backgroundColor:"#5c5c5c",border:"none",color:"white"}}></textarea>
                </div>
                <div className="input-group mb-3" style={{border:"none"}}>
                    <span className="input-group-text" id="basic-addon3" style={{backgroundColor:"#4a4a4a",border:"none",color:"white"}}>college</span>
                    <textarea value="" onChange={handleUpChange} type="text" className="form-control" placeholder="college" rows="1" aria-label="college" aria-describedby="basic-addon3" style={{backgroundColor:"#5c5c5c",border:"none",color:"white"}}></textarea>
                </div>
            </div>
            <div className='container parentSettings flex-row align-items-center justify-content-center' style={{ color: "white", marginTop: "15px" }}>
                <div>Your Posts</div>
            </div>
            <div className='container self-posts-settings flex-column' style={{ color: "white", marginTop: "-5px" }}>
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
