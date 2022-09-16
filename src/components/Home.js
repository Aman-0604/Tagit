import React from 'react'
import Feed from './Feed';
import LeftContentHome from './LeftContentHome';
import MiddleContentTopFeedHome from './MiddleContentTopFeedHome';
import RightContentHome from './RightContentHome';

export default function Home() {
  return (
    <div className='container d-flex flex-row justify-content-center' style={{width:"85%",marginTop:"25px"}}>
        <div className="left_home_container d-flex justify-content-center" style={{width: "20%",height:"300px",padding:"10px",margin:"15px 10px",borderRadius:"10px",backgroundColor:"#212529",position:"sticky",top:"9%"}}>
            <LeftContentHome/>
        </div>
        <div className="middle_home_container d-flex flex-column justify-content-center" style={{width: "55%",padding:"10px",margin:"15px 10px"}}>
            <MiddleContentTopFeedHome/>
            <Feed/>
            <Feed/>
            <Feed/>
            <Feed/>
            <Feed/>
        </div>
        <div className="right_home_container d-flex justify-content-center" style={{width: "25%",height:"500px",padding:"10px",margin:"15px 10px",borderRadius:"10px",backgroundColor:"#212529",position:"sticky",top:"9%"}}>
            <RightContentHome/>
        </div>
    </div>
  )
}
