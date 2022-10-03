import "../styles/rightContentHome.css"
import React from 'react'

export default function RightContentHome() {
  return (
    <>
      <div className="parent_conatiner_right_content_home d-flex flex-column align-items-center">
        <div style={{ color: "white" }}>Ads</div>
        <div className="ads d-flex flex-column my-2">
          <div className="ad-1">
              <img src="../images/hostinger_ad.jpg" alt="hostinger_ad" />
          </div>
          <div className="ad-2 my-4">
              <img src="../images/coke_ad.jpg" alt="coke_ad" />
          </div>
        </div>
      </div>
    </>
  )
}
