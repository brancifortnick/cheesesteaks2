import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "../context/Modal";
import { TextareaAutosize } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import './EditComment.css';
import { updateAComment } from "../store/image";
const EditComment = ({ commentObj, imageId }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState(commentObj.comment)
  const [showModal, setModal] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData()
    formData.append('comment', comment)
    dispatch(updateAComment(formData, commentObj.id)) //looks at line  88 in store comment
    closeModal()
  }
  const closeModal = () => {
    setComment('')
    setModal(false);
  }
  return (
    <div className='edit-container'>
      <EditIcon onClick={() => setModal(true)} color='primary' />
      {showModal && (
        <Modal onClose={() => setModal(false)}>
          <form className='form-element-edit-comment' onSubmit={onSubmit}>
            <TextareaAutosize
              className="comment-input"
              type="text"
              placeholder='Enter text here'
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              minRows={5}
              style={{ width: 400 }}
            />
            <div className='buttons-container'>
              <Button type="submit" className='form-buttons'>
                Submit changes
              </Button>
              <Button type='button' onClick={closeModal} className='form-buttons'>
                Cancel
              </Button>
            </div>
          </form>
        </Modal>
      )
      }
    </div>
  );
}
export default EditComment;
