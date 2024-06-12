import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import { useHistory, useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAPhoto, getLocationsImages, getPhotos, postNewPhoto } from '../store/image'

import { Modal } from "../context/Modal";
import { getOneLocation } from "../store/location";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import Form from '@mui/material/FormControl'

const ImageUpload = ({ locationId }) => {


    const dispatch = useDispatch()
    const history = useHistory()
    const user = useSelector((state) => state.session.user);


    console.log(locationId, 'locationID from useparmas in IMAGEUPLOAD F?E C')
    console.log(locationId, user, '>>>>>from IMAGEUPLOAD frontend')
    const location = useSelector(state => state.location)
    console.log(location, "location from IMAGEUPLOAD ==> useselector giving state")

    const [showModal, setModal] = useState(false);
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');

    // useEffect(() => {
    //   if (!imageId)
    //     dispatch(GetLocationsImages(locationId))

    // },[dispatch,imageId])



    // console.log(locationId, userId, '>>>>from IMAGEUPLOAD FRONTEND')




    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", image);
        //fetching from backend route
        const res = await fetch("/api/images/new-image", {
            method: "POST",
            body: formData,
        });
        if (res.ok) {
            let image = await res.json();
            dispatch(postNewPhoto(image, title, user.id, Number(locationId)));

            dispatch(getPhotos())
            dispatch(getOneLocation(Number(locationId)))
            setModal(false);
        }

    };


    // const onSubmit = async (e) => {
    //   e.preventDefault();
    //   const formData = new FormData();
    //   formData.append("image", image);
    //   formData.append('title', title)
    //   formData.append('user_id', user.id);
    //   formData.append('location_id', locationId);
    //   dispatch(postNewPhoto(formData))

    //   dispatch(getAPhoto(Number(locationId)))
    //   history.push(`/locations/${locationId}`);
    // };

    useEffect(() => {
        dispatch(getAPhoto(parseInt(locationId)))
    }, [dispatch, locationId])


    const addPictureFile = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    return (

        <div className="image-form-container">

            <Button sx={{ mt: '2em', alignContent: 'center', backgroundColor: 'grey' }} id="upload-photos-to-location" onClick={() => setModal(true)}>
                Upload photos from
                your favorite establishments
            </Button>
            {showModal && (

                <Modal onClose={() => setModal(false)}>

                    <Form>
                        <form className="form-container" onSubmit={onSubmit}>
                            <div>
                                <Box sx={{ display: 'flex', flexDirection: 'row', alignContent: 'center', mt: 1 }}>
                                    <TextField
                                        multiline
                                        fullWidth
                                        name="biography"
                                        type="text"
                                        placeholder="Description..."
                                        onChange={(e) => setTitle(e.target.value)}
                                        value={title}
                                        minRows={5}

                                    />

                                </Box>
                            </div>

                            <div>
                                <input type='hidden'
                                    name='u-id'
                                    value={user.id}
                                />




                                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center', mt: .5, pl: 0 }}>
                                    <input type="file" accept="image/*" name='image' onChange={addPictureFile} />

                                </Box>
                                <Button variant='contained' name='image' color='primary' type='submit'>Submit</Button>

                            </div>
                        </form>
                    </Form>
                </Modal>
            )}
        </div>
    );
};


export default ImageUpload;
