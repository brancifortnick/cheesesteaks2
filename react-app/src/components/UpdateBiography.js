import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateBiography, getOneLocation } from '../store/location'
import { Modal } from "../context/Modal";
import { useHistory } from "react-router-dom";
// import "./UpdateBiography.css";
// import Modal from '@mui/material/Modal';

const UpdateBiography = ({ locationBio, locationId }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [biography, setBiography] = useState("");
  const [showModal, setModal] = useState(false);

  const onSubmit = async (e) => {
    const formData = new FormData();
    formData.append("biography", biography);
    dispatch(updateBiography(formData, locationId));
    setModal(false);
    history.push(`/locations/${locationId}`);
  };

  useEffect(() => {
    dispatch(getOneLocation(parseInt(locationId)));
  }, [dispatch, locationId]);

  return (
    <>
      <button id="biography-edit" onClick={() => setModal(true)}>
        Edit Locations Bio
      </button>
      {showModal && (
        <Modal onClose={() => setModal(false)}>
          <form onSubmit={onSubmit}>
            <label id="biography-form">
              Restaurants Biography
              <textarea
                name="biography"
                placeholder={locationBio}
                onChange={(e) => setBiography(e.target.value)}
                value={biography}
              />
            </label>
            <button type="submit" id="update-biography-submit">
              Post Bio
            </button>
          </form>
        </Modal>
      )}
    </>
  );
};
export default UpdateBiography;
