import React, { useEffect, useState } from "react";
import { getOneLocation } from "../store/location";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import UpdateBiography from "./UpdateBiography";
import DeleteLocation from "./DeleteLocation";
import Box from "@mui/material/Box";
import "./Locations.css";
import { Modal } from "../context/Modal";
import { getPhotos } from "../store/image";
import AllImagesRefactor from './AllImagesRefactor';
import ImageUpload from "./ImageUpload";
function Locations() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.user);
  const userId = useSelector((state) => state.session.user?.id);
  const [showModal, setModal] = useState(false)
  const comment = useSelector((state) => (state.comment));
  const location = useSelector((state) => state.location);
  const images = useSelector(state => Object.values(state.image))
  const { locationId } = useParams()
  useEffect(() => {
    dispatch(getOneLocation((locationId)));
    dispatch(getPhotos(locationId))
  }, [dispatch, locationId]);
  return (
    <>
      <div className="card-container">
        {location.profile_img !== null ? (
          <Box>
            <img
              className="location-image"
              src={location.profile_img}
              alt="...loading"
            />
            <div className="location-name-container">
              <div className="location-name">{location.location_name}</div>
              <div>
                {currentUser.id === Number(location.user_id) ? (
                  <UpdateBiography
                    locationBio={location.biography}
                    locationId={location.id}
                  />
                ) : null}
                {location.biography}
              </div>
              <ImageUpload locationId={locationId} />
              <DeleteLocation location={location.id} />
            </div>
          </Box>
        ) : null}

        {/*
          <div id="update-biography">
            {currentUser.id === Number(location.user_id) ? (
              <UpdateBiography
                locationBio={location.biography}
                locationId={location.id}
              />
          ) : null} */}
      </div>
      <div className="image-cards-and-delete-comp">
        <div className="image-cards-container">
          <AllImagesRefactor images={images} locationId={locationId} />
        </div>
      </div>
    </>
  );
};
export default Locations;
