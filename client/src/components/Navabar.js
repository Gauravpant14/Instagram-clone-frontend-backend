import React, { useState, useEffect } from "react";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
const NavBar = ({ history }) => {
  const [isVerified, setVerification] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setVerification((e) => !e);
    }
  }, []);
 
  const logOut = () => {
    localStorage.clear("token");
    window.location.reload();
    // history.push("/login");
  };
  return (
    <nav>
      <div className="nav-wrapper white">
        <Link to="/" className="brand-logo left">
          Instagram
        </Link>
        <ul id="nav-mobile" className="right">
          <li>
            <Link to="/createpost">Create Post</Link>
          </li>

          {isVerified ? (
            ""
          ) : (
            <li>
              {" "}
              <Link to="/signup">Sign up</Link>
            </li>
          )}
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            {isVerified ? (
              <span style={{ color: "black" }} onClick={() => logOut()}>
                Log Out
              </span>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
