import React, { useState } from 'react';
import { ModalBody, container, list } from './CommanModal.css'
import { useSelector, useDispatch } from "react-redux";
import { deletePost } from '../redux/actions/getAllPost';

const CommanModal = (props) => {
    const {
        modal,
        toggle,
        className,
        details
    } = props;

    const dispatch = useDispatch()

    const deleteMe = (details) => {
        // console.log(details);
        dispatch(deletePost(details._id))
    }


    return (
        modal && (
            <div className="container">
                <div className="ModalBody">
                    <ul className="list">
                        <li onClick={() => deleteMe(details)}>Delete</li>
                        <li>Share</li>

                    </ul>
                </div>
            </div>)

    );
}

export default CommanModal;