import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import cardImg from './../../assests/bg4.jpg'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa'
import { BiShare } from 'react-icons/bi'
import { BsThreeDots } from 'react-icons/bs'
import { getAllDataApi } from '../../redux/actions/getAllPost';
const Home = () => {
    const dispatch = useDispatch()
    const [isClicked, setClicked] = useState(false)


    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            setClicked(!isClicked)
        }
        dispatch(getAllDataApi())
    }, [])

    if (isClicked) {
        return (
            <>

                <div className="home">
                    {Array(5).fill().map(() => (<div className="card home-card">
                        <div className="user-name-home">
                            <div className="user-home">
                                <span style={{ "fontWeight": 600, "fontSize": "17px" }}> <strong>Gaurav Pant</strong> </span>
                            </div>
                            <div className="option-icon-container">
                                <div className="option-icon">
                                    <BsThreeDots size="bs-lg" onClick={() => alert("hello")} />
                                </div>

                            </div>
                        </div>
                        <div className="card-image">
                            <img src={cardImg} alt="" srcset="" />
                        </div>
                        <div className="card-content">
                            <div className="reaction-icons">
                                <div className="like-icon">
                                    {isClicked ? <AiFillHeart size="ai-lg" onClick={() => setClicked((e) => !e)} /> : <AiOutlineHeart size="ai-lg" onClick={() => setClicked((e) => !e)} />}
                                </div>
                                <div className="comment-icon">
                                    <FaRegComment size="fa-lg" />
                                </div>
                                <div className="share-icon">
                                    <BiShare size="bi-lg" />
                                </div>
                            </div>
                            <h6>
                                Title
                        </h6>
                            <p>
                                This is amazing post
                        </p>
                            <input type="text" placeholder="add a comment" />
                        </div>
                    </div>))}
                </div>
            </>

        )
    }

    return (
        <>
            <h1>User Must be LoggedIn </h1>
        </>
    )



}

export default Home
