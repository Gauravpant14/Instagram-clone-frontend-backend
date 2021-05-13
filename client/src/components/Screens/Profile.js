import React from 'react'
import userDp from './../../assests/userDP.jpg'
import Gallary from '../../assests/Gallary.png'
import { FiSettings } from 'react-icons/fi';
const Profile = () => {
    return (
        <div>
            <div className="profile-container">
                <div className="profile-header">
                    <div className="left-profile-pic">
                        <img src={userDp} alt="user-dp" />
                    </div>
                    <section className="right-profile-info">
                        <div className="user-name-sec">
                            <div className="user-name">
                                <h5>gauravpant14</h5>
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
                            <strong style={{ "font-weight": 600, "font-size": "17px" }}>Gaurav Pant</strong>
                            <div className="user-description">
                            <span>🔥I'm standing up 💯
                                <br />🔥I'mma face my demons 👊
                                <br />🔥I'm manning up ☠️
                                <br />🔥I'mma hold my ground 🇮🇳
                                <br />🏡 Uttarakhand 🏞️🏞️🏞️
                            </span>
                            </div>
                           
                        </div>
                    </section>
                </div>
                <div className="gallary ">
                    {Array(9).fill().map(() =>

                        <div className="gallary-imgs">
                            <div className="row-imgs">
                                <img src={Gallary} alt="" srcset="" />
                            </div>

                        </div>
                    )}


                </div>
            </div>


        </div>
    )
}

export default Profile
