import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { deletePhoto, getPhotos } from "../store/image";



const DeleteLocationsImages = ({ imageId }) => {

    const history = useHistory();
    const dispatch = useDispatch();
    const image = useSelector(state => state.image)
    const { locationId } = useParams()
    console.log(locationId, 'locationID????????????????????????????????????????????????---deletelocationsimages')
    const onSubmit = async (e) => {
        e.preventDefault();
        dispatch(deletePhoto(Number(imageId)));
        history.push(`/locations/${locationId}`)
    };

    useEffect(() => {
        dispatch(getPhotos())
    }, [dispatch])

    return (
        <div>
            <button onClick={onSubmit}>Delete Photo</button>
        </div>
    )
};

export default DeleteLocationsImages;