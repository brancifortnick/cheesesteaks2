import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTheComments, deleteAComment } from "../store/comment";
import { useParams, useHistory } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { getAPhoto, getImageComments } from "../store/image";
import Button from "@mui/material/Button";
import DisplayComments from './DisplayComments'
import { getOneLocation } from "../store/location";
// import './DeleteComment';



const DeleteComment = ({ commentId }) => {

    const dispatch = useDispatch();
    // const images = useSelector(state => Object.values(state.image))
    const history = useHistory();
    const image = useSelector(state => state.image);
    const user = useSelector(state => state.session.user);

    const { locationId } = useParams()
    const commentDelete = async (e) => {
        e.preventDefault();
        dispatch(deleteAComment(Number(commentId)));

    };

    useEffect(() => {
        dispatch(getAPhoto(locationId))
        dispatch(getTheComments());//base this off of imageId most likely
    }, [dispatch, commentId]);

    return (
        <form id='delete-form'>
            <Button type='submit' onClick={commentDelete} >
                <DeleteIcon className="delete-comment" type="submit" color='white' />
            </Button>
            {/* <button className="delete-comment" type="submit" onClick={commentDelete}>     </button> */}
        </form >
    );
};
export default DeleteComment;
