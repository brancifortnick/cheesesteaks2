
import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { createComment} from "../store/comment";
import { Modal } from "../context/Modal";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { TextareaAutosize } from "@mui/material";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {getOneLocation } from "../store/location";
import CheckIcon from "@mui/icons-material/Check";
import CancelIcon from "@mui/icons-material/Cancel";

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
        <Button onClick={() => setModal(true)}><AddIcon/></Button>
        {/* <Fab color="primary" aria-label="add" size='small'> </Fab> */}
      </div>
      {showModal && (
        <Modal onClose={() => setModal(false)}>
          <form className="comment-container" onSubmit={onSubmit}>
            <TextareaAutosize
              className="comment-input"
              type="text"
              placeholder="Comment..."
              onChange={updateComment}
              value={comment}
              minRows={2}
              style={{ width: 450, height: 325, fontSize: 16 }}
            />
            <div id="comment-create">
              <Button type="submit" >
                <CheckIcon color='disabled' sx={{ color: '#fb6c45' }} />
              </Button>
              <Button type='submit'  onClick={() => setModal(false)}>
                <CancelIcon color='disabled' sx={{ color: '#ffd345' }} />
              </Button>
                    </div>
          </form>
        </Modal>
      )}
    </div>
  );
};
export default AddComments;
