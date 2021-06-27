import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineHeart, AiFillHeart, FiThumbsUp, FiThumbsDown } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { BiShare } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { getAllDataApi } from "../../redux/actions/getAllPost";
import { fetchSignInDataSuccess } from "../../redux/actions/signinAction";

import Modal from "../../comman/MaterialModal/Modal";
import { allUsers, getAllUsersInfo } from "../../redux/actions/getAllUser";
const Home = ({ history }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const allPost = useSelector(state => state.allPost.posts)
  const allUsers = useSelector(state => state.getAllUserReducer.userInfo)
  const [data, setData] = useState([])
  const token = localStorage.getItem("token");
  const [details, setDetail] = useState(null)



  useEffect(() => {
    setData(allPost)
  }, [allPost])

  useEffect(() => {
    if (token) {
      dispatch(getAllDataApi(token));
      dispatch(getAllUsersInfo(token));
    } else {
      dispatch(fetchSignInDataSuccess(null));
      history.push("/login");
    }
  }, [dispatch, history, token]);

  const deleteMe = (e) => {
    setDetail(e)
  }

  const likePost = async (id) => {
    const response = await fetch('http://localhost:5000/like', {
      method: "put",
      headers: {
        "content-Type": "application/json",
        "Authorization": "Bearer" + token
      },
      body: JSON.stringify({
        postId: id
      })
    })
    const result = await response.json()
    const newData = data.map((item) => {
      if (item._id === result._id) {
        return result
      }
      else {
        return item
      }
    })
    setData(newData)
  }
  const unlikePost = async (id) => {
    console.log(id)
    const response = await fetch('http://localhost:5000/unlike', {
      method: "put",
      headers: {
        "content-Type": "application/json",
        "Authorization": "Bearer" + token
      },
      body: JSON.stringify({
        postId: id
      })
    })
    const result = await response.json()
    const newData = data.map((item) => {
      if (item._id === result._id) {
        return result
      }
      else {
        return item
      }
    })
    setData(newData)
  }

  const getLikerInfo = (likedBy) => {
  //filtering user id and name form all users based on liked Arrays id
   const likerInfo = allUsers.filter((e) => likedBy.includes(e.id))
   console.log(likerInfo)
  } 

  const makeComment = async(text,postId) => {
    console.log(postId)
    const response = await fetch('http://localhost:5000/comment',{
      method:"put",
      headers:{
        "content-Type": "application/json",
        "Authorization": "Bearer" + token
      },
      body:JSON.stringify({
        postId,
        text
      })          
    })
    console.log(response)
    const result = await response.json()
    const newData = data.map((item) => {
      if (item._id === result._id) {
        return result
      }
      else {
        return item
      }
    })
    setData(newData)
  }

  return (
    <>
      {token && (
        <>
          <div className="home">
            {data.map((e) => (
              <div className="card home-card" id={e._id}>
                <div className="user-name-home">
                  <div className="user-home">
                    <span style={{ fontWeight: 600, fontSize: "17px" }}>
                      {" "}
                      <strong>{e.postedBy.name}</strong>{" "}
                    </span>
                  </div>
                  <div className="option-icon-container">
                    <div className="option-icon">
                      <a href="#modal1" class="modal-trigger">
                        <BsThreeDots
                          size="bs-lg"
                          onClick={() => deleteMe(e)}
                        />
                      </a>

                    </div>
                  </div>
                </div>
                <div className="card-image">
                  <img src={e.photo} alt="" srcset="" height='300' width='300' />
                </div>
                <div className="card-content">
                  <div className="reaction-icons">
                    <div className="like-icon">

                      {e.likes.includes(localStorage.getItem("userId")) ? (
                        <AiFillHeart
                        size="ai-lg"
                        onClick={() => unlikePost(e._id)}
                      />
                      ) : (
                        <AiOutlineHeart
                        size="ai-lg"
                        onClick={() => likePost(e._id)}
                      />
                        
                        )}
                    </div>
                    <div className="comment-icon">
                      <FaRegComment size="fa-lg" />
                    </div>
                    <div className="share-icon">
                      <BiShare size="bi-lg" />
                    </div>
                  </div>
                  <h6 onClick={() => getLikerInfo(e.likes)}>{e.likes.length} likes</h6>
                  <h6>{e.title}</h6>
                  <p>{e.body}</p>
                  {
                    e.comments.map((data) => {
                      return (
                        <h6><span><strong>{data.postedBy.name}</strong> : </span>{data.text}</h6>
                      )
                    })
                  }
                  <form onSubmit={(event) => {
                    event.preventDefault()
                    makeComment(event.target[0].value,e._id)
                  }}>
                   <input type="text" placeholder="add a comment" />
                  </form>
                 
                </div>
              </div>
            ))}

          </div>
          <Modal details={details} />
          {/* <CommanModal toggle={toggle} modal={modal} details={details} /> */}
        </>
      )}
      {/* {!token && (
        <div>
          <h2>User Must Logged IN</h2>
        </div>
      )} */}
    </>
  );
};

export default Home;
