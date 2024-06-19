import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateBiography, getOneLocation } from '../store/location'
import { Modal } from "../context/Modal";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
// import "./UpdateBiography.css";
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

  useEffect(() => {
    dispatch(getOneLocation(parseInt(locationId)));
  }, [dispatch, locationId]);

  return (
    <>
      <Button sx={{ backgroundColor: 'white' }} id="biography-edit" onClick={() => setModal(true)}>
        Edit your experience description
      </Button>
      {showModal && (
        <Modal onClose={() => setModal(false)}>
          <form onSubmit={onSubmit}>
            <Box sx={{
              display: 'inlineFlex', alignText: "flexStart"
            }}>
              <TextField
                multiline
                minRows={5}
                sx={{
                  flexWrap: 'wrap', alignContent: 'center', mt: .5,
                  p: .5, width: 400, fontWeight: '800', fontStyle: 'italic',
                  maxWidth:
                    '600px'
                }}
                fullWidth
                type="text"
                name="biography"
                placeholder={locationBio}
                onChange={(e) => setBiography(e.target.value)}
                value={biography}
              />
            </Box>


            <Button type="submit" id="update-biography-submit">
              Edit Description
            </Button>
          </form>
        </Modal>
      )
      }
    </>
  );
};
export default UpdateBiography;
