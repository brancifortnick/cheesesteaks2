import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { deletePhoto, getAPhoto, getPhotos } from "../store/image";



const DeleteLocationsImages = ({ imageId }) => {

    const { locationId } = useParams()
    const history = useHistory();
    const dispatch = useDispatch();
    const image = useSelector(state => state.image)
    const user = useSelector(state => state.session.user)
    // console.log(locationId, 'locationID????????????????????????????????????????????????---deletelocationsimages', image, "image state from DELTELOCATIONSIMAGES))))))))))))))))))))))))))))))))))))))))", imageId, "passed in as a prop obj")
    const onSubmit = async (e) => {
        e.preventDefault();
        dispatch(deletePhoto(Number(imageId)));
        history.push(`/locations/${locationId}`)
    };

    useEffect(() => {
        dispatch(getPhotos(locationId))
    }, [dispatch, locationId])

    return (
        <div>

            <button onClick={onSubmit}>Delete Photo</button>

        </div>
    )
};

export default DeleteLocationsImages;
