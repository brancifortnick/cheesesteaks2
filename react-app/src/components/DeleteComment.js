import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTheComments,
  deleteAComment,
  getOneComment,
} from "../store/comment";

import DeleteIcon from "@mui/icons-material/Delete";

import Button from "@mui/material/Button";

// import './DeleteComment';
import { filterObjsById } from "../Utilities/StoreMethods";
const DeleteComment = ({ imageId, commentId }) => {
  const dispatch = useDispatch();
  const commentDelete = async (e) => {
    e.preventDefault();
    console.log(imageId, commentId, "IMAGEID_>COMMENTID");
    dispatch(deleteAComment({ id: commentId, image_id: imageId }));
  };
  // useEffect(() => {
  //     dispatch(getOneLocation(locationId))
  // }, [dispatch, locationId])
  return (
    <div>
      <Button type="submit" onClick={commentDelete}>
        Delete
      </Button>
      {/* <button className="delete-comment" type="submit" onClick={commentDelete}>     </button> */}
    </div>
  );
};
export default DeleteComment;
