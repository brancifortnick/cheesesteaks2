import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getPhotos } from '../store/image';
import AllComments from './AllComments';
import AddComments from './AddComments';
import GetLocationsImages from "./GetLocationsImages";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { AddComment } from '@mui/icons-material';



function PhotoPage({ locationId }) {


    const dispatch = useDispatch()
    const history = useHistory()
    const { imageId } = useParams();
    console.log(imageId, "imageID coming from photopage lalaallalalalallalal")
    const comments = useSelector((state) => Object.values(state.comment));
    const DeleteLocationsImage = useSelector((state) => Object.values(state.location))
    console.log(locationId, "locationId passed into PhotoPage component as a prop********************")

    useEffect(() => {
        dispatch(getPhotos())
    }, [dispatch])



    const photoComments = comments.filter((comment) => {
        return comment.image_id === locationId ? (
            <div className='establishment-images'>
                { }    <AddComment locationId={locationId} />

            </div>
        ) : null;
    });


    return (
        <>
            {photoComments}
        </>
    )
};

export default PhotoPage
