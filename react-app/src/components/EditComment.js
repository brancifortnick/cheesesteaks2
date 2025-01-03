import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "../context/Modal";
import { TextareaAutosize } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import "./EditComment.css";
import { updateAComment } from "../store/image";
import "./EditComment.css";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
const EditComment = ({ commentObj, imageId }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState(commentObj.comment);
  const [showModal, setModal] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("comment", comment);
    dispatch(updateAComment(formData, commentObj.id)); //looks at line  88 in store comment
    closeModal();
  };
  const closeModal = () => {
    setComment("");
    setModal(false);
  };
  return (
    <div className="edit-container">
      <EditIcon
        onClick={() => setModal(true)}
        color="disabled"
        sx={{ color: "#fb6c45", bgColor: "white" }}
      />
      {showModal && (
        <Modal onClose={() => setModal(false)}>
          <form className="form-element-edit-comment" onSubmit={onSubmit}>
            <TextField
variant='outlined'
              className="comment-input"
              type="text"
              placeholder={commentObj.comment}
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              minRows={3}
              multiline
              sx={{
                width: 400,
                fontWeight: "500",
                fontStyle: "italic",
                maxWidth: "600px",
                      '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'black' },
                    '&:hover fieldset': { borderColor: '#fb6c45' },
                    '&.Mui-focused fieldset': { borderColor: '#fb6c45' },
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: '#fb6c45',
                  },
              }}
              fullWidth
            />
            <div className="buttons-container">
              <Button type="submit" className="confirm-edit-btn">
                <CheckIcon sx={{ color: "#fb6c45" }} />
              </Button>
              <Button onClick={closeModal} className="cancel-edit-btn">
                <CloseIcon color="disabled" sx={{ color: "#fbda21" }} />
              </Button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
};
export default EditComment;
// Compare this snippet from react-app/src/components/DeleteComment.js:
