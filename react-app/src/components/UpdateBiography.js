import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateBiography, getOneLocation } from '../store/location'
import { Modal } from "../context/Modal";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import EditLocationIcon from '@mui/icons-material/EditLocation';
// import "./UpdateBiography.css";
import EditIcon from '@mui/icons-material/Edit';
import { ButtonGroup } from "@mui/material";
// import Modal from '@mui/material/Modal';
const UpdateBiography = ({ locationBio, locationId }) => {
  const dispatch = useDispatch();
  const [biography, setBiography] = useState("");
  const [showModal, setModal] = useState(false);
  const onSubmit = async (e) => {
    const formData = new FormData();
    formData.append("biography", biography);
    dispatch(updateBiography(formData, locationId));
    setModal(false);
  };


  const cancelModal = () => {
    setModal(false)
  }
  useEffect(() => {
    dispatch(getOneLocation(parseInt(locationId)));
  }, [dispatch, locationId]);
  return (
    <>
      <Button id="biography-edit" onClick={() => setModal(true)}>
        <EditIcon />
      </Button>
      {showModal && (
        <Modal onClose={() => setModal(false)}>
          <form onSubmit={onSubmit}>
            <Box
              // sx={{
              //   display: "inlineFlex",
              //   alignText: "flexStart",
              // }}
            >
              <TextField
                multiline
                minRows={3}
                sx={{
                  width: 400,
                  fontWeight: "800",
                  fontStyle: "italic",
                  maxWidth: "600px",
                }}
                fullWidth
                type="text"
                name="biography"
                placeholder={locationBio}
                onChange={(e) => setBiography(e.target.value)}
                value={biography}
              />
            </Box>
            <Box>
         
              <Button type="submit" id="update-biography-submit">
                Submit changes
            </Button>
            <Button type='submit' id='cancel-bio-update' onClick={cancelModal}>
              Cancel
            </Button>
            </Box>
          </form>
        </Modal>
      )}
    </>
  );
};
export default UpdateBiography;
