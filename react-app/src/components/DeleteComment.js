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
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import './DeleteComment.css';
import Box from '@mui/material/Box';
const DeleteComment = ({ imageId, commentId }) => {


  const [showModal, setModal] = useState(false);
  const dispatch = useDispatch();
  const commentDelete = async (e) => {
    e.preventDefault();

    dispatch(deleteAComment({ id: commentId, image_id: imageId }));
  };

  return (
    <div className='delete-container'>

      <DeleteIcon type="submit" onClick={() => setModal(true)} color='disabled' sx={{ color: '#fbd345' }} />

      {showModal && (
        <Modal onClose={() => setModal(false)}>
          <div>
            Are you sure you want to delete this comment?
          </div>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', padding: '2px' }}>
            <Button type="submit" onClick={() => setModal(false)}>
              <CheckIcon sx={{ color: '#ffd345' }} onClick={commentDelete} />
            </Button>
            <Button type="submit" onClick={() => setModal(false)}>
              <CloseIcon sx={{ color: '#fb6c45' }} />
            </Button>
          </Box>
        </Modal>
      )
      }
    </div >
  );
};
export default DeleteComment;
