import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { signInApi } from "../../redux/actions/signinAction"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ history }) => {
    const location = useLocation();
    const dispatch = useDispatch()
    const [val, setVal] = useState({
        email: "",
        password: ""
    })
    const getVal = (e) => {
        setVal({
            ...val,
            [e.target.name]: e.target.value
        })

    }
    return <div>
        <div className="card">
            <div className="inner-container">
                <div className="brand-logo">
                    <h2>Instagram</h2>
                </div>

                <div className="input-container">


                    <input type="text" placeholder="email" name="email" value={val.email} onChange={(e) => getVal(e)} />
                    <input type="password" placeholder="password" name="password" value={val.password} onChange={(e) => getVal(e)} />
                </div>

                <div className="btn-container">
                    <button className="waves-effect waves-light btn" onClick={() => dispatch(signInApi(val, history))}>Log In</button>
                </div>
                <h6>
                    <Link to="/signup">Don't have an account ?</Link>
                </h6>
            </div>


        </div>

        <ToastContainer />
    </div>;
};

export default Login;
