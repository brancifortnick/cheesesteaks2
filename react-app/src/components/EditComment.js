import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Modal } from "../context/Modal";
import { updateAComment, getImagesComments } from "../store/comment";
import { TextareaAutosize } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import './EditComment.css';
import Box from '@mui/material/Box';

const EditComment = ({ commentId }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { locationId } = useParams();
  const [comment, setComment] = useState("");
  const [showModal, setModal] = useState(false);

  const onSubmit = async (e) => {
    const formData = new FormData();
    formData.append("comment", comment);
    dispatch(updateAComment(formData, commentId));
    setModal(false);
    history.push(`/locations/${locationId}`);
  };
  useEffect(() => {
    dispatch(getImagesComments(parseInt(commentId)));
  }, [dispatch, commentId]);

  return (
    <div className='edit-container'>
      <EditIcon onClick={() => setModal(true)} color='white' />
      {showModal && (
        <Modal onClose={() => setModal(false)}>
          <form onSubmit={onSubmit}>
            <TextareaAutosize
              className="comment-input"
              type="text"
              placeholder={comment}
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              minRows={5}
              style={{ width: 400 }}
            />
            <Button type="submit" id="update-comment-submit">
              Submit your new comment
            </Button>

          </form>
        </Modal>
      )
      }
    </div>
  );
};
export default EditComment;
{/* <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignContent: 'center' }}> */ }
{/* <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}> */ }