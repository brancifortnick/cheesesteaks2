import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAPhoto, getLocationsImages, getPhotos, postNewPhoto } from '../store/image'

import { Modal } from "../context/Modal";




const ImageUpload = () => {


    const dispatch = useDispatch()
    const history = useHistory()
    const user = useSelector((state) => state.session.user?.id);

    const { locationId } = useParams()
    console.log(locationId, 'locationID from useparmas in IMAGEUPLOAD F?E C')
    console.log(locationId, user.id, '>>>>>from IMAGEUPLOAD frontend')
    const location = useSelector(state => state.location)
    console.log(location, "location from image upload ==> useselector gravving state")

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


            dispatch(getAPhoto(Number(locationId)))
        }
        history.push(`/locations/${locationId}`);
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
    }, dispatch, locationId)


    const addPictureFile = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    return (
        <div className="image-form-container">
            <button
                id="upload-location-image"
                onClick={() => setModal(true)}
            >
                upload a photo
            </button>
            {showModal && (
                <Modal onClose={() => setModal(false)}>
                    <h2>Add New Photos</h2>
                    <form className="form-container" onSubmit={onSubmit}>
                        <div>
                            <input
                                type="text"
                                name="title"
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}
                            />


                            <input type="file" accept="image/*" name='image' onChange={addPictureFile} />
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </Modal>
            )}
        </div>
    );
};


export default ImageUpload;
