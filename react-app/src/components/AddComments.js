
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createComment } from "../store/comment";
import { Modal } from "../context/Modal";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { TextareaAutosize } from "@mui/material";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { getOneLocation } from "../store/location";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import "./AddComments.css";
const AddComments = ({ locationId, imageId }) => {
  //added imageId prop and then useparams for locationId because addcomments lives on locations/id
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.session.user);
  const [comment, setComment] = useState("");
  const [showModal, setModal] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("comment", comment);
    formData.append("image_id", Number(imageId));
    formData.append("user_id", user.id);
    dispatch(createComment(formData));
    dispatch(getOneLocation(locationId));
    setModal(false);
    setComment("");

  };
  const updateComment = (e) => setComment(e.target.value);
  return (
    <div className="add-comment-container">
      <div id="comment-modal">
        <Button variant='text' onClick={() => setModal(true)} sx={{ color: 'white', bgcolor: '#fb6c45', '&:hover': { color: '#fb6c45', bgcolor: 'white', bgcolor: '#303133' } }}>Add Comment</Button>
        {/* <Fab color="primary" aria-label="add" size='small'> </Fab> */}
      </div>
      {showModal && (
        <Modal onClose={() => setModal(false)}>
          <form className="comment-container" onSubmit={onSubmit}>
            <Box>
              <TextField className='comment-text-field'
                multiline
                type="text" placeholder="Comment..."
                onChange={updateComment}
                value={comment}
                minRows={3}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: 400,
                  padding: 0,
                  fontWeight: "800",
                  fontStyle: "italic",
                  maxWidth: "600px",

                }}
                fullWidth />
              {/* <TextareaAutosize
              className="comment-input"
              type="text"
              placeholder="Comment..."
              onChange={updateComment}
              value={comment}
              minRows={2}
              style={{ width: 'fitContent', height: 325, fontSize: 16 }}
            /> */}
            <div id="comment-create">
              <Button type="submit" >
                <CheckIcon color='disabled' sx={{ color: '#fb6c45' }} />
              </Button>
                <Button type='submit' onClick={() => setModal(false)}>
                  <CloseIcon color='disabled' sx={{ color: '#ffd345' }} />
              </Button>
              </div>
            </Box>
          </form>
        </Modal>
      )}
    </div>
  );
};
export default AddComments;
