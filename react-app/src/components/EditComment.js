import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Modal } from "../context/Modal";
import { updateAComment, getAllComments } from "../store/comment";
import { TextareaAutosize } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import { Button } from "@mui/material";

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
        {/* <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignContent: 'center' }}> */}
        <button
          onClick={() => setModal(true)}>
          <EditIcon color='primary' />
        </button>
        {/* </Box> */}
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
            {/* <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}> */}

            <Button type="submit" id="update-comment-submit">
              Submit your new comment
            </Button>
            {/* </Box> */}
          </form>
        </Modal>
      )
      }
    </>
  );
};
export default EditComment;
