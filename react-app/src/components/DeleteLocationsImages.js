import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { deletePhoto, getAPhoto, getPhotos } from "../store/image";
import { Modal } from "../context/Modal";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import CancelIcon from '@mui/icons-material/Cancel';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import './DeleteLocationsImages.css'
import { Typography } from "@mui/material";



const DeleteLocationsImages = ({ imageId }) => {
    const [showModal, setModal] = useState(false);
    const { locationId } = useParams()
    const history = useHistory();
    const dispatch = useDispatch();


    const onSubmit = async (e) => {
        e.preventDefault();
        dispatch(deletePhoto(Number(imageId)));
        setModal(false)
        history.push(`/locations/${locationId}`)
    };
    const handleCancel = async (e) => {
        e.preventDefault();
        setModal(false)
        history.push(`/locations/${locationId}`)
    }
    useEffect(() => {
        dispatch(getPhotos(locationId))
    }, [dispatch, locationId])
    return (
        <div className='container for buttons'>
            <div className='delete-location-images-modal-btn'>
                <DeleteIcon color='disabled' sx={{ color: '#FB6C45' }} id="delete-location-images-modal-btn" onClick={() => setModal(true)} /></div>
            {showModal && (

                <Modal onClose={() => setModal(false)}>
                    <ButtonGroup>
                        <Typography>Delete photo and comments</Typography>
                        <Button onClick={onSubmit}><CheckIcon sx={{ width: 100 }} />
                        </Button>


                        <Button onClick={handleCancel}>
                            <CancelIcon color='disabled' sx={{ color: 'red' }} />
                        </Button>
                    </ButtonGroup>
                </Modal>
            )}
        </div>
    )
};
export default DeleteLocationsImages;
