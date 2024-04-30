import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getTheComments, createComment } from "../store/comment";
import { Modal } from '../context/Modal'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { TextareaAutosize } from "@mui/material";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// import Modal from '@mui/material/Modal';

const AddComments = ({ locationId }) => {  //added imageId prop and then useparams for locationId because addcomments lives on locations/id

  const dispatch = useDispatch();
  const history = useHistory()
  const user = useSelector(state => state.session.user)
  const [comment, setComment] = useState("");
  const [showModal, setModal] = useState(false)

  const { imageId } = useParams()
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("comment", comment);
    formData.append('image_id', Number(imageId))
    formData.append("user_id", user.id)

    dispatch(createComment(formData));
    dispatch(getTheComments())
    setModal(false)
    setComment("");
    history.push(`/locations/${locationId}`)
  };


  const updateComment = (e) => setComment(e.target.value);

  return (
    <div>
      <div id='comment-modal'>
        <Fab color="primary" aria-label="add" size='small'> <AddIcon onClick={() => setModal(true)} /></Fab>
      </div>
      {showModal && (
        <Modal onClose={() => setModal(false)}>
          <form className="comment-container" onSubmit={onSubmit}>

            <TextareaAutosize
              className="comment-input"
              type="text"
              placeholder="Comment here..."
              onChange={updateComment}
              value={comment}
              minRows={5}
              style={{ width: 400 }}
            />

            <div id='comment-create'>
              <Button className="comment_submit" type="submit" color='primary'>
                Submit Comment
              </Button>
            </div>
          </form>
        </Modal>
      )}
    </div >
  );
};

export default AddComments;
