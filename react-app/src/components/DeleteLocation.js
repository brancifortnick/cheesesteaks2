import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteOneLocation, getAllLocations } from "../store/location";
import Button from '@mui/material/Button'
import { Box, ButtonGroup } from "@mui/material";
import { Modal } from "../context/Modal";
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
const DeleteLocation = ({ locationId }) => {
  const [showModal, setModal] = useState(false)
  const history = useHistory();
  const dispatch = useDispatch();

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
    <div className='delete-container'>
      <Button type="submit" onClick={() => setModal(true)}>
        <DeleteIcon color='disabled' sx={{ color: '#fbd345' }} />
      </Button>
      {showModal && (
        <Modal onClose={() => setModal(false)}>
          <div>
            Are you sure you want to delete this establishment?
          </div>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <Button type="submit" onClick={() => setModal(false)}>
              <CheckIcon sx={{ color: '#ffd345' }} onClick={onSubmit} />
            </Button>
            <Button type="submit" onClick={() => setModal(false)}>
              <CloseIcon sx={{ color: '#fb6c45' }} />
            </Button>
          </Box>
        </Modal>
      )
      }
    </div >
  );
};
export default DeleteLocation;
