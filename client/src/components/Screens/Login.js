import React from "react";
import { Link, useLocation } from "react-router-dom";

const Login = () => {
    return <div>
        <div className="card">
            <div className="inner-container">
                <h2>Instagram</h2>
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
