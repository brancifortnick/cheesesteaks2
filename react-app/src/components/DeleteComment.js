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
import { filterObjsById } from "../Utilities/StoreMethods";


const DeleteComment = ({ imageId, commentId }) => {

    const dispatch = useDispatch();


    const commentDelete = async (e) => {
        e.preventDefault();
        console.log(imageId, commentId, "IMAGEID_>COMMENTID")
        dispatch(deleteAComment({ id: commentId, image_id: imageId }))


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
