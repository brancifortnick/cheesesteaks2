import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImagesComments, deleteAComment } from "../store/comment";
import { useHistory } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { getImageComments } from "../store/image";
import { Button } from "@mui/material";
import './DeleteComment';

const DeleteComment = ({ commentId }) => {

    const dispatch = useDispatch();
    // const images = useSelector(state => Object.values(state.image))
    const history = useHistory();
    const image = useSelector(state => state.image);
    const user = useSelector(state => state.session.user);


    const commentDelete = async (e) => {
        e.preventDefault();
        dispatch(deleteAComment(commentId));

    };

    useEffect(() => {
        dispatch(getImagesComments(commentId));
    }, [dispatch, commentId]);

    return (
        <form id='delete-form'>
            <DeleteIcon className="delete-comment" type="submit" onClick={commentDelete} color='white' />
            {/* <button className="delete-comment" type="submit" onClick={commentDelete}>     </button> */}
        </form >
    );
};
export default DeleteComment;
