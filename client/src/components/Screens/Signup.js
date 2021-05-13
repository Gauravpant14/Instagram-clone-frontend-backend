import React from "react";
import { Link, useLocation } from "react-router-dom";

const Signup = () => {
    const location = useLocation();
    const myRoute = location.pathname.substring(1);

    return (
        <div>
            <div className={myRoute === "signup" ? "signupCard card" : "card"}>
                <div className="inner-container">
                    <h2>Instagram</h2>

                    <div className="input-container">
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="email" />
                        <input type="text" placeholder="password" />
                    </div>

                    <div className="btn-container">
                        <button className="waves-effect waves-light btn">Sign Up</button>
                    </div>
                    <h6>
                        <Link to="/login">Already have an account ?</Link>
                    </h6>
                </div>
            </div>
        </div>
    );
};

export default Signup;
