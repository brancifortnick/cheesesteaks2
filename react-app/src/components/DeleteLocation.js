import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteOneLocation, getAllLocations } from "../store/location";
import Button from '@mui/material/Button'
import { Box, ButtonGroup } from "@mui/material";
import { Modal } from "../context/Modal";
const DeleteLocation = () => {
  const [showModal, setModal] = useState(false)
  const history = useHistory();
  const dispatch = useDispatch();
  const { locationId } = useParams()
  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(deleteOneLocation(Number(locationId)))
    dispatch(getAllLocations());
    setModal(false);
    
    history.push('/')
  };
  const cancelModal = () => {
    setModal(false)
  }
  return (
    <div id="delete-location-container">
      <Button onClick={() => setModal(true)} id="delete-location-modal-btn">Delete Establishment</Button>
      <Box>
        {showModal && (   <ButtonGroup>
          <Modal onClose={() => setModal(true)}>
            <div className='delete-location-modal'>
           
              <Button onClick={onSubmit} id="delete-location-btn">
                Confirm Delete
              </Button>
         
            </div>
            <div className='cancel-modal-btn'>
              <Button onClick={cancelModal} id="cancel-modal-btn">
                Cancel
              </Button>
            </div>
          </Modal>
          </ButtonGroup>
        )}
      </Box>
    </div >
  );
};
export default DeleteLocation;
