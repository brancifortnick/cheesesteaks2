import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAComment
} from "../store/comment";

import DeleteIcon from "@mui/icons-material/Delete";

import Button from "@mui/material/Button";

import './DeleteComment';

const DeleteComment = ({ imageId, commentId }) => {
  const dispatch = useDispatch();
  const commentDelete = async (e) => {
    e.preventDefault();
    console.log(imageId, commentId, "IMAGEID_>COMMENTID");
    dispatch(deleteAComment({ id: commentId, image_id: imageId }));
  };

  return (
    <div>

      <DeleteIcon onClick={commentDelete} color='disabled' sx={{ color: 'red' }} />


    </div>
  );
};
export default DeleteComment;
