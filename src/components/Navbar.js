import React,{useContext} from 'react'
import '../styles/navbar.css';
import { Link, useLocation } from "react-router-dom";
import alertContext from '../context/alerts/alertContext';


export default function Navbar() {
      
    const alert_available = useContext(alertContext);
    const {showAlert}=alert_available;

    let location = useLocation();//useLocation is used when we want to do something when location is change for eg. from / to /about
    const logoutHandler = () => {
        localStorage.removeItem('token');
        showAlert("success", "Logout Successful");
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" style={{ width: '100%', borderBottom: "0.5px solid grey" }}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img src="../tagit_logo.png" alt="" width="30" height="24" className="d-inline-block align-text-top" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                    <div className='d-flex'>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <form className="d-flex" role="search">
                                <input className="form-control me-2 form-control-sm" type="search" placeholder="&#128269; Search" aria-label="Search" style={{ width: "225px", background: "transparent", border: "1px solid #808080", color: "whitesmoke" }} />
                            </form>
                        </ul>
                    </div>
                    <div className='d-flex'>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} style={{ fontSize: "18px" }} to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/community" ? "active" : ""}`} style={{ fontSize: "18px" }} to="/community">Community</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/notification" ? "active" : ""}`} style={{ fontSize: "18px" }} to="/notification">Notification</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/chat" ? "active" : ""}`} style={{ fontSize: "18px" }} to="/chat">Chat</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className={`nav-link dropdown-toggle ${location.pathname === "/profile" ? "active" : ""}`} style={{ fontSize: "18px" }} to="/profile" role="button" data-bs-toggle="dropdown" aria-expanded="false">Profile</Link>
                                <ul className="dropdown-menu" style={{backgroundColor: "#212529"}}>
                                    <li><Link className="dropdown-item" to="/profile" style={{color : "white"}}>View Profile</Link></li>
                                    <li><Link className="dropdown-item" to="/" style={{color : "white"}}>Settings</Link></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><Link className='dropdown-item' to="/login"><button type="button" onClick={logoutHandler} className="btn" style={{ backgroundColor: "#212529", color: "white", marginLeft:"-10px" }}>Logout</button></Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
