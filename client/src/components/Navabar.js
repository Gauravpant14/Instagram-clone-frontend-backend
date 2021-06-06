import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { BiLogOut } from "react-icons/bi";
import { Link,useHistory } from "react-router-dom";


const NavBar = () => {
  const state = useSelector((state) => state.signInReducer);
  const token = localStorage.getItem("token");
  const history = useHistory();
  const renderNavItems = () => {
    if (localStorage.getItem("token")) {
      return [
        <li>
          <Link to="/profile">Profile</Link>
        </li>,
        <li>
          <Link to="/createpost">Create Post</Link>
        </li>,

        <li onClick={() => logOut()}>
          {/* <span style={{ color: "black" }} > */}
            Log Out
          {/* </span> */}
        </li>,
      ];
    } else {
      return [
        <li>
          <Link to="/login">Login</Link>
        </li>,

        <li>
          {" "}
          <Link to="/signup">Sign up</Link>
        </li>,
      ];
    }
  };

  const logOut = () => {
    localStorage.clear("token");
    // window.location.reload();
    // return <Link to="/login" />;
    history.push("/login");
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
