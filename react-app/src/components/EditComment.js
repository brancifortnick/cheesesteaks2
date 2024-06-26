import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Modal } from "../context/Modal";
import { updateAComment, getTheComments } from "../store/comment";
import { TextareaAutosize } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import './EditComment.css';
import Box from '@mui/material/Box';
import { getAPhoto } from "../store/image";

const EditComment = ({ imageId, commentId }) => {

  console.log(imageId, "commentsImagesId prop from editcomment component", commentId, "commentId prop same place")
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(state => state.session.user)
  const { locationId } = useParams()
  const [comment, setComment] = useState('')
  const comments = useSelector(state => Object.values(state.comment))
  const [showModal, setModal] = useState(false);



  console.log(comments, "edit comment, => trying to get comments store state")
  console.log(locationId, "locationId=?????editcomponemt ")

  const onSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append("comment", comment)


    dispatch(updateAComment(commentId, formData))
    setModal(false);

  }

  useEffect(() => {
    dispatch(getAPhoto(locationId))
  }, [dispatch, locationId])
  return (
    <div className='edit-container'>
      <EditIcon onClick={() => setModal(true)} color='white' />
      {showModal && (
        <Modal onClose={() => setModal(false)}>
          <form onSubmit={onSubmit}>
            <TextareaAutosize
              className="comment-input"
              type="text"
              placeholder={imageId}
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              minRows={5}
              style={{ width: 400 }}
            />

            <button className="update-comment-submit-outter">
              <Button type="submit" id="update-comment-submit">
                Submit changes
              </Button>
            </button>
          </form>
        </Modal>
      )
      }
    </div>
  );
}


export default EditComment;
{/* <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignContent: 'center' }}> */ }
{/* <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}> */ }
