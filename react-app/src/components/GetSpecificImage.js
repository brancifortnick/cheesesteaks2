import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import { useHistory, useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAPhoto } from "../store/image";

import DisplayComments from "./DisplayComments";
import GetSingleComment from "./GetSingleComment";
import { getOneLocation } from "../store/location";
import { getTheComments } from "../store/comment";

const GetSpecificImage = ({ imageId, comment }) => {

    const images = useSelector(state => Object.values(state.image))


    // const { imageId } = useParams()
    const dispatch = useDispatch()

    const iterateFunc = (images) => {
        for (let i = 0; i < images.length; i++) {
            <img src={`images.${i}.src`} />
            for (let j = 0; j < images[i].comments; j++) {
                <p>images[i].comments[j]</p>
            }
        }
    }

    useEffect(() => {
        dispatch(getAPhoto(imageId))
    }, [dispatch])




    const imagesComments = images.map((data) => {
        if (data === 'comments') {
            const result = data.comments.filter((eachComm) => {
                return eachComm === data.id
            })
            return result
        } else {
            console.log('error in imagesComments function in GETSPECIFICIMAGE')
        }

    })

    console.log(imagesComments(images))
    return (
        <div>
            {'hey'}
        </div>
    )
};





export default GetSpecificImage;
