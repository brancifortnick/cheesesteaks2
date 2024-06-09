import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getAPhoto, getPhotos } from "../store/image";




const Image = ({ imageId }) => {

    const dispatch = useDispatch()
    const location = useSelector(state => state.location)
    const [image, setImage] = useSelector({})

    console.log('imageId', imageId, 'image>>>', image, "actual image component=====><<<<<=====")


    useEffect(() => {
        if (!image) return null;

        dispatch(getAPhoto(imageId))
    }, [dispatch, imageId])


    return (
        <div>

            <p>{imageId + 'imageId'}</p>
            <div>{image.title}</div>
            <img src={image.image} alt="blank_" />
        </div>

    )
};

export default Image;
