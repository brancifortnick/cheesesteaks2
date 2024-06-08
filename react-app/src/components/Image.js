import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getAPhoto, getPhotos } from "../store/image";




const Image = ({ imageId }) => {

    const location = useSelector(state => state.location)
    const image = useSelector((state) => (state.image))

    console.log(image, "actual image component=====><<<<<=====")
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getAPhoto(Number(imageId)))
    }, [dispatch])

    return (
        <div>

            <p>{imageId + 'imageId'}</p>
            <div>{image.title}</div>
            <img src={image.image} alt="blank_" />
        </div>

    )
};

export default Image;
