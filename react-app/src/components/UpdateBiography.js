import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateBiography, getOneLocation } from "../store/location";
import { Modal } from "../context/Modal";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import "./UpdateBiography.css";
import EditIcon from "@mui/icons-material/Edit";

import CancelIcon from "@mui/icons-material/Cancel";
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
    setModal(false);
  };
  useEffect(() => {
    dispatch(getOneLocation(parseInt(locationId)));
  }, [dispatch, locationId]);
  return (
    <>
      <Button id="biography-edit" onClick={ () => setModal(true) }>
        <EditIcon sx={ { color: "#fb6c45" } } />
      </Button>
      { showModal && (
        <Modal onClose={ () => setModal(false) }>
          <form onSubmit={ onSubmit }>
            <Box>
              <TextField

                variant='outlined'
                multiline
                minRows={ 3 }
                sx={ {
                  width: 400,
                  fontWeight: "800",
                  fontStyle: "italic",
                  maxWidth: "600px",
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'black' },
                    '&:hover fieldset': { borderColor: '#fb6c45' },
                    '&.Mui-focused fieldset': { borderColor: '#fb6c45' },
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: '#fb6c45',
                  },
                } }
                fullWidth
                type="text"
                name="biography"
                placeholder='Edit store bio...'
                onChange={ (e) => setBiography(e.target.value) }
                value={ biography }
              />
            </Box>
            <Box sx={ { display: 'flex', flexDirection: 'row', justifyContent: 'center' } }>
              <Button
                sx={ { color: "#fb6c45" } }
                type="submit"
                id="update-biography-submit"
              >
                Submit changes
              </Button>
              <Button
                type="submit"
                id="cancel-bio-update"
                onClick={ cancelModal }
              >
                <CloseIcon sx={ { color: "#ffd345" } } />
              </Button>
            </Box>
          </form>
        </Modal>
      ) }
    </>
  );
};
export default UpdateBiography;
