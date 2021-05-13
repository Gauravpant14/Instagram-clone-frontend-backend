import React from "react";
import { Link, useLocation } from "react-router-dom";

const Login = () => {
    const location = useLocation();
    return <div>
        <div className="card">
            <div className="inner-container">
                <div className="brand-logo">
                    <h2>Instagram</h2>
                </div>

                <div className="input-container">
                    <input type="text" placeholder="email" />
                    <input type="text" placeholder="password" />
                </div>

                <div className="btn-container">
                    <button className="waves-effect waves-light btn">Log In</button>
                </div>
                <h6>
                    <Link to="/signup">Don't have an account ?</Link>
                </h6>
            </div>


        </div>


    </div>;
};

export default Login;
