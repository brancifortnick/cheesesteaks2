import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getTheComments, createComment, getOneComment } from "../store/comment";
import { Modal } from "../context/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { TextareaAutosize } from "@mui/material";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { getAllLocations, getOneLocation } from "../store/location";
import { getPhotos } from "../store/image";
import CheckIcon from "@mui/icons-material/Check";

// import Modal from '@mui/material/Modal';
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
    // history.push(`/locations/${locationId}`)
  };
  const updateComment = (e) => setComment(e.target.value);
  return (
    <div>
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
              placeholder="Comment here..."
              onChange={updateComment}
              value={comment}
              minRows={2}
              style={{ width: 450, height: 225, fontSize: 18 }}
            />
            <div id="comment-create">
              <Button className="comment_submit" type="submit" color="primary">
                <CheckIcon/>
              </Button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
};
export default AddComments;
