import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getPhotos } from '../store/image';
import AllComments from './AllComments';
import AddComments from './AddComments';
import GetLocationsImages from "./GetLocationsImages";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';



function PhotoPage() {


    const dispatch = useDispatch()
    const history = useHistory()
    const { imageId } = useParams();
    console.log(imageId, "imageID coming from photopage lalaallalalalallalal")
    const comments = useSelector(state => Object.values(state.comment));

    useEffect(() => {
        dispatch(getPhotos())
    }, [dispatch])


    const photoComments = comments.filter((comment) => {
        return comment.image_id === imageId ? (
            <div className='establishment-images'>
                <GetLocationsImages imageId={imageId} />
                <div><AddComments /></div>
                <div><AllComments /></div>
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