import React from 'react'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" style={{ width: '100%' }}>
            <div className="container-fluid" style={{marginRight:"125px", marginLeft:"125px"}}>
                <a className="navbar-brand" href="/"><img src="../tagit_logo.png" alt="" width="30" height="24" className="d-inline-block align-text-top" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                    <div className='d-flex'>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <form class="d-flex" role="search">
                                <input class="form-control me-2 form-control-sm" type="search" placeholder="&#128269; Search" aria-label="Search" style={{width:"225px",background:"transparent",border:"1px solid #808080",color:"whitesmoke"}}/>
                            </form>
                        </ul>
                    </div>
                    <div className='d-flex'>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" style={{ fontSize: "18px" }} href="/">Scope</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ fontSize: "18px" }} href="/">Community</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ fontSize: "18px" }} href="/">Notification</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ fontSize: "18px" }} href="/">Chat</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ fontSize: "18px" }} href="/">Profile</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
