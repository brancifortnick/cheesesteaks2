import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAComment
} from "../store/comment";
import DeleteIcon from "@mui/icons-material/Delete";
import './DeleteComment';
import { Modal } from '../context/Modal';
import CheckIcon from '@mui/icons-material/Check';
import CancelIcon from '@mui/icons-material/Cancel';
import Button from '@mui/material/Button';
import './DeleteComment.css';

const DeleteComment = ({ imageId, commentId }) => {


  const [showModal, setModal] = useState(false);
  const dispatch = useDispatch();
  const commentDelete = async (e) => {
    e.preventDefault();
    console.log(imageId, commentId, "IMAGEID_>COMMENTID");
    dispatch(deleteAComment({ id: commentId, image_id: imageId }));
  };

  return (
    <div className='delete-container'>
      <Button type="submit" className="delete-btn" onClick={() => setModal(true)}>
        <DeleteIcon onClick={() => setModal(false)} color='disabled' sx={{ color: '#fbd345' }} />
      </Button>
      {showModal && (
        <Modal onClose={() => setModal(false)}>
          <div className="delete-modal">
            <div>Remove Comment</div>
            <div className="delete-buttons">

              <CheckIcon type="submit" className="confirm-delete-btn" onClick={commentDelete} />


              <CancelIcon onClick={() => setModal(false)}
                className="cancel-delete-btn" color='disabled' sx={{ color: '#fb6c45' }} />
            </div> 

          </div>
        </Modal>
      )}
    </div>
  );
};
export default DeleteComment;
