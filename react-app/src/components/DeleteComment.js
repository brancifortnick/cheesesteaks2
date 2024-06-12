import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTheComments, deleteAComment, getOneComment } from "../store/comment";
import { useParams, useHistory } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { getAPhoto, getImageComments } from "../store/image";
import Button from "@mui/material/Button";
import DisplayComments from './DisplayComments'
import { getAllLocations, getOneLocation } from "../store/location";
// import './DeleteComment';



const DeleteComment = ({ commentId }) => {

    const dispatch = useDispatch();
    const comments = useSelector(state => Object.values(state.comment))
    const history = useHistory();
    const image = useSelector(state => state.image);
    const user = useSelector(state => state.session.user);
    const { locationId } = useParams()
    console.log(image, "image obj coming from deletecomment", commentId, "commentID PASSED IN AS A DECONSTRUCTED PROP")

    const commentDelete = async (e) => {
        e.preventDefault();
        dispatch(getTheComments())
        dispatch(deleteAComment((commentId)));

    };

    // useEffect(() => {
    //     dispatch(getOneLocation(locationId))

    // }, [dispatch, locationId])

    return (
        <div>
            <Button type='submit' onClick={commentDelete} >
                <DeleteIcon className="delete-comment" type="submit" color='white' />
            </Button>
            {/* <button className="delete-comment" type="submit" onClick={commentDelete}>     </button> */}
        </div>
    );
};
export default DeleteComment;
