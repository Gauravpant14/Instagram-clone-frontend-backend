import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {useDispatch} from 'react-redux'
import { BiLogOut } from "react-icons/bi";
import { Link,useHistory } from "react-router-dom";
import { logoutSuccess } from "../redux/actions/getAllPost";


const NavBar = () => {
  const [isLogout,setLogout] = useState(false);
  const [isToken,setIsToken] = useState(true)
  const state = useSelector((state) => state.signInReducer);
  const dispatch = useDispatch()
  const token = localStorage.getItem("token");
  useEffect(() => {
    setIsToken(true)
  },[])
 useEffect(() => {
   
   if(isLogout){
     setIsToken(false)
   }
 }, [isLogout])
  const history = useHistory();
  const renderNavItems = () => {
    if (token ) {
      return (
        <>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/createpost">Create Post</Link>
        </li>

        <li onClick={() => logOut()}>
          <span style={{ color: "black" }} >
            Log Out
          </span>
        </li>
        </>
      )
    } 

    if(!token){
      return (
        <>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          {" "}
          <Link to="/signup">Sign up</Link>
        </li>
        </>
      )
    }
  };

  const logOut = () => {
    setLogout(true)
    setIsToken(false)
    localStorage.clear("token");
    
    // window.location.reload();
    // return <Link to="/login" />;
    if(!localStorage.getItem("token")){
      history.push("/login");
    }
   
  };
  return (
    <nav>
      <div className="nav-wrapper white">
        <Link to="/" className="brand-logo left">
          Instagram
        </Link>
        <ul id="nav-mobile" className="right">
          {renderNavItems()}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
