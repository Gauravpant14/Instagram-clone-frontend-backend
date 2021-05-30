import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { postUserData } from "./../../redux/actions/postDataAction";

const CreatePost = () => {
  const [postBody, setPostBody] = useState({
    title: "",
    body: "",
  });
  const [image, setImage] = useState({});
  const [url, setUrl] = useState("");
  const dispatch = useDispatch();

  const getItems = (e) => {
    setPostBody({
      ...postBody,
      [e.target.name]: e.target.value,
    });
  };
  const getImage = (e) => {
    setImage(e.target.files[0]);
  };

  const postDetails = async () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "insta-clone");
    data.append("cloud_name", "itsgaurav14");

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/itsgaurav14/image/upload",
        {
          method: "post",
          body: data,
        }
      );
      console.log(response, "response of photo api");

      if (response.status === 200) {
        setUrl(response.url);
        dispatch(
          postUserData({
            title: postBody.title,
            body: postBody.body,
            photo: response.url,
          })
        );
      }
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };
  return (
    <>
      <div className="card create-post">
        <h4>Upload New Posts</h4>
        {JSON.stringify(url)}
        <div className="title-input">
          <input
            type="text"
            placeholder="title"
            name="title"
            value={postBody.title}
            onChange={(e) => getItems(e)}
          />
        </div>

        <div className="body-input">
          <input
            type="text"
            placeholder="body"
            name="body"
            value={postBody.body}
            onChange={(e) => getItems(e)}
          />
        </div>

        <div className="file-field input-field">
          <div className="btn upload-img">
            <span>UPLOAD IMAGE</span>
            <input type="file" onChange={(e) => getImage(e)} />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
          </div>
        </div>
        <div className="btn-container">
          <button
            className="waves-effect waves-dark btn"
            onClick={() => postDetails()}
          >
            Submit Post
          </button>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
