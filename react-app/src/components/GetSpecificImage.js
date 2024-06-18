import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import { useHistory, useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAPhoto } from "../store/image";

import DisplayComments from "./DisplayComments";

const GetSpecificImage = ({ comment }) => {

    const images = useSelector(state => Object.values(state.image))
    console.log(images, "images GETSPECIFICIMAGES>>><<<>>><<<>>>>>")

    const { imageId } = useParams()
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getAPhoto(imageId))
    }, [dispatch])


    const imageListFilter = images.map((image, idx) => {


        return image !== null ? (

            <div>
                <div>
                    <DisplayComments commentId={comment?.id} />

                </div>
                <img src={image.image} />
            </div>
        ) : null
    })
    return (
        <>
            <div>testing</div>
            {imageListFilter}
        </>

    )
};

export default GetSpecificImage;
