import React, { useState, useEffect } from 'react'
import { FiSettings } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
const UserProfile = () => {
    const {id} = useParams();
    console.log(id,"id of param")
    return (
            <div className="profile-container">
                <div className="profile-header">
                    <div className="left-profile-pic">
                        {/* <img src={userDp} alt="user-dp" /> */}
                    </div>
                    <section className="right-profile-info">
                        <div className="user-name-sec">
                            <div className="user-name">
                                <h5>USER NAME</h5>
                            </div>

                            <div className="edit-profile">
                                <span className="edit-profile-btn">Edit Profile</span>

                            </div>
                            <div className="setting-icon">
                                <span className="setting-icon-btn">
                                    <div className="custom-icon">
                                        <FiSettings size="fi-lg" />
                                    </div>

                                </span>
                            </div>
                        </div>
                        <div className="post-info">
                            <ul>
                                <li><span><strong>186</strong> posts</span></li>
                                <li><span><strong>186</strong>  followers</span></li>
                                <li><span><strong>186</strong>  following</span></li>

                            </ul>
                        </div>
                        <div className="user-description-container">
                            <strong style={{ "font-weight": 600, "font-size": "17px" }}>User Name</strong>
                            <div className="user-description">
                               
                         
                            </div>

                        </div>
                    </section>
                </div>
               </div> 
              ) 
} 

export default UserProfile
