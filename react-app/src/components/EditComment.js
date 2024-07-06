import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Modal } from "../context/Modal";
import { getTheComments, getOneComment, createComment } from "../store/comment";
import { TextareaAutosize } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import './EditComment.css';
import Box from '@mui/material/Box';
import { getAPhoto, updateAComment } from "../store/image";

//// Step 1: Understand Backend Routes
// Example: PUT /api/comments/:id for updating a comment

// Step 2: Review Redux Store Structure
// Example: Ensure there's a comment slice with actions for updating and fetching comments

// Step 3: Update Redux Actions
// Example: Modify updateAComment in the comment slice to match new backend requirements

// Step 4: Modify Component State and Props
// Example: Add new state variables if needed, adjust initial state setup

// Step 5: Adjust Form Submission
// Example:
// function onSubmit(e) {
//   e.preventDefault();
//   const updatedComment = { ...comment, newField: valueFromForm };
//   dispatch(updateAComment(updatedComment));
//   // Additional logic as needed
// }

// Step 6: Update UI Based on New Data
// Example: Add new form fields or display elements based on new or updated data

// Step 7: Test Component
// Example: Manually test and use Redux DevTools to monitor state changes
// const EditComment = ({ commentObj, imageId }) => {
const EditComment = ({ commentObj, imageId }) => {

  const dispatch = useDispatch();
  // const history = useHistory();
  // const user = useSelector(state => state.session.user)
  // const { locationId } = useParams()
  const [comment, setComment] = useState(commentObj.comment)

  const [showModal, setModal] = useState(false);

  // const images = useSelector(state => Object.values(state.image))
  // console.log(images, "edit comment component")

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
      <EditIcon onClick={() => setModal(true)} color='white' />
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
/* <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignContent: 'center' }}> */
/* <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}> */
