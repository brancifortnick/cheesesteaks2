import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { deletePhoto, getAPhoto, getPhotos } from "../store/image";
import { Modal } from "../context/Modal";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import CancelIcon from '@mui/icons-material/Cancel';
import CheckIcon from '@mui/icons-material/Check';
import TrashCanIcon from '@mui/icons-material/Delete';
const DeleteLocationsImages = ({ imageId }) => {
    const [showModal, setModal] = useState(false);
    const { locationId } = useParams()
    const history = useHistory();
    const dispatch = useDispatch();
    const image = useSelector(state => state.image)
    const user = useSelector(state => state.session.user)
    // console.log(locationId, 'locationID????????????????????????????????????????????????---deletelocationsimages', image, "image state from DELTELOCATIONSIMAGES))))))))))))))))))))))))))))))))))))))))", imageId, "passed in as a prop obj")
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
            <button id="delete-location-images-modal-btn" onClick={() => setModal(true)}><TrashCanIcon /></button>
            {showModal && (
                
                <Modal onClose={() => setModal(false)}>
                    <ButtonGroup>
                        <Button onClick={onSubmit}><CheckIcon sx={{width: 100}} />
                        </Button>
               
                 
                        <Button onClick={handleCancel}>
                            <CancelIcon color='disabled' sx={{color: 'red'}} />
                        </Button>
                    </ButtonGroup>
                </Modal>
            )}
             </div>
    )
};
export default DeleteLocationsImages;
