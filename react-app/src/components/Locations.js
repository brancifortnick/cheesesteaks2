import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getOneLocation } from "../store/location";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import UpdateBiography from "./UpdateBiography";
import DeleteLocation from "./DeleteLocation";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import GetLocationsImages from "./GetLocationsImages";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import DeleteEstablishment from "./DeleteEstablishment";
import { getImagesComments } from "../store/comment";
import Grid from "@mui/material/Grid";
import DeleteLocationsImages from "./DeleteLocationsImage";
import "./Locations.css";

function Locations() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.user);
  const { locationId } = useParams();
  const image = useSelector((state) => Object.values(state.image));
  console.log(image, "coming from locations.js <<<<<imageOBJ??????");
  const comment = useSelector((state) => Object.values(state.comment));
  const location = useSelector((state) => state.location);

  useEffect(() => {
    dispatch(getOneLocation(Number(locationId)));
  }, [dispatch, locationId]);

  return (
    <div className="card-container">
      <div id="delete-component">
        {currentUser.id === Number(location.user_id) ? (
          <DeleteLocation locationId={locationId} />
        ) : null}
      </div>

      {location.profile_img !== null ? (
        <Box sx={{ display: "flex", alignContent: "center", mx: "auto" }}>
          <Avatar sx={{ width: 300, height: 300 }}>
            <img
              style={{ objectFit: 'contain' }}
              className="card"
              src={location.profile_img}
              alt="image loading..."
            ></img>
          </Avatar>
        </Box>
      ) : null}
      <div id="update-biography">
        {currentUser.id === Number(location.user_id) ? (
          <UpdateBiography

            locationBio={location.biography}
            locationId={location.id}
          />
        ) : null}
      </div>

      <div className="description-div">
        <span id="description-text">
          <strong>Description</strong>
        </span>

      </div>

      <p id="bio">{location.biography}</p>

      <div>
        <div id='add-pictures'>
          <NavLink
            style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: "4pt", fontWeight: "bolder", color: "#1976d2" }}
            to={`/locations/${location.id}/image-upload`}
          >
            Add Photos
          </NavLink>
        </div>
        {" "}
        <div className="establishment-images">
          <GetLocationsImages imageId={image.id} locationId={locationId} />
        </div>
      </div>

      {/* <div>
        {currentUser.id === Number(image.user_id) ? (
          <DeleteLocationsImages imageId={image.id} locationId={locationId} />
        ) : null}
      </div> */}
    </div>
  );
}
export default Locations;