import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { deletePhoto, getAPhoto } from "../store/image";



const DeleteLocationsImages = ({ imageId }) => {

    const history = useHistory();
    const dispatch = useDispatch();
    const image = useSelector(state => state.image)
    const { locationId } = useParams()
    const onSubmit = async (e) => {
        e.preventDefault();
        dispatch(deletePhoto(Number(imageId)));
        history.push(`/locations/`)
    };

    // useEffect(() => {
    //     dispatch(getAPhoto(Number(imageId)))
    // }, [dispatch, imageId])

    return (
        <div>
            <button onClick={onSubmit}>Delete Photo</button>
        </div>
    )
};

export default DeleteLocationsImages;