import React from "react";

const CreatePost = () => {
    return (
        <>
            <div className="card create-post">
                <h4>Upload New Posts</h4>
                <div className="title-input">
                    <input type="text" placeholder="title" />
                </div>
                <div className="bpdy-input">
                    <input type="text" placeholder="body" />
                </div>

                <div className="file-field input-field">
                    <div className="btn upload-img" >
                        <span>UPLOAD IMAGE</span>
                        <input type="file" />
                    </div>
                    <div className="file-path-wrapper">
                        <input className="file-path validate" type="text" />
                    </div>
                </div>
                <div className="btn-container">
                    <button className="waves-effect waves-dark btn">Submit Post</button>
                </div>
            </div>
        </>
    );
};

export default CreatePost;
