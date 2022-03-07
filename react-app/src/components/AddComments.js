import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getImagesComments } from "../store/comment";
import {Modal} from '../context/Modal'

const AddComments = ({imageId}) => {

    const dispatch = useDispatch();


    const [comment, setComment] = useState("");



    const onSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("comment", comment);
      formData.append("image_id", Number(imageId));
      formData.append("user_id", user.id);

      dispatch(createComment(formData));

      setComment("");
    };

    useEffect(() => {
      dispatch(getImagesComments())
    }, [dispatch]);

    const updateComment = (e) => setComment(e.target.value);

    return (
      <div>
        <div id='comment-modal'>
        <button className='comment-button' onClick={() => setModal(true)}>Click here to comment</button>
        </div>
        {showModal && (
          <Modal onClose={() => setModal(false)}>
            <form className="comment-container" onSubmit={onSubmit}>
              <textarea
                className="comment-input"
                type="text"
                placeholder="Comment here..."
                onChange={updateComment}
                value={comment}
              />

              <div id='comment-create'>
              <button className="comment_submit" type="submit">
                Submit Comment
              </button>
              </div>
            </form>
          </Modal>
        )}
        </div>
    );
  };

export default AddComments;
