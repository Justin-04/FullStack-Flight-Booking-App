import React from 'react'
import './Profile.css'
const Profile = () => {
  return (
    <div>
        <div className="profile-container">
        <div className="profile-left-section">
          <div className="profile-data">
            {/* <img src={userLogo} alt="" /> */}
            <span>Username: Justin</span>
          </div>
        </div>
        <div className="profile-right-section">
          <center>
            <h3>Information</h3>
          </center>
          <div className="email">
            <span
              style={{
                borderBottom: " 2px solid black",
                width: "50px",
                fontWeight: "600",
              }}
            >
              Email:
            </span>
            <span>chahine.justin@gmail.com</span>
          </div>
          <div className="phone">
            <span
              style={{
                borderBottom: " 2px solid black",
                width: "60px",
                fontWeight: "600",
              }}
            >
              Phone:
            </span>
            <span>71778692</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
