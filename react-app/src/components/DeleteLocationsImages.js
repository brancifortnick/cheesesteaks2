import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { deletePhoto, getAPhoto, getPhotos } from "../store/image";
import { Modal } from "../context/Modal";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./DeleteLocationsImages.css";

const DeleteLocationsImages = ({ imageId }) => {
  const [showModal, setModal] = useState(false);
  const { locationId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(deletePhoto(Number(imageId)));
    setModal(false);
    history.push(`/locations/${locationId}`);
  };
  const handleCancel = async (e) => {
    e.preventDefault();
    setModal(false);
    history.push(`/locations/${locationId}`);
  };
  useEffect(() => {
    dispatch(getPhotos(locationId));
  }, [dispatch, locationId]);
  return (
    <div className="container for buttons">
      <div className="delete-location-images-modal-btn">
        <Button type="submit" onClick={() => setModal(true)}>
          <DeleteIcon color="disabled" sx={{ color: "#fbd345" }} />
        </Button>
      </div>
      {showModal && (
        <Modal onClose={() => setModal(false)}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            Are you sure you want to delete this image?
          </div>
          <Box>
            <Button onClick={onSubmit}>
              <CheckIcon
                sx={{
                  color: "#fbd345",
                }}
              />
            </Button>

            <Button onClick={handleCancel}>
              <CloseIcon sx={{ color: "#fb6c45" }} />
            </Button>
          </Box>
        </Modal>
      )}
    </div>
  );
};
export default DeleteLocationsImages;
