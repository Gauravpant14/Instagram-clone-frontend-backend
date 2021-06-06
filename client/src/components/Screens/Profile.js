import React, { useState, useEffect } from 'react'
import Pagination from "react-js-pagination";
import userDp from './../../assests/userDP.jpg'
import Gallary from '../../assests/Gallary.png'
import { FiSettings } from 'react-icons/fi';
import { useSelector, useDispatch } from "react-redux";
import { getAllDataApi } from "../../redux/actions/getAllPost";
import { Button } from 'bootstrap';
const Profile = () => {
    const allPost = useSelector(state => state.allPost.posts)
    const userID = localStorage.getItem("userId")
    const userData = allPost.filter((e) => e.postedBy._id.includes(userID))
    console.log(userData, "filtered Data");
    const [openImg, setOpenImg] = useState({
        open: false,
        data: null
    })
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostPerPage] = useState(3);
    const dispatch = useDispatch();
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = userData.slice(indexOfFirstPost, indexOfLastPost);
    const paginateTo = (pageNumber) => setCurrentPage(pageNumber)
    const handlePageClick = (e) => {
        paginateTo(e)
    }

    useEffect(() => {
        dispatch(getAllDataApi(localStorage.getItem("token")));
    }, []);

    const openSingle = (e) => {
        console.log(e, "chk");
        setOpenImg({
            open: true,
            data: e
        })
    }

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
                <Pagination
                    activePage={currentPage}
                    itemsCountPerPage={postsPerPage}
                    // prevPageText={
                    //   <FontAwesomeIcon icon={faChevronLeft} className="customIcon" />
                    // }
                    // nextPageText={
                    //   <FontAwesomeIcon icon={faChevronRight} className="customIcon" />
                    // }
                    totalItemsCount={userData.length}
                    pageRangeDisplayed={5}
                    onChange={(e) => handlePageClick(e)}
                />

                {openImg.open ? <ShowImg data={openImg.data} closeImg={setOpenImg} /> : null}

                <div className="gallary ">

                    {currentPosts.map((e) =>


                        <div className="gallary-imgs">
                            <div className="row-imgs">
                                <img src={e.photo} alt="" srcset="" onClick={() => openSingle(e)} />
                            </div>
                        </div>
                    )}


                </div>
            </div>



        </div>
    )
}

const ShowImg = ({ data, closeImg }) => {
    return (
        <div>
            <img src={data.photo} alt="" srcset="" height='500' width='100%' />
            <button onClick={() => closeImg({
                open: false
            })}>Close</button>
        </div>
    )
}

export default Profile
