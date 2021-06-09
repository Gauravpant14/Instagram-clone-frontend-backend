import React,{useEffect,useRef} from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { useSelector, useDispatch } from "react-redux";
import { deletePost } from '../../redux/actions/getAllPost';


const Modal = ({details}) => {
  useEffect(() => {
    let modal = document.querySelectorAll('.modal');
    const options = {
        onOpenStart: () => {
          console.log("Open Start");
        },
        onOpenEnd: () => {
          console.log("Open End");
        },
        onCloseStart: () => {
          console.log("Close Start");
        },
        onCloseEnd: () => {
          console.log("Close End");
        },
        inDuration: 250,
        outDuration: 250,
        opacity: 0.5,
        dismissible: false,
        startingTop: "4%",
        endingTop: "10%"
      };
      M.Modal.init(modal, options);
     
  }, [])
    
    // let instance = M.Modal.getInstance(this.Modal);
    // instance.open();
    // instance.close();
    // instance.destroy();

    const ref = useRef(null);
  
    const dispatch = useDispatch()

    const deleteMe = (details) => {
        // console.log(details);
        console.log(details,"cheking details")
        dispatch(deletePost(details._id))
    }
  
    return (

      <div>
      
        

  

  <div id="modal1" class="modal modal-fixed-footer">
    <div class="modal-content">
      <h4>Modal Header</h4>
      <button class="btn waves-effect waves-light"  onClick={() => deleteMe(details)}> Delete Post
    {/* <i class="material-icons right"></i> */}
  </button>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">Close</a>
    </div>
  </div>
      </div>
    );
  
}

export default Modal;
