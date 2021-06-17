import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import cardImg from "./../../assests/bg4.jpg";
import { AiOutlineHeart, AiFillHeart, FiThumbsUp, FiThumbsDown } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { BiShare } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { getAllDataApi } from "../../redux/actions/getAllPost";
import { fetchSignInDataSuccess } from "../../redux/actions/signinAction";
import Skeleton from 'react-loading-skeleton';
import CommanModal from "../../comman/CommanModal";
import Modal from "../../comman/MaterialModal/Modal";
const Home = ({ history }) => {
  const location = useLocation();
  console.log(location);
  const dispatch = useDispatch();
  const allPost = useSelector(state => state.allPost.posts)
  const [data, setData] = useState([])
  const [isClicked, setClicked] = useState(false);
  const token = localStorage.getItem("token");
  const [modal, setModal] = useState(false);
  const [details, setDetail] = useState(null)
  const [likesNumber, setLikes] = useState();
  const toggle = () => setModal(!modal);

  useEffect(() => {
    setData(allPost)
  }, [allPost])

  useEffect(() => {
    if (token) {
      dispatch(getAllDataApi(token));


    } else {
      dispatch(fetchSignInDataSuccess(null));
      history.push("/login");
    }
  }, []);

  const deleteMe = (e) => {
    console.log(e)
    setModal((p) => !p)
    setDetail(e)

  }

  const likePost = async (id) => {
    console.log(id)
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

                      <AiFillHeart size="ai-lg" />



                      {/* {isClicked ? (
                        <AiFillHeart
                          size="ai-lg"
                          onClick={() => setClicked((e) => !e)}
                        />
                      ) : (
                        <AiOutlineHeart
                          size="ai-lg"
                          onClick={() => setClicked((e) => !e)}
                        />
                      )} */}
                    </div>
                    <div className="like-unlike">
                      <i class="material-icons" onClick={() => likePost(e._id)}>thumb_up</i>
                      <i class="material-icons" onClick={() => unlikePost(e._id)}>thumb_down</i>
                    </div>
                    <div className="comment-icon">
                      <FaRegComment size="fa-lg" />
                    </div>
                    <div className="share-icon">
                      <BiShare size="bi-lg" />
                    </div>
                  </div>
                  <h6>{e.likes.length} likes</h6>
                  <h6>{e.title}</h6>
                  <p>{e.body}</p>
                  <input type="text" placeholder="add a comment" />
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
