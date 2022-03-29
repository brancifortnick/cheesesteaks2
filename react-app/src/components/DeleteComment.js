import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllComments, deleteAComment } from "../store/comment";
import { useHistory } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

import './DeleteComment';

const DeleteComment = ({ commentId }) => {

    const dispatch = useDispatch();

    const history = useHistory();
    const musician = useSelector(state => state.musician);
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
            <div>
                <button className="delete-comment" type="submit" onClick={commentDelete}><DeleteIcon color='primary' />
                </button>
            </div>
        </form >
    );
};
export default DeleteComment;
