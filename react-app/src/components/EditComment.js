import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Modal } from "../context/Modal";
import { updateAComment, getAllComments } from "../store/comment";
// import "./CommentUpdate.css";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
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
              <label id="comment-label">
                Comment Label
                <textarea
                  name="comment"
                  placeholder={comment}
                  onChange={(e) => setComment(e.target.value)}
                  value={comment}
                />
              </label>
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
