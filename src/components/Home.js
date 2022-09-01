import React from 'react'
import Left_Content_Home from './Left_Content_Home';
import Middle_Content_Top_Feed_Home from './Middle_Content_Top_Feed_Home';
import Right_Content_Home from './Right_Content_Home';

export default function Home() {
  return (
    <div className='container d-flex flex-row justify-content-center' style={{width:"85%",marginTop:"60px"}}>
        <div className="left_home_container d-flex justify-content-center" style={{width: "20%",padding:"10px",margin:"15px 10px",borderRadius:"10px",backgroundColor:"#212529"}}>
            <Left_Content_Home/>
        </div>
        <div className="middle_home_container d-flex justify-content-center" style={{width: "55%",padding:"10px",margin:"15px 10px"}}>
            <Middle_Content_Top_Feed_Home/>
        </div>
        <div className="right_home_container d-flex justify-content-center" style={{width: "25%",padding:"10px",margin:"15px 10px",borderRadius:"10px",backgroundColor:"#212529"}}>
            <Right_Content_Home/>
        </div>
    </div>
  )
}
