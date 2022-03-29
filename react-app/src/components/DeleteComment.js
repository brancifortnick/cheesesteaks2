import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllComments, deleteAComment } from "../store/comment";
import { useHistory } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import './DeleteComment';

const DeleteComment = ({ commentId }) => {

    const dispatch = useDispatch();

    const history = useHistory();
    const image = useSelector(state => state.image);
    const user = useSelector(state => state.session.user);

    const commentDelete = async (e) => {
        e.preventDefault();
        dispatch(deleteAComment(commentId));
        dispatch(getAllComments())
    };

    // useEffect(() => {
    //     dispatch(getAllComments());
    // }, [dispatch]);

    return (
        <form id='delete-form'>
            <DeleteIcon className="delete-comment" type="submit" onClick={commentDelete} color='white' />
            {/* <button className="delete-comment" type="submit" onClick={commentDelete}>     </button> */}
        </form >
    );
};
export default DeleteComment;
