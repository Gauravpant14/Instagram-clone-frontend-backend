import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import cardImg from "./../../assests/bg4.jpg";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
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

  const [isClicked, setClicked] = useState(false);
  const token = localStorage.getItem("token");
  const [modal, setModal] = useState(false);
  const [details, setDetail] = useState(null)
  const toggle = () => setModal(!modal);
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

  return (
    <>
      {token && (
        <>


          <div className="home">
            {allPost.map((e) => (
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
                    <a href="#modal1"  class = "modal-trigger">
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
                      {isClicked ? (
                        <AiFillHeart
                          size="ai-lg"
                          onClick={() => setClicked((e) => !e)}
                        />
                      ) : (
                        <AiOutlineHeart
                          size="ai-lg"
                          onClick={() => setClicked((e) => !e)}
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
                  <h6>{e.title}</h6>
                  <p>{e.body}</p>
                  <input type="text" placeholder="add a comment" />
                </div>
              </div>
            ))}

          </div>
          <Modal  details={details}/>              
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
