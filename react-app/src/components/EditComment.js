import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Modal } from "../context/Modal";
import { updateAComment, getAllComments } from "../store/comment";
import { TextareaAutosize } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";


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
    dispatch(getAllComments(parseInt(commentId)));
  }, [dispatch, commentId]);

  return (
    <>
      <div id="edit-comment">
        <button
          onClick={() => setModal(true)}>
          <EditIcon />
        </button>
      </div>

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

            <button type="submit" id="update-comment-submit">
              Submit your new comment
            </button>
          </form>
        </Modal>
      )}
    </>
  );
};
export default EditComment;
