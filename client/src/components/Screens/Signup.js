import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import "react-toastify/dist/ReactToastify.css";
import {signUp} from './../../redux/index'
const Signup = ({history}) => {
    const location = useLocation();
    const myRoute = location.pathname.substring(1);
    const dispatch = useDispatch()
    const [val, setVal] = useState({
        name: "",
        email: "",
        password: ""
    })

    const getValues = (e) => {
        setVal({
            ...val,
            [e.target.name]: e.target.value
        })
    }

    const postData = () => {
        dispatch(signUp({ 
            name: val.name,
            password: val.password,
            email: val.email
        },history))
    }

    return (
        <div>
            <div className={myRoute === "signup" ? "signupCard card" : "card"}>
                <div className="inner-container">
                    <div className="brand-logo">
                        <h2>Instagram</h2>
                    </div>
                
                    <div className="input-container">
                        <input type="text" placeholder="Name" name="name" value={val.name} onChange={(e) => getValues(e)} />
                        <input type="text" placeholder="email" name="email" value={val.email} onChange={(e) => getValues(e)} />
                        <input type="text" placeholder="password" name="password" value={val.password} onChange={(e) => getValues(e)} />
                    </div>

                    <div className="btn-container">
                        <button className="waves-effect waves-light btn" onClick={() => postData()}>Sign Up</button>
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
