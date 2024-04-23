import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAPhoto, getPhotos } from '../store/image';
import AllComments from './AllComments';
import AddComments from './AddComments';
import GetLocationsImages from "./GetLocationsImages";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { AddComment } from '@mui/icons-material';
import { NavLink } from 'react-router-dom'
import { getOneLocation } from '../store/location';


function PhotoPage({ locationId }) {


    const dispatch = useDispatch()
    const history = useHistory()
    const { imageId } = useParams();
    console.log(imageId, "imageID coming from photopage lalaallalalalallalal")
    const photos = useSelector((state) => Object.values(state.image));
    const DeleteLocationsImage = useSelector((state) => Object.values(state.location))
    console.log(locationId, "locationId passed into PhotoPage component as a prop********************")

    // useEffect(() => {
    //     if (!imageId) {
    //         dispatch(getAPhoto())
    //     } else if (!locationId) {
    //         dispatch(getOneLocation());
    //         dispatch(GetLocationsImages(locationId))
    //     } else if (!photos)
    //         console.log('useFx in photopage')

    // }, [dispatch, imageId])



    const photoData = photos.filter((image) => {
        return (
            <div key={image.id} >
                {image + "image details"}
                {image.location_id}</div>
        )

    }
    )

    return (
        <>
            {photoData}
        </>
    )
};

export default PhotoPage
